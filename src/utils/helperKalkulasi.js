/**
 * Menghitung estimasi umur lampu berdasarkan pemakaian nyata kalender.
 * @param {Object} input - Objek berisi data input form
 * @param {number} persentaseKlaim - Persentase umur klaim (misal 100 atau 80)
 */
export const hitungEstimasiLampu = (input, persentaseKlaim = 100) => {
  if (!input) return null;

  const { klaimUmurLampuJam, jamPemakaianHarian, hariPerMinggu, tanggalPasang } = input;

  // Validasi: Pastikan tidak ada data yang kosong sebelum menghitung
  if (!klaimUmurLampuJam || !jamPemakaianHarian || !hariPerMinggu || !tanggalPasang) {
    return null;
  }

  const klaimJamDisesuaikan = Number(klaimUmurLampuJam) * (persentaseKlaim / 100);
  const pemakaianHarian = Number(jamPemakaianHarian);
  const pemakaianMingguanHari = Number(hariPerMinggu);
  const tglPasangDate = new Date(tanggalPasang);

  if (isNaN(tglPasangDate.getTime()) || pemakaianHarian <= 0 || pemakaianMingguanHari <= 0) {
    return null;
  }

  // INTI PERHITUNGAN: Total hari menyala aktif secara riil
  const totalHariMenyala = klaimJamDisesuaikan / pemakaianHarian;

  // Rumus konversi ke Hari Kalender (termasuk menghitung hari libur/off dalam seminggu)
  // Rasio kalender = 7 hari seminggu / jumlah hari kerja seminggu
  const totalHariKalenderDilewati = totalHariMenyala * (7 / pemakaianMingguanHari);

  // Hitung Estimasi Tanggal Ganti Berdasarkan Lompatan Hari Kalender Utuh
  const estimasiTanggalGanti = new Date(tglPasangDate);
  estimasiTanggalGanti.setDate(estimasiTanggalGanti.getDate() + Math.floor(totalHariKalenderDilewati));

  // --- MEMECAH DURASI UNTUK RINCIAN TAMPILAN UI ---
  // Kita breakdown totalHariKalenderDilewati agar tampilannya logis (Tahun, Bulan, Hari, Jam)
  const totalTahun = Math.floor(totalHariMenyala / 365);
  const sisaHariSetelahTahun = totalHariMenyala % 365;

  const totalBulan = Math.floor(sisaHariSetelahTahun / 30);
  const sisaHariSetelahBulan = sisaHariSetelahTahun % 30;

  const totalHariUtuh = Math.floor(sisaHariSetelahBulan);
  
  // Ambil pecahan desimal dari hari untuk dijadikan sisa Jam pemakaian aktif
  const pecahanDesimalHari = sisaHariSetelahBulan % 1;
  // Kembalikan sisa pecahan hari kalender ke proporsi jam operasional harian asli
  const sisaJamUtuh = Math.floor(pecahanDesimalHari * pemakaianHarian);

  const formatID = (date) => {
    return date.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });
  };

  return {
    tanggalPasangFormated: formatID(tglPasangDate),
    tanggalGantiFormated: formatID(estimasiTanggalGanti),
    rincianUmur: {
      tahun: totalTahun,
      bulan: totalBulan,
      hari: totalHariUtuh,
      jam: sisaJamUtuh
    }
  };
};
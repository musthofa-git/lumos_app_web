import React from 'react';
import { hitungEstimasiLampu } from '../utils/helperKalkulasi';

const HasilEstimasi = ({ dataInput }) => {
  // Memanggil utils perhitungan
  const hasil100 = hitungEstimasiLampu(dataInput, 100);
  const hasil80 = hitungEstimasiLampu(dataInput, 80);

  return (
    <>
      {/* KOLOM TENGAH: Hasil Estimasi Tanggal */}
      <div className="col-md-4 text-center px-4 border-end border-secondary border-opacity-25">
        <div className="mb-5">
          <h5 className="fw-bold mb-2">Tanggal Pasang</h5>
          <h3 className="fw-bold text-dark" style={{ fontFamily: 'sans-serif' }}>
            {hasil100 ? hasil100.tanggalPasangFormated : "00 Bulan Tahun"}
          </h3>
        </div>
        <div>
          <h5 className="fw-bold mb-2">Estimasi Tanggal Ganti</h5>
          <h3 className="fw-bold text-dark" style={{ fontFamily: 'sans-serif' }}>
            {hasil100 ? hasil100.tanggalGantiFormated : "00 Bulan Tahun"}
          </h3>
        </div>
      </div>

      {/* KOLOM KANAN: Hasil Rincian Umur Lampu */}
      <div className="col-md-4 text-center px-4">
        <div className="mb-5">
          <h5 className="fw-bold mb-3">Umur Lampu Anda</h5>
          <div className="d-flex justify-content-center gap-4 fw-bold fs-2 text-dark">
            <div>
              {hasil100 ? hasil100.rincianUmur.tahun : "00"}{" "}
              <span className="d-block fs-6 text-muted fw-normal">Tahun</span>
            </div>
            <div>
              {hasil100 ? hasil100.rincianUmur.bulan : "00"}{" "}
              <span className="d-block fs-6 text-muted fw-normal">Bulan</span>
            </div>
          </div>
          <div className="d-flex justify-content-center gap-4 fw-bold fs-2 text-dark mt-2">
            <div>
              {hasil100 ? hasil100.rincianUmur.hari : "00"}{" "}
              <span className="d-block fs-6 text-muted fw-normal">Hari</span>
            </div>
            <div>
              {hasil100 ? hasil100.rincianUmur.jam : "00"}{" "}
              <span className="d-block fs-6 text-muted fw-normal">Jam</span>
            </div>
          </div>
        </div>

        <div>
          <h5 className="fw-bold mb-2">Est. Tgl Ganti (klaim 80%)</h5>
          <h3 className="fw-bold text-dark" style={{ fontFamily: 'sans-serif' }}>
            {hasil80 ? hasil80.tanggalGantiFormated : "00 Bulan Tahun"}
          </h3>
        </div>
      </div>
    </>
  );
};

export default HasilEstimasi;
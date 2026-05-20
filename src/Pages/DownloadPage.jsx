import React from 'react';
import { DownloadImg } from '../assets/img'

const DownloadPage = () => {
  return (
    <div className="h-100 w-100 d-flex flex-column bg-white">
      {/* MAIN CONTENT (Split Screen) */}
      <div className="flex-grow-1 d-flex align-items-center">
        <div className="container-fluid h-100 p-0">
          <div className="row g-0 h-100">

            {/* Sisi Kiri - Tabel & Aksi (Latar Biru Muda) */}
            <div className="col-md-6 d-flex align-items-center" style={{ backgroundColor: '#D1F5FF' }}>
              <div className="px-5 w-100 py-4">
                <h1 className="fw-bold mb-4 display-4" style={{ letterSpacing: '-1px' }}>Download</h1>

                <div className="d-flex justify-content-between fw-bold mb-2 small px-1">
                  <span>Gedung Pascasarjana</span>
                  <span>Tahunan</span>
                </div>

                {/* Struktur Tabel Utama */}
                <div className="bg-white p-3 shadow-sm border border-secondary border-opacity-25" style={{ minHeight: '320px' }}>
                  <div className="table-responsive">
                    <table className="table table-sm table-borderless align-middle m-0" style={{ fontSize: '0.75rem' }}>
                      <thead>
                        <tr className="border-bottom border-dark border-3 fw-bold">
                          <th style={{ width: '8%' }}>No.</th>
                          <th style={{ width: '15%' }}>Ruang</th>
                          <th style={{ width: '22%' }}>Tanggal Pasang</th>
                          <th style={{ width: '22%' }}>Tanggal Ganti</th>
                          <th style={{ width: '13%' }}>Petugas</th>
                          <th style={{ width: '20%' }}>Jenis Lampu</th>
                          <th>Keterangan</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Baris kosong dengan garis bawah tipis menyerupai desain cetak */}
                        {[...Array(11)].map((_, i) => (
                          <tr key={i} className="border-bottom border-secondary border-opacity-50">
                            <td className="py-2">{i + 1}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Tombol di Bawah Tabel */}
                <div className="d-flex justify-content-between align-items-center mt-4">
                  <button className="btn btn-dark rounded-0 px-4 fw-bold shadow-sm" style={{ backgroundColor: '#000000', fontSize: '0.85rem' }}>
                    Lihat Detail
                  </button>
                  <button className="btn btn-success rounded-0 px-4 fw-bold shadow-sm" style={{ backgroundColor: '#008000', border: 'none', fontSize: '0.85rem' }}>
                    Download PDF
                  </button>
                </div>
              </div>
            </div>

            {/* Sisi Kanan - Ikon Download Bulat */}
            <div className="col-md-6 d-flex justify-content-center align-items-center bg-white">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                style={{
                  width: '280px',
                  height: '280px',
                  backgroundColor: '#D1F5FF'
                }}
              >
                {/* Ikon Download */}
                <img
                  src={DownloadImg}
                  alt="Manage"
                  style={{ width: '50%', height: '50%', objectFit: 'contain' }}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default DownloadPage;
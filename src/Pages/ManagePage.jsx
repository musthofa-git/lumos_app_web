import React from 'react';
import TopIcon from '../components/TopIcon';

const ManagePage = () => {
    return (
        <div className="vw-100 min-vh-100 d-flex flex-column bg-white">
            <TopIcon activeIcon="ManagePage" />
            <div className="flex-grow-1" style={{ backgroundColor: '#D1F5FF' }}>
                <div className="container-fluid py-5 px-5">
                    <h1 className="text-center fw-bold display-4 mb-5">Manage</h1>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <h5 className="fw-bold text-center mb-3">Tambah Lampu</h5>
                            <div className="d-flex flex-column gap-2 mb-3">
                                <input type="text" className="form-control border-0 rounded-0 shadow-sm" placeholder="Nama Lampu" />
                                <select className="form-select border-0 rounded-0 shadow-sm"><option>Merk Lampu</option></select>
                                <select className="form-select border-0 rounded-0 shadow-sm"><option>Tipe Lampu</option></select>
                                <select className="form-select border-0 rounded-0 shadow-sm"><option>Daya (Watt)</option></select>
                                <select className="form-select border-0 rounded-0 shadow-sm"><option>Klaim Umur (Jam)</option></select>
                            </div>
                            <button className="btn btn-success rounded-0 px-4 fw-bold" style={{ backgroundColor: '#008000', border: 'none' }}>Tambah Lampu</button>

                            <div className="d-flex mt-4">
                                <div className="bg-warning px-3 py-1 border border-dark border-bottom-0 small fw-bold">Daftar Lampu Tersedia</div>
                                <div className="bg-secondary text-white px-3 py-1 border border-dark border-bottom-0 border-start-0 small fw-bold opacity-50">Daftar Lampu Terpasang</div>
                            </div>
                            <div className="bg-white border border-dark p-2" style={{ height: '160px', overflowY: 'auto' }}>
                                <table className="table table-sm table-borderless small m-0">
                                    <thead className="border-bottom border-dark">
                                        <tr><th>No.</th><th>Nama Lampu</th><th>Tipe</th><th>Watt</th></tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>1</td><td>---</td><td>---</td><td>---</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="col-md-4 text-center">
                            <h5 className="fw-bold mb-1">PASCASARJANA</h5>
                            <div className="d-flex justify-content-between px-4 small text-muted mb-2">
                                <span>Lantai ...</span><span>Ruangan ...</span>
                            </div>
                            <div className="bg-white border shadow-sm d-flex align-items-center justify-content-center" style={{ height: '250px' }}>
                                <span className="text-muted fs-4" style={{ fontFamily: 'serif' }}>Denah Gedung</span>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <h5 className="fw-bold text-center mb-3">Penggantian Lampu</h5>
                            <div className="d-flex flex-column gap-2 mb-3">
                                <select className="form-select border-0 rounded-0 shadow-sm"><option>Lantai ...</option></select>
                                <select className="form-select border-0 rounded-0 shadow-sm"><option>Ruangan ...</option></select>
                                <select className="form-select border-0 rounded-0 shadow-sm"><option>Nama Lampu</option></select>
                                <select className="form-select border-0 rounded-0 shadow-sm"><option>Tanggal Ganti</option></select>
                            </div>
                            <div className="text-end mb-3">
                                <button className="btn btn-success rounded-0 px-4 fw-bold" style={{ backgroundColor: '#008000', border: 'none' }}>Ganti Lampu</button>
                            </div>
                            <h6 className="fw-bold mb-1">Daftar Penggantian Lampu</h6>
                            <div className="bg-white border border-dark p-2" style={{ height: '140px', overflowY: 'auto' }}>
                                <table className="table table-sm table-borderless small m-0">
                                    <thead className="border-bottom border-dark">
                                        <tr><th>No.</th><th>Nama Lama</th><th>Tgl Pasang</th></tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>1</td><td>---</td><td>---</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagePage;
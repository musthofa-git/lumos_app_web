import React from 'react';
import { LoginImg } from '../assets/img';

const LoginPage = () => {
  return (
    <div className="h-100 w-100 d-flex flex-column bg-white">

      {/* 2. MAIN CONTENT (Split Screen) */}
      <div className="flex-grow-1 d-flex align-items-center">
        <div className="container-fluid h-100 p-0">
          <div className="row g-0 h-100">

            {/* Sisi Kiri */}
            <div className="col-md-6 d-flex justify-content-center align-items-center bg-white">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                style={{
                  width: '300px',
                  height: '300px',
                  backgroundColor: '#D1F5FF'
                }}
              >
                {/* ikon */}
                <img
                  src={LoginImg}
                  alt="Manage"
                  style={{ width: '50%', height: '50%', objectFit: 'contain' }}
                />              </div>
            </div>

            {/* Sisi Kanan - Form Login */}
            <div className="col-md-6 d-flex align-items-center" style={{ backgroundColor: '#D1F5FF' }}>
              <div className="px-5 w-75">
                <h1 className="fw-bold mb-4 display-4">Log In</h1>

                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control form-control-lg border-0 rounded-0 py-3"
                      placeholder="username"
                      style={{ fontSize: '1.2rem', fontFamily: 'serif' }}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="password"
                      className="form-control form-control-lg border-0 rounded-0 py-3"
                      placeholder="password"
                      style={{ fontSize: '1.2rem', fontFamily: 'serif' }}
                    />
                  </div>
                  <button
                    className="btn btn-success w-100 fw-bold py-3 rounded-0"
                    style={{ backgroundColor: '#008000', border: 'none', fontSize: '1.1rem' }}
                  >
                    LOGIN
                  </button>
                </form>

                <div className="mt-5 text-dark" style={{ fontSize: '0.9rem' }}>
                  <p className="fst-italic mb-4">
                    Belum Punya Akun?<br />
                    Hubungi Unit Umum dan Rumah untuk Mendapatkan Username dan Password Anda
                  </p>

                  <p className="text-muted" style={{ textAlign: 'justify', lineHeight: '1.4' }}>
                    ** Log In ini diperlukan untuk melakukan manajemen penggantian lampu, pencatatan pemasangan lampu, tambah database lampu, download laporan tahunan unit lampu, dll untuk kepentingan Laporan Tahunan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
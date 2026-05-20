import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GedungPENSImg, LoginImg, MonitoringImg, DownloadImg } from '../assets/img';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const HomePage = () => {
  const navigate = useNavigate();
  console.log("Cek Aset Gambar Gedung:", GedungPENSImg);

  return (
    <div className="h-100 w-100 position-relative" 
      style={{ fontFamily: 'Arial, sans-serif' }}>

      {/* HERO SECTION */}
      <div
        className="h-100 w-100 position-relative d-flex align-items-center"
        style={{
          backgroundColor: '#005f6b',
          backgroundImage: `linear-gradient(rgba(0, 95, 107, 0.7), rgba(0, 95, 107, 0.7)), url(${GedungPENSImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
        }}
      >
        {/* Overlay gelap jika gambar terlalu terang agar teks terbaca */}
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row">
            <div className="col-lg-6">
              <h1 className="display-4 fs-1 fw-bold mb-0">
                LUMOS
              </h1>
              <p className="fst-italic fs-2 mb-3 text-warning">
                (Lighting Usage Monitoring System)
              </p>
              <p className="lead fs-5" style={{ maxWidth: '500px' }}>
                Aplikasi Monitoring Perhitungan Masa Pakai Lampu berdasarkan
                Klaim Masa Pakai Pabrikan dan Masa Pakai Rutin Harian
              </p>
            </div>
          </div>
        </div>

        {/* Floating Icons Container */}
        <div className="container position-absolute start-0 end-0" style={{ bottom: '4vh', zIndex: 3 }}>
          <div className="d-flex justify-content-around align-items-center px-3">
            
            <div className="rounded-circle bg-info d-flex align-items-center justify-content-center shadow"
              style={{ width: '130px', height: '130px', border: '4px solid white', cursor: 'pointer' }}
              onClick={() => navigate('/LoginPage')}
            >
              <img
                src={LoginImg}
                alt="Calculate"
                style={{ width: '50%', height: '50%', objectFit: 'contain' }}
              />
            </div>

            <div className="rounded-circle bg-info d-flex align-items-center justify-content-center shadow"
              style={{ width: '130px', height: '130px', border: '4px solid white', cursor: 'pointer' }}
              onClick={() => navigate('/MonitoringPage')}
            >
              <img
                src={MonitoringImg}
                alt="Calculate"
                style={{ width: '50%', height: '50%', objectFit: 'contain' }}
              />
            </div>

            <div className="rounded-circle bg-info d-flex align-items-center justify-content-center shadow"
              style={{ width: '130px', height: '130px', border: '4px solid white', cursor: 'pointer' }}
              onClick={() => navigate('/DownloadPage')}
              >
              <img
                src={DownloadImg}
                alt="Calculate"
                style={{ width: '50%', height: '50%', objectFit: 'contain' }}
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
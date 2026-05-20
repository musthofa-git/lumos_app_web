import React from 'react';

const Footer = () => {
  return (
    <footer className="footer fixed-bot bg-white py-3 border-top mt-auto">
      <div className="container-fluid px-4 d-flex flex-wrap justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <span className="fw-bold me-2">LUMOS | Politeknik Elektronika Negeri Surabaya</span>
        </div>
        <div className="d-flex gap-3 fs-5">
          <i className="bi bi-instagram"></i>
          <i className="bi bi-linkedin"></i>
          <i className="bi bi-twitter-x"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
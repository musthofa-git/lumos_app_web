import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-0 px-5">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-1" to="/">LUMOS</Link>
        <div className="ms-auto d-flex gap-4">
          <Link to="/LoginPage" className="nav-link fw-semibold">Log In</Link>
          <Link to="/MonitoringPage" className="nav-link fw-semibold">Monitoring</Link>
          <Link to="/DownloadPage" className="nav-link fw-semibold">Download</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
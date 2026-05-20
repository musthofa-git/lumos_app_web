import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Import Komponen
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import Halaman
import HomePage from './pages/HomePage';
import MonitoringPage from './pages/MonitoringPage';
import LoginPage from './Pages/LoginPage';
import DownloadPage from './Pages/DownloadPage';
import ManagePage from './Pages/ManagePage';
import CalculatePage from './Pages/CalculatePage';

const App = () => {
  return (
    <Router>
      <div className="vh-100 w-100 d-flex flex-column">
        
        {/* Navbar akan selalu muncul di atas */}
        <Navbar /> 

        <main className="flex-grow-1 d-flex flex-column">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/MonitoringPage" element={<MonitoringPage />} />
            <Route path="/DownloadPage" element={<DownloadPage />} />
            <Route path="/CalculatePage" element={<CalculatePage />} />
            <Route path="/ManagePage" element={<ManagePage />} />

          </Routes>
        </main>

        {/* Footer akan selalu muncul di bawah */}
        <Footer />
        
      </div>
    </Router>
  );
};

export default App;
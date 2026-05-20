import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CalculatorImg, ManageLampImg, MonitoringImg } from '../assets/img';

const TopIcon = ({ activeIcon }) => {
  const navigate = useNavigate();

  const getStyle = (iconName) => {
    return activeIcon === iconName 
      ? { width: '130px', height: '130px', border: '4px solid white', opacity: 1 }
      : { width: '80px', height: '80px', border: 'none', opacity: 0.6 };
  };

  return (
    <div className="d-flex justify-content-center align-items-center gap-5 my-4">
      
      {/* 1. Hitung Estimasi */}
      <div 
        className="rounded-circle d-flex align-items-center justify-content-center shadow-sm" 
        style={{ ...getStyle('CalculatePage'), backgroundColor: '#D1F5FF', cursor: 'pointer' }}
        onClick={() => navigate('/CalculatePage')}
      >
        <img 
          src={ CalculatorImg }
          alt="Calculate"
          style={{ width: '50%', height: '50%', objectFit: 'contain' }} 
        />
      </div>

      {/* 2. Monitoring */}
      <div 
        className="rounded-circle d-flex align-items-center justify-content-center shadow-sm" 
        style={{ ...getStyle('MonitoringPage'), backgroundColor: '#D1F5FF', cursor: 'pointer' }}
        onClick={() => navigate('/MonitoringPage')}
      >
        <img 
          src={ MonitoringImg }
          alt="Monitoring"
          style={{ width: '50%', height: '50%', objectFit: 'contain' }} 
        />
      </div>

      {/* 3. Manage Lampu */}
      <div 
        className="rounded-circle d-flex align-items-center justify-content-center shadow-sm" 
        style={{ ...getStyle('ManagePage'), backgroundColor: '#D1F5FF', cursor: 'pointer' }}
        onClick={() => navigate('/ManagePage')}
      >
        <img 
          src={ ManageLampImg }
          alt="Manage"
          style={{ width: '50%', height: '50%', objectFit: 'contain' }} 
        />
      </div>

    </div>
  );
};

export default TopIcon;
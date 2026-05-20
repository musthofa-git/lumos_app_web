import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LabelList } from 'recharts';
import TopIcon from '../components/TopIcon';

// Data simulasi untuk grafik batang di image_2ad1bd.png
const data = [
  { name: 'Jan', value: 3 },
  { name: 'Feb', value: 2 },
  { name: 'Mar', value: 4 },
  { name: 'Apr', value: 6 },
  { name: 'May', value: 3 },
  { name: 'Jun', value: 5 },
  { name: 'Jul', value: 2 },
  { name: 'Agt', value: 2 },
  { name: 'Sept', value: 4 },
  { name: 'Okt', value: 6 },
  { name: 'Nov', value: 2 },
  { name: 'Des', value: 20 },
];

const MonitoringPage = () => {
  return (
    <div className="vw-100 min-vh-100 d-flex flex-column bg-white">

      <TopIcon activeIcon="MonitoringPage" />

      {/* MONITORING PANEL (Biru Muda) */}
      <div className="flex-grow-1" style={{ backgroundColor: '#D1F5FF' }}>
        <div className="container-fluid h-100 py-5 px-5">
          <h1 className="text-center fw-bold display-4 mb-5">Monitoring</h1>

          <div className="row mt-4 ">
            {/* Kolom Kiri - Dropdowns */}
            <div className="col-md-4">
              <p className="fw-bold mb-3 text-center">Gedung Pascasarjana</p>
              <div className="mb-3 position-relative">
                <select className="form-select form-select-lg border-0 rounded-0 shadow-sm py-2">
                  <option>Lantai ...</option>
                </select>
              </div>
              <div className="mb-3">
                <select className="form-select form-select-lg border-0 rounded-0 shadow-sm py-2">
                  <option>Ruangan ...</option>
                </select>
              </div>
            </div>

            {/* Kolom Tengah - Denah */}
            <div className="col-md-4 text-center">
              <h5 className="fw-bold mb-1">PASCASARJANA</h5>
              <div className="d-flex justify-content-between px-5 mb-2 text-muted small">
                <span>Lantai ...</span>
                <span>Ruangan ...</span>
              </div>
              <div className="bg-white mx-auto shadow-sm d-flex align-items-center justify-content-center" style={{ height: '250px', width: '90%' }}>
                <span className="fs-3 text-muted" style={{ fontFamily: 'serif' }}>Denah Gedung</span>
              </div>
            </div>

            {/* Kolom Kanan - Grafik Bar */}
            <div className="col-md-4" style={{ minWidth: 0 }}>
              <p className="fw-bold text-center mb-0">Jumlah Penggantian</p>
              <div style={{ width: '100%', height: 250 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data} margin={{ top: 20, right: 10, left: 10, bottom: 5 }}>
                    <XAxis
                      dataKey="name"
                      interval={0}
                      axisLine={true}
                      tickLine={false}
                      tick={{ fontSize: 10 }}
                    />
                    {/* YAxis disembunyikan tapi ruangnya tetap ada untuk margin */}
                    <YAxis hide={true} domain={[0, 'dataMax + 10']} />

                    <Bar
                      dataKey="value"
                      fill="#2598b8"
                      radius={[4, 4, 0, 0]}
                      barSize={20}
                    >
                      {/* Menampilkan angka di atas setiap batang */}
                      <LabelList dataKey="value" position="top" offset={10} />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonitoringPage;
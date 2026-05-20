import React, { useState } from 'react';

const FormInput = ({ onHitungClick }) => {
  const [formInput, setFormInput] = useState({
    klaimUmurLampuJam: '',
    jamPemakaianHarian: '',
    hariPerMinggu: '',
    tanggalPasang: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleSubmit = () => {
    if (!formInput.klaimUmurLampuJam || !formInput.jamPemakaianHarian || !formInput.hariPerMinggu || !formInput.tanggalPasang) {
      alert("Harap isi semua parameter input terlebih dahulu!");
      return;
    }
    // Kirim data ke parent (CalculatePage) saat tombol diklik
    onHitungClick(formInput);
  };

  return (
    <div className="col-md-4 px-4">
      <h6 className="fw-bold mb-3" style={{ letterSpacing: '1px' }}>CALCULATE</h6>
      <div className="d-flex flex-column gap-3 mb-3">
        <input 
          type="number" 
          name="klaimUmurLampuJam"
          className="form-control border-0 rounded-0 shadow-sm py-2" 
          placeholder="Klaim Pabrikan (Jam)" 
          value={formInput.klaimUmurLampuJam}
          onChange={handleChange}
        />

        <input 
          type="number" 
          name="jamPemakaianHarian"
          className="form-control border-0 rounded-0 shadow-sm py-2" 
          placeholder="Aktif / Hari (Jam)" 
          value={formInput.jamPemakaianHarian}
          onChange={handleChange}
        />

        <input 
          type="number" 
          name="hariPerMinggu"
          className="form-control border-0 rounded-0 shadow-sm py-2" 
          placeholder="Aktif / Minggu (Hari)" 
          value={formInput.hariPerMinggu}
          onChange={handleChange}
        />

        <input 
          type="date" 
          name="tanggalPasang"
          className="form-control border-0 rounded-0 shadow-sm py-2 text-muted" 
          value={formInput.tanggalPasang}
          onChange={handleChange}
        />
      </div>
      <button 
        className="btn btn-success rounded-0 px-4 fw-bold shadow-sm" 
        style={{ backgroundColor: '#008000', border: 'none' }}
        onClick={handleSubmit}
      >
        Hitung
      </button>
    </div>
  );
};

export default FormInput;
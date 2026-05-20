import React, { useState } from 'react';
import TopIcon from '../components/TopIcon';
import FormInput from '../components/FormInput';
import HasilEstimasi from '../components/HasilEstimasi';

const CalculatePage = () => {
    const [dataDihitung, setDataDihitung] = useState(null);

    const handleProsesKalkulasi = (dataDariForm) => {
        // Menerima data dari FormInput, lalu memicu re-render pada HasilEstimasi
        setDataDihitung(dataDariForm);
    };

    return (
        <div className="w-100 h-100 d-flex flex-column bg-white">

            <TopIcon activeIcon="CalculatePage" />

            {/* CALCULATE PANEL */}
            <div className="flex-grow-1" style={{ backgroundColor: '#D1F5FF' }}>
                <div className="container-fluid py-5 px-5 h-100">
                    <h1 className="text-center fw-bold display-4 mb-5" style={{ letterSpacing: '-1px' }}>Hitung Estimasi</h1>

                    <div className="row mt-4 align-items-start">

                        {/* 1. Komponen Form (Kiri) */}
                        <FormInput onHitungClick={handleProsesKalkulasi} />

                        {/* 2. Komponen Hasil Tampilan (Tengah & Kanan) */}
                        <HasilEstimasi dataInput={dataDihitung} />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalculatePage;
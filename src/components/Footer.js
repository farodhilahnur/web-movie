import React from 'react';
export default function Footer() {
    return (
        <>
            <div className='border-top mt-5'>
                <div className='container pt-5 pb-5' style={{ height: '230px' }}>
                    <div className='row '>
                        <div className='col-4'>
                            <div className='fw-semibold'>
                                SehatSehat
                            </div>
                            <div className='mt-4'>Tentang Kami</div>
                            <div className='mt-1'>Hubungi Kami</div>
                        </div>
                        <div className='col-4'>
                            <div className='fw-semibold'>
                                Tentang Sehat
                            </div>
                            <div className='mt-4'>Syarat & Ketentuan</div>
                            <div className='mt-1'>Privasi</div>
                            <div className='mt-1'>Iklan</div>
                            <div className='mt-1'>Karir</div>


                        </div>
                        <div className='col-4'>
                            <div className='fw-semibold'>
                                Media Sosial
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
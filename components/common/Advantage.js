import React from 'react';
import Image from 'next/image';
import Men1 from './../../assets/icon/men1.svg'
import Men2 from './../../assets/icon/men2.svg'
import Men3 from './../../assets/icon/men3.svg'

const Advantage = () => {
    return (
        <div className='grid grid-cols-1 text-center mx-12 bg-gradient-to-r from-indigo-600 to-indigo-400 mt-24 md:grid-cols-3 sm:grid-cols-3 rounded-lg'>
            <div className='flex p-6 m-4'>
                <div className='bg-[#8785F3] h-16 p-4 mt-10 rounded-lg'>
                    <Image src={Men1} height={30} alt="Quick Loan Approvals" />
                </div>
                <span className='py-12 text-xl font-bold text-white font-poppins ml-3'>Get that 11 line <br /> in 30 days</span>
            </div>
            <div className='flex p-6 m-4'>
                <div className='bg-[#8785F3] h-16 p-4 mt-10 rounded-lg'>
                    <Image src={Men2} height={30} alt="Quick Loan Approvals" />
                </div>
                <span className='py-12 text-xl font-bold text-white font-poppins ml-3'>14 Days <br/>
                    sherd challenge</span>
            </div>
            <div className='flex p-6 m-4'>
                <div className='bg-[#8785F3] h-16 p-4 mt-10 rounded-lg'>
                    <Image src={Men3} height={30} alt="Quick Loan Approvals" />
                </div>
                <span className='py-12 text-xl font-bold text-white font-poppins ml-3'>Get flat belly <br/> in 30 days</span>
            </div>
        </div>
    );
};

export default Advantage;
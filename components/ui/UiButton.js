import React from 'react';
import Image from 'next/image'


const UiButton = (props) => {
    return (
        <div>
            <button type="button" className="text-white flex gap-8 transition duration-150 bg-primary-btn hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-6 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><span className='p-1'>{props.label}</span> <Image src={props.src} height={25} alt="btn icon"/></button> 
        </div>
    );
};

export default UiButton;
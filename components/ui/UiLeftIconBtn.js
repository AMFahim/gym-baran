import Image from 'next/image'

const UiLeftIconBtn = (props) => {
    return (
        <div>
        <button type="button" className="text-btn-bg shadow-lg flex gap-8 transition duration-150 bg-[#FFFFFF] focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-6 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Image src={props.src} height={25} alt="btn icon"/><span className='p-1'>{props.label}</span></button> 
    </div>
    );
};

export default UiLeftIconBtn;
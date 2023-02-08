import React from 'react';
import Link from "next/link";


const NavItem = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "Program",
        href: "/program"
    },
    {
        name: "Blog",
        href: "/blog"
    },
    {
        name: "About Us",
        href: "/about_us"
    },
]

const Navbar = () => {
    return (
        <div>
            <nav x-data="{ isOpen: false }" className="relative bg-transparent dark:bg-gray-800">
    <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
                <a href="#">
                <span class="bg-[#6765F0] text-white text-sm font-medium  px-4 py-1 rounded dark:bg-blue-900 dark:text-blue-300">GYM</span> <span className='text-[#6765F0]'>baran</span>
                </a>

                {/* <!-- Mobile menu button --> */}
                <div className="flex lg:hidden">
                    <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                        <svg x-show="!isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                        </svg>
                
                        <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>


            {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
            <div x-cloak className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
                <div className="flex gap-5 flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                    {
                        NavItem.map(item => 
                            <Link href={item.href} key={item.name} className="px-3 py-2 font-poppins font-normal mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">{item.name}</Link>
                            )
                    }

                    <button className='bg-btn-bg text-white w-28 h-12 rounded font-poppins'>Log in</button>
                </div>

            </div>
        </div>
    </div>
</nav>
        </div>
    );
};

export default Navbar;
import React, { useState } from 'react';
import { Link, Router } from 'react-router-dom';
import { Presentation } from '../view/Presentation';


export const Navbar2 = () => {
    const [state, setState] = useState(false);
    const [ref, setRef] = useState(true);
    const handleDrop = () =>{
        setState(!state);
        
    }
    
    return (
    <>
        <nav class="flex bg-white flex-wrap items-center justify-between p-4">
        <div class="lg:order-2 w-auto lg:w-1/5 lg:text-center">
            <Link to="/hello_pages" class="text-xl text-gray-800 font-semibold font-heading" >
                Pedro Martínez
            </Link>
        </div>
        <div class="block lg:hidden" >
            <button onClick = {handleDrop}              className="navbar-burger  items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500" name = "menu">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z">
                    </path>
                </svg>
            </button>
            {DropDown(state)}
            
        </div>
        <div class="navbar-menu hidden lg:order-1 lg:block w-full lg:w-2/5">
            <Link class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" to ="/hello_pages">
                Presentation
            </Link>
            <Link class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" to ="/hello_pages/journey">
                Journey
            </Link>
            
        </div>
        <div class="navbar-menu hidden lg:order-3 lg:block w-full lg:w-2/5 lg:text-right">
            
            <Link class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" to ="/hello_pages/FAQS">
                FAQ
            </Link>
            
        </div>
    </nav>
    </>
)}



const DropDown = (prop) =>{
    
    if (prop ){

        return (
    <div class="z-20 origin-top-right fixed right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none translate-x-5" role="menu" name = "menu" aria-orientation="vertical" aria-labelledby="options-menu"
        
    >
        <div class="py-1" role="none">
            <Link to = "/hello_pages" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem">Presentation</Link>
            <Link to = "/hello_pages/Journey" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem">Journey</Link>
            
        </div>
        
        <div class="py-1" role="none">
            <Link to = "/hello_pages/FAQS" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem">FAQS</Link>
        </div>

        
    </div>
    )}
   
   
}
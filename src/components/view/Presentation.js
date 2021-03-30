import React from 'react';
import { useHover } from '../events/useHover';
import foto from "../img/IMG_0877.JPG";

export const Presentation = () => {

    return (
        
<div class="text-center p-4">
    <div class="text-center mb-4 opacity-90">
        <img alt="profil" src={foto} class="mx-auto object-cover rounded-full h-40 w-40"/>
    </div>

    <div class="text-center">
        <p class="text-2xl text-gray-800 dark:text-white">
            García
        </p>
        <p class="text-xl text-gray-500 dark:text-gray-200 font-light ">
           Web Developer
        </p>
        <p className="text-gray-400 w-1/3 font-light inline-block">
            I was born in a small city, {useHover("Granollers",
                {
                    className : "w-full absolute xl:inset-40 sm:inset-23",
                    iframe : <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23866.32870489092!2d2.270298356170006!3d41.60621670426243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4c7cf4242446d%3A0x1c7b5f146fbca228!2sGranollers%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1617058092502!5m2!1ses!2ses" ></iframe>
                }

            )}. <br></br>
            
            It was 2 of January of 1990. I've always been very curious what makes me get into a lot of trouble. Always taking things apart to put them back together.  
        </p>
        <p className="text-gray-400 w-1/3 inline-block font-light">
            Welcome to this humble presentation. 
        </p>
        <p className="text-gray-400 w-1/3  inline-block font-light">
            I like science and new technologies. I graduated in chemistry from the UAB and I have a master's degree in nanoscience and nanotechnology.
        </p>
        
    </div>
    <div class="pt-8 flex border-t border-gray-200 w-44 mx-auto text-gray-500 items-center justify-between">
    </div>
</div>


    )
}

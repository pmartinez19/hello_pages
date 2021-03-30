import React, { useState } from 'react'

export default function CardUp(card) {
    const [isShown, setIsShown] = useState(false);
    
    return (
        <div >
        

            <img className={"z-0 absolute w-full h-full inset-0 object-cover object-center rounded-md"} src = {card.src} alt = {card.alt} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} />
            
        
            
        {isShown &&(
            
            
                <div className="z-50 absolute w-10/12 h-auto bg-white rounded overflow-hidden shadow-lg -y-30 right-11 left-10 top-auto inset-0"
                onMouseEnter={() => setIsShown(true)} >
                    
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2"
                        
                        >{card.textTitle}</div>

                        <p class="text-gray-700 text-base">
                            {card.text}
                            
                        </p>
                    </div>
                    <div class=" px-6 pt-1 pb-1">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{card.tag1}</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{card.tag2}</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{card.tag3}</span>
                    </div>
                </div>
            
            
            )}
            </div>
        
       
  );
}

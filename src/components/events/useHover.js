import React, { useState } from 'react'

export const useHover = (text,element) => {
    const [hover, setHover] = useState(false);
    return(
        <i className="text-blue-500" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            {text}
            {
                hover&&(
                    
                    <div className = {element.className}>
                        {element.iframe}
                    </div>
                    
                
            )}
        </i>

    )
    
}

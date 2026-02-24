import React from 'react'
import Tilt from 'react-parallax-tilt';


export const TechCards = ({index, iconName, link}) => {
    return (
        <Tilt perspective={300}>
            <div className='techCardDiv p-2 rounded-lg glass shadow-xl/20 inset-shadow-sm hover:scale-125 hover:border-primary/20 transition-all duration-500'>
                {/* <span className='text-none cursor-default'>{iconName} </span> */}
                {link && <img src={link} alt={iconName} className='h-10 opacity-60 hover:opacity-100 transition-all duration-500'/>}
                
            </div>
        </Tilt>
            
    )
}

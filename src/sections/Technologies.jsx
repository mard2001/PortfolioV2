import React from 'react'
import { technologies } from '../constants/Constants'
import { TechCards } from '../components/TechCards';




export default function Technologies() {
    return (
        < >
            <div className='mt-5 mb-10 mx-auto container flex flex-wrap justify-center gap-5'>
                {technologies.map((tech, idx) => (
                    <TechCards key={idx} index={idx} {...tech} />
                ))}
            </div>
        </>
    )
}

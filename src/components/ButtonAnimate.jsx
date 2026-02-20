import { ArrowRightIcon } from 'lucide-react';
import React from 'react'

const ButtonAnimate = ({ children, ...rest }) => {
    return (
        <button {...rest} className="group relative px-4 py-2 font-medium text-slate-100 transition-colors duration-[400ms] hover:text-indigo-300 hover:cursor-pointer"
        >
        <span className='flex items-center'><span>{children}</span><span className='group-hover:pl-5 transition-all duration-900'><ArrowRightIcon /></span></span>

        {/* TOP */}
        <span className="absolute left-0 top-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />

        {/* RIGHT */}
        <span className="absolute right-0 top-0 h-0 w-[2px] bg-primary transition-all delay-300 duration-300 group-hover:h-full" />

        {/* BOTTOM */}
        <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-primary transition-all delay-600 duration-300 group-hover:w-full" />

        {/* LEFT */}
        <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-primary transition-all delay-900 duration-300 group-hover:h-full" />
        </button>
    );
}

export default ButtonAnimate

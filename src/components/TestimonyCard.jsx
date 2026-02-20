import { ChevronDown, ChevronUp, VerifiedIcon } from 'lucide-react';
import React, { useRef, useState } from 'react'

export const TestimonyCard = ({testimony, idx}) => {
    const [position, setPosition] = useState({x:0, y:0});
    const [visible, setVisible] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const divRef = useRef(null);

    const handleMouseMove = (e) => {
        const bounds = divRef.current.getBoundingClientRect();
        setPosition({x: e.clientX - bounds.left, y: e.clientY - bounds.top})
    }

    const MAX_LENGTH = 320; // adjust limit
    const isLong = testimony.content.length > MAX_LENGTH;

    const displayedText = expanded
        ? testimony.content
        : testimony.content.slice(0, MAX_LENGTH) + (isLong ? "..." : "");


    return (
        <div className='relative overflow-hidden max-w-lg m-2 rounded-[30px] shadow-2xl 
                glass' onMouseEnter={()=>setVisible(true)} onMouseLeave={()=>setVisible(false)} ref={divRef} onMouseMove={handleMouseMove}>
            <div className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-primary/90 
                    via-primary to-primary/80 w-[50px] h-100 absolute z-0 transition-opacity duration-500 
                    mix-blend-lighten ${visible ? 'opacity-70' : 'opacity-0'}`} 
                    style={{top:position.y - 50, left: position.x - 50 }}
            />
            <div className='group flex gap-1 p-8 min-h-[95.5%] m-1 transition-all rounded-[25px] bg-background z-100 relative'>
                <div className='rounded-full bg-muted-primary'>
                    <div className="relative w-fit">
                        <img src="/images/defaultIcon.png" alt="" className="max-w-24 bg-muted-primary rounded-full mr-2 h-10 opacity-50 group-hover:opacity-90 duration-800" />

                        {/* Verified Badge */}
                        <span className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-[2px] border-2 border-background">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-3 h-3">
                                <path fillRule="evenodd" d="M20.285 6.708a1 1 0 010 1.414l-9.193 9.193a1 1 0 01-1.414 0L3.715 11.35a1 1 0 111.414-1.414l4.243 4.243 8.486-8.486a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </span>
                    </div> 
                </div>
                <div className='flex-1'>
                    <h1 className='font-bold text-white/80 group-hover:text-primary/70 duration-500 '>{testimony.name}</h1>
                    <p className='text-sm text-muted-foreground/50'>{testimony.relation}</p>
                    <p className='text-sm text-muted-foreground mt-4 italic relative'><span className='absolute -top-30 -right-5 text-[180px] textQuotes opacity-3'>"</span>{displayedText}</p>
                    {isLong && (
                        <button
                            onClick={() => setExpanded(!expanded)}
                            className='text-primary text-xs mt-2 hover:underline hover:cursor-pointer'
                        >
                            {expanded ? <span className="flex items-center">Read Less <ChevronUp className="ml-1 w-3 h-3" /></span> : <span className="flex items-center">Read More <ChevronDown className="ml-1 w-3 h-3" /></span>}
                        </button>
                    )} 
                </div>
                <hr className='my-10 text-muted' />
            </div>
        </div>
    )
}

import React, { useRef, useState } from 'react'

export const TraitsCard = ({quality, idx}) => {
    const [position, setPosition] = useState({x:0, y:0});
    const [visible, setVisible] = useState(false);

    const divRef = useRef(null);

    const handleMouseMove = (e) => {
        const bounds = divRef.current.getBoundingClientRect();
        setPosition({x: e.clientX - bounds.left, y: e.clientY - bounds.top})
    }

    return (
        <div className='relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-[30px] shadow-2xl 
                ' onMouseEnter={()=>setVisible(true)} onMouseLeave={()=>setVisible(false)} ref={divRef} onMouseMove={handleMouseMove}>
            <div className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-primary/90 
                    via-primary to-primary/80 w-[50px] h-100 absolute z-0 transition-opacity duration-500 
                    mix-blend-lighten ${visible ? 'opacity-70' : 'opacity-0'}`} 
                    style={{top:position.y - 50, left: position.x - 50 }}
            />
            <div className='group flex gap-1 rounded-[20px] min-h-[96%] m-1 transition-all rounded-[25px] bg-background z-100 relative'>
                <div key={idx} className=' p-6 rounded-2xl animate-fade-in' style={{animationDelay: `${(idx + 1) * 100}ms`}}>
                  <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20'>
                    <quality.icon className='w-6 h-6 text-primary' />
                  </div>
                  <h3 className='text-lg font-semibold mb-2 group-hover:text-primary/70 duration-500'>{quality.title}</h3>
                  <p className='text-sm text-muted-foreground'>{quality.description}</p>
                </div>
            </div>
        </div>
    )
}

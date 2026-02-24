import React, { useRef } from 'react'
import { technologies } from '../constants/Constants'
import { TechCards } from '../components/TechCards';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)

export default function Technologies() {
    const scrollRef = useRef();

    useGSAP(() => {
        const techCards = gsap.utils.toArray(scrollRef.current.children);

        techCards.forEach((card) => {
            gsap.fromTo('.techCardDiv',
            {
                y: 50,
                rotation: 120,
                opacity: 0
            }, 
            {
                y: -20,
                rotation: 0,
                opacity: 1,
                duration:  0.8,
                stagger: {
                    amount: 1.5,
                    from: 'center'
                },
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                    end: "top 60%",  
                    scrub: true,
                    
                },
                ease: 'power1.inOut'
            })
        })
    },[])

    return (
        < >
            <div ref={scrollRef}  className='mt-5 mb-10 mx-auto container flex flex-wrap justify-center gap-5'>
                {technologies.map((tech, idx) => (
                    <TechCards key={idx} index={idx} {...tech} />
                ))}
            </div>
        </>
    )
}

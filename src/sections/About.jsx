import React, { useRef } from 'react'
import { AboutSelfData, highlights } from '../constants/Constants'
import { TraitsCard } from '../components/TraitsCard'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const scrollRef = useRef();

  useGSAP(() => {
    const title = new SplitText('.sectionAboutTitle', { type: 'words' });
    const paragraph = new SplitText('.aboutSelfParagraphs', { type: 'words' });
    const highlightCards = gsap.utils.toArray(scrollRef.current.children);

    gsap.from(paragraph.words, {
      opacity: 0,
      yPercent: 100,
      ease: "expo.out",
      stagger: 0.06,
      scrollTrigger: {
        trigger: ".aboutSelfParagraphs",
        start: "top 85%",          
        toggleActions: "play none none none",
      },
    });
  
    gsap.from(title.words, {
      yPercent: 100,
      duration: 0.8,
      ease: 'expo.out',
      stagger: 0.04,
      delay: 0.8,
      opacity: 0,
      scrollTrigger: {
        trigger: ".sectionAboutTitle",
        start: "top 85%",          
        toggleActions: "play none none none",
      },
    });

    gsap.fromTo('.sectionMiniTitle',
      {
        x: -200,
        opacity:0,
      }, 
      {
        x: 0,
        opacity:1,
        duration: 1,
        delay: 1,
        scrollTrigger: {
        trigger: ".sectionAboutTitle",
        start: "top 85%",          
        toggleActions: "play none none none",
      },
      }
    );

    gsap.fromTo( highlightCards, 
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 3,       
        ease: "power3.out",   
        stagger: 0.5,        
        scrollTrigger: {
          trigger: ".cardsContainer",
          start: "top 50%",  
          end: "top 20%",
          scrub: true, 
        },
      }
    );

  },[])

  return (
    <section id="About" className='py-5 relative overflow-hidden'>
      <div className='absolute top-1/3 left-1/32 w-96 h-96 bg-primary/3 rounded-full blur-2xl -translate-y-1/2' />
      <div className='absolute bottom-1/64 right-1/32 w-96 h-96 bg-primary/5 rounded-full blur-2xl -translate-y-1/2' />
      <div className='container mx-auto px-6  relative z-10'>
        <div className='grid lg:grid-cols-2 gap-8 items-center'>
            {/* LEFT COLUMN */}
            <div className='space-y-8'>
              <div className='sectionMiniTitle opacity-0 mb-2'>
                <span className=' text-secondary text-sm font-medium tracking-wider uppercase'>About Me</span>
              </div>

              <h2 className='sectionAboutTitle text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground'>Developer Behind the Code</h2>
              <div className='space-y-4 text-muted-foreground animate-fade-in animation-delay-200 aboutSelfParagraphs'>
                 <AboutSelfData /> 
              </div>

              <div className='glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300'>
                  <p className='text-lg font-medium italic text-foreground/50'>
                    Open to new opportunities and collaborations. I’d be happy to connect.
                  </p>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div ref={scrollRef} className='cardsContainer grid sm:grid-cols-2'>
              {highlights.map((highlight, idx) => (
                <TraitsCard key={idx} quality={highlight} idx={idx} />
              ))}
            </div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { experiences } from '../constants/Constants'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, SplitText } from 'gsap/all'


gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  useGSAP(() => {
    const title = new SplitText('.sectionExpTitle', { type: 'words' });
    const paragraph = new SplitText('.exptSubTitle', { type: 'words' });
    const cards = gsap.utils.toArray('.experienceCard');

    gsap.from(paragraph.words, {
      opacity: 0,
      yPercent: 100,
      ease: "expo.out",
      stagger: 0.06,
      scrollTrigger: {
        trigger: ".exptSubTitle",
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
        trigger: ".sectionExpTitle",
        start: "top 85%",          
        toggleActions: "play none none none",
      },
    });

    gsap.fromTo('.sectionExpMiniTitle',
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
          trigger: ".sectionExpTitle",
          start: "top 85%",          
          toggleActions: "play none none none",
        },
      }
    );
    cards.forEach((card) =>{
      gsap.fromTo(card,
        {
          scale: 1
        },{
          scale: 1.05,
          duration: 0.5,
          yoyo: true,
          repeat: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: card,
            start: "top 85%",          
          },
        })
    })

  },[]);


  return (
    <section id='Experience' className='py-32 relative overflow-hidden'>
      {/* BACKGROUND */}
      <div className='absolute inset-0'>
        <img src="/images/HexagonalBG.avif" alt="" className='w-full h-full object-cover opacity-60' />
        <div className='absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background' />
      </div>

      <div className='absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2' />
      <div className='absolute top-1/5 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl -translate-y-1/2' />
      <div className='absolute bottom-1/64 right-1/32 w-96 h-96 bg-primary/5 rounded-full blur-2xl -translate-y-1/2' />

      <div className='container mx-auto px-6 relative z-10'>
        {/* SECTION HEADER */}
        <div className=' mb-16'>
          <div className='sectionExpMiniTitle'>
            <span className=' text-secondary text-sm font-medium tracking-wider uppercase'>Career Journey</span>
          </div>
          <div className="sectionExpTitle">
            <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>Hands-On Experience That Shows Growth.</h2>
          </div>
          <p className='exptSubTitle text-muted-foreground'>Learning, building, and improving with every opportunity and experience.</p>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          <div className='timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]' />

          {/* EXPERIENCES */}
          <div className='space-y-12'>
            {experiences.map((exp, idx) => (
              <div key={idx} className='relative grid md:grid-cols-2 gap-8 animate-fade-in' style={{animationDelay: `${(idx + 1) * 100}ms`}}>


                {/* TIMELINE DOT */}
                <div className='absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10'>
                  {exp.current && <span className='absolute inset-0 rounded-full bg-primary animate-ping opacity-75'/>}
                </div>

                {/* CONTENT */}
                <div className={`experienceCard group pl-8 md:pl-0 duration-700 hover:-translate-y-5 ${idx%2 == 0 ? "md:pr-8 md:text-right" : "md:col-start-2 md:pl-8"}`}>
                  <div className={` p-4 rounded-2xl border border-transparent hover:border-b-primary/20 hover-glass transition-all duration-500 border-b-5`}>
                    <span className='text-sm text-primary/50 group-hover:text-primary font-medium transition-all duration-800'>{exp.period}</span>
                    <h3 className='text-xl font-semi-bold mt-2'>{exp.role}</h3>
                    <p className='text-muted-foreground'>{exp.company}</p>
                    {
                      exp.description.map((text, textId) =>(
                        <p key={textId} className='text-xs text-muted-foreground mt-4 leading-5'>{text}</p>
                      ))
                    }
                    
                    <div className={`flex flex-wrap gap-2 mt-4 ${idx%2 == 0 ? "md:justify-end":""}`}>
                      {exp.technologies.map((tech,techIdx) => (
                        <span key={techIdx} className='px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground'>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

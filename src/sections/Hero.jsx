import React from 'react'
import Button from '../components/Button'
import { ArrowRight, Download } from 'lucide-react'
import { shortAboutSelf, socMedLinks } from '../constants/Constants'
import Typewriter from "typewriter-effect";
import ButtonAnimate from '../components/ButtonAnimate';
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import MdiReact from '@mdi/react'


export default function Hero() {
  useGSAP(() => {
    const heroSplit = new SplitText('.aboutTitle', { type: 'words' });
    const paragraph = new SplitText('.heroAboutSelf', { type: 'lines' });

    heroSplit.chars.forEach((char) => {
      char.classList.add("text-gradient");
    });

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 0.8,
      ease: 'expo.out',
      stagger: 0.04,
      delay: 0.8,
      opacity: 0,
    })
  },[])


  
  return (
    <section className='relative min-h-screen flex items-center overflow-hidden'>
      
      {/* BACKGROUND */}
      <div className='absolute inset-0'>
        <img src="/images/BlueHorizon.avif" alt="" className='w-full h-full object-cover opacity-40' />
        <div className='absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background' />
      </div>

      {/* MOVING ANIMATED DOTS */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {[...Array(50)].map((_,i) => (
          <div id={i} key={i} className='absolute w-1.5 h-1.5 rounded-full opacity-60'
            style={{
              background: "#3b82f6",
              left: `${Math.random()* 100}%`,
              top: `${Math.random()* 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random()* 5}s`
            }}/>
        ))}
      </div>
      
      {/* CONTENT */}
      <div className='container mx-auto px-6 pt-32 pb-20 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* LEFT COLUMN */}
          <div className='space-y-8'>
            <div className=''>
              <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary animate-fade-in animation-delay-900'>
                <span className='w-2 h-2 bg-primary rounded-full animate-pulse heroBadge' />
                Developer is Open to Work
              </span>
            </div>

            {/* HEADLINE */}
            <div className='space-y-3'>
              {/* <h1 className='font-black text-4xl heroHeaderMain scale-y-125'>Hi, You can call me Marv,</h1> */}
              <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground text-gradient heroHeader2Main '>Hi, You can call me Marv,</h2>
              <h1 className="font-bold typeWriter text-4xl lg:text-3xl text-primary">
                <Typewriter
                  options={{
                    strings: [
                      "a Front-End Web Developer.",
                      "a Back-End Web Developer.",
                      "a Full-Stack Web Developer.",
                      "a Software Engineer.",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 50,
                  }}
                />
              </h1>
              <p className='text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-400 heroAboutSelf'>
                {shortAboutSelf}
              </p>
            </div>

            {/* CALL TO ACTION */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-500">
              <a onClick={() => window.open('https://www.linkedin.com/in/marvin-navarro-01/', "_blank", "noopener,noreferrer")}>
                <Button size='sm'>Download Resume</Button>
              </a>
              <a href="#Projects">
                <ButtonAnimate>View Projects</ButtonAnimate>
              </a>
              {/* <Button size='sm'><Download className="w-5 h-5" /> Download Resume</Button> */}
            </div>

            {/* SOCAIL MEDIA LINKS */}
            <div className='flex items-center text-muted/50'>
              <span className='pr-3'></span>
              {socMedLinks.map((social, idx) => {
                const Icon = MdiReact.default
                return (
                  <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" className=" mx-1 rounded-[10px] p-2 glass hover:bg-primary/10 hover:text-primary transition-all duration-10 ">
                    <Icon path={social.icon} size={0.8} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className='relative animate-fade-in animation-delay-300'>
            {/* PROFILE IMAGE */}
            <div className='relative max-w-md mx-auto'>
              <div className='absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse-glow'/>
              <div className='relative glass rounded-3xl p-2 glow-border'>
                <img src="/images/ProfilePhoto2.jpg" alt="" className='w-full aspect-[4/5] object-cover rounded-2xl rotate-3 hover:rotate-0 duration-300 ' />
                
                {/* FLOATING BADGE */}
                <div className='absolute -bottom-10 -right-20 rounded-xl px-4 py-3 animate-float'>
                  <div>
                    <div />
                    <img src="/images/Floating.png" alt="" className='w-40 shadow-xl/30' />
                  </div>
                </div>

                {/* STATUS BADGE */}
                <div className='absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-600 bg-[var(--color-surface)]/80'>
                  <div className='text-2xl font-bold text-primary'>2+</div>
                  <div className='text-xs text-muted-foreground'>Years Exp.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

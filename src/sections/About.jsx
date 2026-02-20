import React from 'react'
import { AboutSelfData, highlights } from '../constants/Constants'
import { TraitsCard } from '../components/TraitsCard'

export default function About() {
  return (
    <section id="About" className='py-5 relative overflow-hidden'>
      <div className='absolute top-1/3 left-1/32 w-96 h-96 bg-primary/3 rounded-full blur-2xl -translate-y-1/2' />
      <div className='absolute bottom-1/64 right-1/32 w-96 h-96 bg-primary/5 rounded-full blur-2xl -translate-y-1/2' />
      <div className='container mx-auto px-6  relative z-10'>
        <div className='grid lg:grid-cols-2 gap-8 items-center'>
            {/* LEFT COLUMN */}
            <div className='space-y-8'>
              <div className='animate-fade-in'>
                <span className='text-secondary text-sm font-medium tracking-wider uppercase'>About Me</span>
              </div>

              <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground'>Developer Behind the Code</h2>
              <div className='space-y-4 text-muted-foreground animate-fade-in animation-delay-200'>
                 <AboutSelfData /> 
              </div>

              <div className='glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300'>
                  <p className='text-lg font-medium italic text-foreground/50'>
                    Open to new opportunities and collaborations. I’d be happy to connect.
                  </p>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className='grid sm:grid-cols-2'>
              {highlights.map((highlight, idx) => (
                <TraitsCard key={idx} quality={highlight} idx={idx} />
              ))}
            </div>
        </div>
      </div>
    </section>
  )
}

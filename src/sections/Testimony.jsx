import React from 'react'
import { testimonies } from '../constants/Constants'
import { TestimonyCard } from '../components/TestimonyCard'
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  1280: 3,
  1024: 2,
  768: 2,
  640: 1
};


export default function Testimony() {
  return (
    <div id='Testimony' className='relative pt-20'>
      {/* BACKGROUND */}
      <div className='absolute inset-0'>
        <img src="/images/HexagonalBG.avif" alt="" className='w-full h-full object-cover opacity-40' />
        <div className='absolute inset-0 bg-gradient-to-b from-background via-background/88 to-background' />
      </div>
    
      <section  className='container mx-auto px-6 relative z-10'>
        <div className=' mb-5'>
          <span className='text-secondary text-sm font-medium tracking-wider uppercase animate-fade-in'>Voices of Trust & Partnership</span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>What Others Say.</h2>
          <p className='text-muted-foreground'>Collaborations that turned goals into results.</p>
        </div>
        {/* <div className='container mx-auto flex flex-col sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
          {testimonies.map((testimony, idx) => (
            <TestimonyCard key={idx} testimony={testimony} idx={idx} />
          ))}
        </div> */}
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex gap-1"
            columnClassName="flex flex-col gap-1 masonryCol"
          >
            {testimonies.map((testimony, idx) => (
              <TestimonyCard key={idx} testimony={testimony} idx={idx} />
            ))}
        </Masonry>
      </section>
    </div>
  )
}

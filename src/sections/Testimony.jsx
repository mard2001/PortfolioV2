import React from 'react'
import { testimonies } from '../constants/Constants'
import { TestimonyCard } from '../components/TestimonyCard'
import Masonry from "react-masonry-css";
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import { useGSAP } from '@gsap/react';

const breakpointColumnsObj = {
  default: 3,
  1280: 3,
  1024: 2,
  768: 2,
  640: 1
};

gsap.registerPlugin(ScrollTrigger)

export default function Testimony() {
  useGSAP(() => {
    const title = new SplitText('.sectionTestimonyTitle', { type: 'words' });
    const paragraph = new SplitText('.testimonyParagraphs', { type: 'words' });

    gsap.from(paragraph.words, {
      opacity: 0,
      yPercent: 100,
      ease: "expo.out",
      stagger: 0.06,
      scrollTrigger: {
        trigger: ".testimonyParagraphs",
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
        trigger: ".testimonyParagraphs",
        start: "top 85%",          
        toggleActions: "play none none none",
      },
    });

    gsap.fromTo('.testimonyMiniTitle',
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
        trigger: ".testimonyParagraphs",
        start: "top 85%",          
        toggleActions: "play none none none",
      },
      }
    );

    gsap.utils.toArray('.testimonialCards').forEach((card) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top 65%",
        onEnter: () => {
          gsap.fromTo(card,
            { scale: 1 },
            {
              scale: 1.05,
              duration: 0.5,
              yoyo: true,
              repeat: 1,
              ease: "expo.out",
            }
          );
        }
      });
    });

  },[]);

  return (
    <div id='Testimony' className='relative pt-20'>
      {/* BACKGROUND */}
      <div className='absolute inset-0'>
        <img src="/images/HexagonalBG.avif" alt="" className='w-full h-full object-cover opacity-40' />
        <div className='absolute inset-0 bg-gradient-to-b from-background via-background/88 to-background' />
      </div>
    
      <section  className='container mx-auto px-6 relative z-10'>
        <div className=' mb-5'>
          <div className="testimonyMiniTitle">
            <span className=' text-secondary text-sm font-medium tracking-wider uppercase'>Voices of Trust & Partnership</span>
          </div>
          <h2 className='sectionTestimonyTitle text-4xl md:text-5xl font-bold mt-4 mb-6 animation-delay-100 text-secondary-foreground'>What Others Say.</h2>
          <p className='testimonyParagraphs text-muted-foreground'>Collaborations that turned goals into results.</p>
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

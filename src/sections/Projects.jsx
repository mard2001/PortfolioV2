import React, { useState } from 'react'
import { projects } from '../constants/Constants'
import { ProjCard } from '../components/projCard'
import { ProjectModal } from '../components/ProjectModal'
import { Building, Cable, Calendar, CalendarDaysIcon, ChartLineIcon, Code, CodeSquare, ExternalLink, Info, LayoutGridIcon, SquareArrowOutUpRight, Trash, User } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [open, setOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const scrollRef = useRef();

  const handleOpen = (project) => {
    console.log("Opening modal:", project)
    setSelectedProject(project)
    setOpen(true)
  }

  useGSAP(() => {
    const title = new SplitText('.projTitle', { type:'words' });
    const paragraph = new SplitText('.projSubHeader', { type: 'words' });
    const projectCards = new gsap.utils.toArray(scrollRef.current.children);

    gsap.from(paragraph.words, {
      opacity: 0,
      yPercent: 100,
      ease: "expo.out",
      stagger: 0.06,
      scrollTrigger: {
        trigger: ".projTitle",
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
        trigger: ".projTitle",
        start: "top 85%",          
        toggleActions: "play none none none",
      },
    });

    gsap.fromTo('.projMiniTitle',
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
        trigger: ".projTitle",
        start: "top 85%",          
        toggleActions: "play none none none",
      },
      }
    );

    projectCards.forEach((element) => {
      gsap.fromTo( element, 
        {
          y: -50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
          trigger: element,
            start: "top 80%",  
            end: "top 20%",
          },
        }
      )
    });


  },[]);

  return (
    <>
      <div id='Projects' className='pt-20'>
        <section className='container mx-auto px-3 relative overflow-hidden'>
          <div className='absolute top-1/4 right-1/64 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2' />
          <div className='absolute top-1/4 left-1/64 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2' />
          <div className='absolute bottom-32 right-1/64 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2' />

          <div className='mb-15 flex flex-col items-center text-center'>
            <div pan className='projMiniTitle'>
              <span className='text-secondary text-sm font-medium tracking-wider uppercase animate-fade-in'>"Code & Craft"</span>
            </div>
            <h2 className='projTitle text-4xl md:text-5xl font-bold mt-3 mb-2 animate-fade-in animation-delay-100 text-secondary-foreground'>Featured Deployments</h2>
            <p className='projSubHeader text-muted-foreground'>Transforming complex business requirements into elegant digital products.</p>
          </div>
          <div ref={scrollRef} className='projectsContainer grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {projects.map((project, indx) => (
              <ProjCard key={indx} project={project} onOpen={handleOpen}/>
            ))}
          </div>

          
        </section>
      </div>

      <ProjectModal
        open={open}
        onClose={() => setOpen(false)}
        content={selectedProject}
      />
    </>
  )
}

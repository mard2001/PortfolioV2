import React, { useState } from 'react'
import { projects } from '../constants/Constants'
import { ProjCard } from '../components/projCard'
import { ProjectModal } from '../components/ProjectModal'
import { Building, Cable, Calendar, CalendarDaysIcon, ChartLineIcon, Code, CodeSquare, ExternalLink, Info, LayoutGridIcon, SquareArrowOutUpRight, Trash, User } from 'lucide-react'


export default function Projects() {
  const [open, setOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const handleOpen = (project) => {
    console.log("Opening modal:", project)
    setSelectedProject(project)
    setOpen(true)
  }

  return (
    <>
      <div id='Projects' className='pt-20'>
        <section className='container mx-auto px-3 relative overflow-hidden'>
          <div className='absolute top-1/4 right-1/64 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2' />
          <div className='absolute top-1/4 left-1/64 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2' />
          <div className='absolute bottom-32 right-1/64 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2' />

          <div className='mb-15 flex flex-col items-center text-center'>
            <span className='text-secondary text-sm font-medium tracking-wider uppercase animate-fade-in'>"Code & Craft"</span>
            <h2 className='text-4xl md:text-5xl font-bold mt-3 mb-2 animate-fade-in animation-delay-100 text-secondary-foreground'>Featured Deployments</h2>
            <p className='text-muted-foreground'>Transforming complex business requirements into elegant digital products.</p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
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

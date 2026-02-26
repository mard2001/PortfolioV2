import { Building, Cable, Calendar, CalendarDaysIcon, ChartLineIcon, Code, CodeSquare, ExternalLink, Info, LayoutGridIcon, SquareArrowOutUpRight, Trash, User } from 'lucide-react'
import React, { useState } from 'react'
import { ProjectModal } from './ProjectModal'
import Button from './Button';

export const ProjCard = ({project, onOpen}) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className='projectCard group glass rounded-xl shadow-xl shadow-xl/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1'>
                <div className='relative text-6xl font-bold text-gray-600 flex items-center justify-center mb-4 overflow-hidden rounded-t-xl'>
                    <img src={`/images/projectScreenshots/${project.images[0]}`} alt="" className='w-full h-50 md:w-100 rounded-t-xl hover:scale-125 transition-all duration-1000 group-hover:blur-sm' />
                    <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300">
                        <button
                        onClick={() => onOpen(project)}
                        className="hidden md:inline text-sm px-4 py-2 bg-gray/60 text-black rounded opacity-0 group-hover:bg-gray-200 hover:bg-gray-300 hover:cursor-pointer group-hover:opacity-100"
                        >
                        View More
                        </button>
                    </div>
                </div>
                <div className='p-3 flex flex-col flex-group gap-5'>
                    <div className='flex justify-between'>
                        <h3 className='text-md font-semibold'>{project.title}</h3>   
                        <div className='flex gap-1 items-center'>
                            {   
                                project.github && (
                                    <a className='text-center mx-auto flex text-sm justify-center'
                                        onClick={() => window.open(project.github, "_blank", "noopener,noreferrer")}>
                                        <Code className='h-4 hover:h-6 hover:text-primary cursor-pointer transition-all duration-300'/> 
                                    </a>
                                )
                            }
                            {
                                project.demo && (
                                    <a className='text-center mx-auto flex text-sm justify-center'
                                        onClick={() => window.open(project.demo, "_blank", "noopener,noreferrer")}>
                                        <ExternalLink className='h-4 hover:h-6 hover:text-primary cursor-pointer transition-all duration-300'/> 
                                    </a>
                                )
                            }
                        </div>
                    </div>
                    <p className='text-sm text-muted '>{project.description}</p>
                    <div className='flex flex-wrap gap-2w'>
                        {project.tech.map((tech, idx) => (
                            <div key={idx} className='text-[0.6rem] glass px-2 py-1 rounded-xl text-secondary/60 hover:text-secondary transition-all duration-400 cursor-default'>{tech}</div>
                        ))}
                    </div>
                    
                    <div className='md:hidden w-full'>
                        <hr className='text-muted/10 mb-5' />
                        <button className='w-full px-4 py-2 text-sm relative overflow-hidden rounded-lg font-medium cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 inline-flex items-center gap-2' onClick={() => onOpen(project)}>View Project</button>
                    </div>
                </div>
            </div>
        
            {/* <ProjectModal open={open} onClose={() => setOpen(false)} content={}>
                
            </ProjectModal> */}
        </>
    )
}

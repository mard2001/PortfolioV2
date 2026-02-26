import { FileCodeCornerIcon, X } from 'lucide-react'
import React, { useState, useEffect  } from 'react'
import { Building, Cable, Calendar, CalendarDaysIcon, ChartLineIcon, Code, CodeSquare, ExternalLink, Info, LayoutGridIcon, SquareArrowOutUpRight, Trash, User } from 'lucide-react'


export const ProjectModal = ({open, onClose, content}) => {
    if (!open || !content) return null;
    const [selectedImage, setSelectedImage] = useState(null);
    const [loadingImages, setLoadingImages] = useState(
        content.images.map(() => true)  
    );

    useEffect(() => {
        setLoadingImages(content.images.map(() => true));
    }, [content.images]);
        
    const handleImageLoad = (idx) => {
        setLoadingImages((prev) => {
        const newLoading = [...prev];
        newLoading[idx] = false;
        return newLoading;
        });
    };
    
    return (
        // backdrop
        <div onClick={onClose} className={`fixed inset-0 z-50 flex justify-center items-center transition-colors duration-1500  ${open? 'visible bg-black/90':'invisible'}`}>
            <div
                onClick={(e) => e.stopPropagation()}
                className={`w-full mx-10 sm:w-200 md:w-300 h-[90vh] bg-[#1E293B] rounded-xl shadow p-6 transition-all duration-1500 ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
            >   
                <X className='absolute top-2 right-2 p-1 bg-[#1E294C] rounded-lg hover:cursor-pointer hover:text-gray-600' onClick={onClose}/>
                
                <div className='overflow-y-auto w-full gap-4 relative h-[85vh]'>
                    <div className='pt-5  pb-8'>
                        <div className='flex items-center  mb-5'>
                            <FileCodeCornerIcon size={20} className='text-primary mr-2'/>
                            <span className='font-bold'>Project Title: </span>
                            <h1 className='ml-2 font-bold'>{content.title}</h1>
                        </div>
                        <hr className='text-xs text-[#2A364B]' />
                    </div>
                    <div className='flex flex-col-reverse md:flex-row gap-4'>
                        <div className="grow bg-red md:h-full md:overflow-y-auto md:overflow-x-hidden pr-4">
                            <div className="projectDescDiv">
                                <div className='projectHeader mb-2'>
                                    <Info size={20} className='text-primary mr-2' />
                                    <span className='font-bold'>About the Project</span>
                                </div>
                                <div className='projectContent mb-2'>
                                    {content.fullDescription.map((desc, idx) => (
                                        <p key={idx} className='text-muted-foreground text-sm pl-5 mb-3 text-justify'>
                                            {desc}
                                        </p>
                                    ))}
                                </div>
                                <div className='flex ml-2 mt-5 mb-10'>
                                    {content.tech.map((tech, idx) => (
                                        // <span key={"tech"+idx}>
                                        //     {tech}{idx < content.tech.length - 1 ? ", " : ""}
                                        // </span>
                                        <span key={"tech1-"+idx} className='mx-3 px-1 py-1 text-xs'>{tech}</span>
                                    ))}
                                </div>
                            </div>
                            {content.techChallenges.length > 0 && (
                                <div className="projectChallenges mt-5">
                                    <div className='projectHeader'>
                                        <Cable size={20} className='text-primary mr-2' />
                                        <span className='font-bold'>Technical Challenges</span>
                                    </div>
                                    <div className="pl-5 px-3 pt-2">
                                        {content.techChallenges.map((challenge, idx) => (
                                            <div key={idx} className='rounded-xl border-1 border-[#2A364B] px-2 py-4 my-3 flex items-center'>
                                                <div>
                                                    <span className='rounded-full bg-primary/30 px-3 py-1 mr-3'>
                                                        <span className='text-primary text-xs'>{idx+1}</span>
                                                    </span>
                                                </div>
                                                <span className='text-xs text-muted-foreground'>
                                                    {challenge}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {content.impact.length > 0 && (
                                <div className="projectImpact mt-5">
                                    <div className='projectHeader'>
                                        <ChartLineIcon size={20} className='text-primary mr-2' />
                                        <span className='font-bold'>Impact & Results</span>
                                    </div>
                                    <div className="px-3 pt-4 pb-3 mb-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
                                        {content.impact.map((impact, idx) => (
                                            <div key={'impactList'+idx} className="flex-1 mx-2 flex-col border-1 border-[#2A364B] p-3 rounded-lg">
                                                <div className='text-center text-lg text-primary'>{impact.value}</div>
                                                <div className='text-center text-xs text-muted-foreground'>{impact.title}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {content.images.length > 0 && (
                                <div className="projectImpact mt-5">
                                    <div className='projectHeader'>
                                        <LayoutGridIcon size={20} className='text-primary mr-2' />
                                        <span className='font-bold'>Gallery</span>
                                    </div>
                                    <div className='px-3 pt-4 pb-3 mb-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-1'>
                                        {content.images.map((img, idx) => (
                                            <div key={'projectPhotoGal'+idx} className="relative w-30 h-20">
                                                {loadingImages[idx] && (
                                                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200/50 rounded-xl">
                                                        <div className="loader border-2 border-t-2 border-gray-400 rounded-full w-5 h-5 animate-spin">
                                                        </div>
                                                    </div>
                                                )}
                                                <img
                                                    src={`/images/projectScreenshots/${img}`}
                                                    alt=""
                                                    className={`w-30 h-20 rounded-xl mx-1 hover:cursor-pointer hover:scale-[115%] z-10 hover:z-40 transition-all duration-100 ${
                                                        loadingImages[idx] ? 'opacity-0' : 'opacity-100'
                                                    }`}
                                                    onClick={() => setSelectedImage(`/images/projectScreenshots/${img}`)}
                                                    onLoad={() => handleImageLoad(idx)}
                                                    onError={() => handleImageLoad(idx)}
                                                />
                                                
                                            </div>
                                        ))} 
                                    </div>
                                </div>
                            )}
                            
                        </div>
                        <div className="flex-none md:w-65 lg:w-80 pr-5">
                            <div className='rounded-2xl border-1 border-[#2A364B] p-5'>
                                <span className='uppercase text-sm'>Project Metadata</span>

                                <div className='flex items-center my-5'>
                                    <Calendar size={25} className='text-muted-foreground mr-4' />
                                    <div className='flex flex-col'>
                                        <span className="text-xs text-muted-foreground">Duration</span>
                                        <span className='text-sm'>{content.duration}</span>
                                    </div>
                                </div>
                                <div className='flex items-center my-5'>
                                    <User size={25} className='text-muted-foreground mr-4' />
                                    <div className='flex flex-col'>
                                        <span className="text-xs text-muted-foreground">Role</span>
                                        <span className='text-sm'>{content.role}</span>
                                    </div>
                                </div>

                                <div className='flex items-center my-5'>
                                    <Building size={25} className='text-muted-foreground mr-4' />
                                    <div className='flex flex-col'>
                                        <span className="text-xs text-muted-foreground">Client</span>
                                        <span className='text-sm'>{content.client}</span>
                                    </div>
                                </div>

                                <div className='flex items-center my-5'>
                                    <CodeSquare size={25} className='text-muted-foreground mr-4' />
                                    <div className='flex flex-col'>
                                        <span className="text-xs text-muted-foreground">Stack</span>
                                            <span className='text-sm'>
                                            {content.tech.map((tech, idx) => (
                                                <span key={"tech"+idx}>
                                                    {tech}{idx < content.tech.length - 1 ? ", " : ""}
                                                </span>
                                            ))}
                                        </span>
                                        
                                    </div>
                                </div>

                                <hr className='text-muted-foreground my-5' />
                                {
                                    content.link && (
                                        <button className='text-center bg-primary px-3 py-2 rounded-lg w-full mb-4 hover:bg-primary/70 hover:cursor-pointer'>
                                            <a className='text-center mx-auto flex text-sm justify-center'
                                                onClick={() => window.open(content.link, "_blank", "noopener,noreferrer")}>
                                                <SquareArrowOutUpRight size={15} className='mr-2'/> Live Dashboard
                                            </a>
                                        </button>
                                    )
                                }
                                {   
                                    content.github && (
                                        <button className='text-center bg-[#334155] px-3 py-2 rounded-lg w-full hover:bg-gray-900 hover:cursor-pointer'>
                                            <a className='text-center mx-auto flex text-sm justify-center'
                                                onClick={() => window.open(content.github, "_blank", "noopener,noreferrer")}>
                                                <Code size={15} className='mr-2'/> Source Code
                                            </a>
                                        </button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={(e) => { e.stopPropagation(); setSelectedImage(null);}}> 
                    <div className="relative" onClick={(e) => e.stopPropagation()}>
                        <X className="absolute -top-2 -right-2 p-2 bg-[#1E294C]/70 rounded-lg cursor-pointer hover:bg-[#1E294C]"
                        onClick={(e) => {
                            setSelectedImage(null);
                        }}
                        />
                        <img src={selectedImage} alt="" className="max-w-[80vw] max-h-[80vh] rounded-2xl shadow-2xl"
                            onClick={(e) => e.stopPropagation()}  
                        />
                    </div>
                </div>
            )}
        </div>
    )
}
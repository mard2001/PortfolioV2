import React from 'react'
import { contactInfo } from '../constants/Constants'
import { Copy, Mail, Check, PhoneForwarded } from 'lucide-react';
import { useState } from "react";
import MdiReact from '@mdi/react'

const Footer = () => {
    const [copied, setCopied] = useState(false);
    const email = "marvinnavarro15@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div className='relative text-center mt-60' id='Contact'>
            <h1 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>Let’s build something together</h1>
            <p className='text-sm text-muted-foreground mb-10'>Have a project in mind? I'm currently available for freelance work or full time work and open to new opportunities.</p>
            
            <div className=''>
                <div className='mb-5'>
                    <div className="inline-flex items-center gap-3 rounded-xl bg-slate-900/70 px-4 py-3 text-sm text-slate-100 shadow-lg backdrop-blur-md border border-white/5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400">
                            <Mail size={16} />
                        </div>
                        <span className="select-all font-medium"> marvinnavarro15@gmail.com </span>
                        <button
                            onClick={handleCopy}
                            className="ml-2 text-slate-400 transition hover:text-slate-200"
                        >
                            {copied ? <Check size={16} /> : <Copy size={16} className='hover:cursor-pointer' />}
                            <span
                                className={`pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md bg-black px-2 py-1 text-xs text-white transition-all duration-200
                                ${copied ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`}
                                >
                                Copied!
                            </span>
                        </button>
                    </div>
                </div>
                <div>
                    <div className="inline-flex items-center gap-3 rounded-xl bg-slate-900/70 px-4 py-3 text-sm text-slate-100 shadow-lg backdrop-blur-md border border-white/5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400">
                            <PhoneForwarded size={16} />
                        </div>
                        <span className="select-all font-medium"> +63 906 322 0193 </span>
                    </div>
                </div>
            </div>
                
            <div className='flex flex-row justify-center'>
                {contactInfo.map((contact, indx) => {
                    const Icon = MdiReact.default
                    return(
                        <div 
                            onClick={() => window.open(contact.link, "_blank", "noopener,noreferrer")}
                            className='mt-8 mx-2 flex flex-row rounded-xl bg-slate-900/70 px-4 py-3 text-sm text-muted-foreground shadow-lg backdrop-blur-md border border-white/5 hover:cursor-pointer hover:text-foreground/80' key={indx} >
                            {/* <contact.icon className='w-5 h-5 mr-1' /> */}
                                <Icon path={contact.icon} size={0.8} className='w-5 h-5 mr-1' />
                            {contact.title}
                        </div>
                    );
                })}
            </div>

            <hr className='text-muted-foreground/10 mt-20 mb-10'/>


            <p className='text-sm text-muted-foreground/25 mb-15 mx-10'>&#169; 2026 Marvin Navarro Dev • All Rights Reserve • Crafted with precision and passion</p>
            

        </div>
    )
}

export default Footer
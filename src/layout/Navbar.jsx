import React, { useEffect, useState } from 'react'
import {navLinks} from '@/constants/Constants'
import Button from '../components/Button'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        }
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])
    return (
        <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? 'glass-strong py-3': 'bg-transparent py-5'}  z-50`}>
            <nav className='container mx-auto px-6 flex items-center justify-between'>
                <a href="#" className='text-xl font-bold tracking-tight hover:text-primary'>MN DEV<span className='text-primary'>.</span></a>

                {/* DESKTOP NAV */}
                <div className='hidden md:flex items-center gap-1'>
                    <div className='glass rounded-full px-2 py-1 items-center gap-1'>
                        { navLinks.map((links, idx) => (
                            <a id={idx} key={idx} href={links.href} className='px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface'>
                                {links.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* CALL TO ACTION BTN */}
                <a href="#Contact">
                    <button className="hidden md:inline px-6 py-2 font-medium text-sm bg-primary text-primary-foreground w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] rounded-xl hover:cursor-pointer">
                        Contact Me
                    </button>
                </a>
                {/* MOBILE NAV BUTTON */}
                <button className='md:hidden p-2 text-foreground cursor-pointer' onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* MOBILE NAV */}
            {isMobileMenuOpen && 
                (<div className='md:hidden glass-strong animate-fade-in'>
                    <div className='container mx-auto px-6 py-6 flex flex-col gap-4'>
                        { navLinks.map((links, idx) => (
                            <a id={idx} key={idx} href={links.href} className='text-lg text-muted-foreground hover:text-foreground py-2'
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {links.label}
                            </a>
                        ))}
                        <a href="#Contact" onClick={() => setIsMobileMenuOpen(false)}>
                            <Button size='sm'>Contact Me</Button>
                        </a>
                    </div>
                </div>)
            }
        </header>
    )
}

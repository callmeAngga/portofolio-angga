'use client'

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image  from "next/image";
import logoImg from '../../../public/images/one_piece.png'
import sunImg from '../../../public/images/sun.png'
import moonImg from '../../../public/images/moon.png'

interface NavLink {
    path: string;
    display: string;
}

const NAV_LINK: NavLink[] = [
    { path: '/', display: 'HOME' },
    { path: '#about', display: 'ABOUT' },
    { path: '#skill', display: 'SKILL' },
    { path: '#project', display: 'PROJECT' },
    { path: '#blog', display: 'BLOG' },
    { path: '#contact', display: 'CONTACT' },
];

export default function Navbar() {
    const navbarRef = useRef<HTMLElement | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const handleScroll = () => {
        (window.scrollY > 100) ? setIsScrolled(true) : setIsScrolled(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setTheme('dark');
            document.documentElement.classList.add('dark');
        } else {
            setTheme('light');
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            localStorage.theme = 'dark';
            document.documentElement.classList.add('dark');
        } else {
            setTheme('light');
            localStorage.theme = 'light';
            document.documentElement.classList.remove('dark');
        }
    }

    return (
        <>
            <nav ref={navbarRef} className={`h-20 left-0 top-0 flex sticky bg-card dark:bg-cardDark px-10 z-50 items-center transition-all duration-300 ${isScrolled ? 'w-2/5 transform rounded-full top-7' : 'w-full ' }`}>
                {/* Logo */}
                <div className={`h-full flex items-center ${isScrolled ? 'hidden transition-all duration-300' : 'block'}`}>
                    <Image src={logoImg} alt="Logo One Piece" width={32} height={32} className="object-contain" />
                    <p className="ml-2">
                        <span className="font-bold text-acc">Angga</span><span className="italic font-medium">pras.</span>
                    </p>
                </div>

                {/* Navbar Link */}
                <div className={`h-full flex mx-auto space-x-5 items-center ${isScrolled ? 'justify-center space-x-7' : ''}`}>
                    {NAV_LINK.map((item, index) => (
                        <Link href={item.path} key={index}>
                            <span className="text-text dark:text-textDark text-sm tracking-widest font-semibold hover:text-accent cursor-pointer">{item.display}</span>
                        </Link>
                    ))}
                </div>

                {/* Theme Switcher */}
                <div className={`h-full flex items-center ${isScrolled ? 'hidden transition-all duration-300' : 'block'}`}>
                    <button onClick={toggleTheme} className="flex items-center justify-center w-10 h-10 hover:bg-card dark:hover:bg-cardDark rounded-full focus:outline-none">
                        <Image 
                            src={theme === 'light' ? sunImg : moonImg} 
                            alt="Toggle Theme" 
                            width={24} 
                            height={24} 
                        />
                    </button>
                </div>
            </nav>
        </>
    );
}
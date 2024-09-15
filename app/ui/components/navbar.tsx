'use client'

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logoImg from '../../../public/images/one_piece.png'
import sunImg from '../../../public/images/sun.png'

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

    const handleScroll = () => {
        (window.scrollY > 70) ? setIsScrolled(true) : setIsScrolled(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'top-7' : ''}`}>
            <div className="container mx-auto flex justify-center">
                <nav ref={navbarRef} className={`h-20 flex items-center px-10 transition-all duration-300 ${isScrolled ? 'bg-background w-150 justify-center transform rounded-full' : 'w-full'}`}>
                    {/* Logo */}
                    <div className={`flex items-center ${isScrolled ? 'hidden transition-all duration-300' : 'block'} transition-all duration-300`}>
                        <Image src={logoImg} alt="Logo One Piece" width={65} height={65} className="object-contain" />
                        <p className="ml-2">
                            <span className="font-bold text-acc">Angga</span><span className="italic font-medium">pras.</span>
                        </p>
                    </div>

                    {/* Navbar Link */}
                    <div className={`flex space-x-5 mx-auto items-center ${isScrolled ? 'justify-center space-x-7' : ''}`}>
                        {NAV_LINK.map((item, index) => (
                            <Link href={item.path} key={index}>
                                <span className="text-text dark:text-textDark text-sm tracking-widest font-semibold hover:text-accent cursor-pointer">{item.display}</span>
                            </Link>
                        ))}
                    </div>

                    {/* Theme Switcher */}
                    <div className={`flex items-center ${isScrolled ? 'hidden transition-all duration-300' : 'block'}`}>
                        <button className="flex items-center justify-center w-10 h-10 hover:bg-card dark:hover:bg-cardDark rounded-full focus:outline-none">
                            <Image
                                src={sunImg}
                                alt="Toggle Theme"
                                width={24}
                                height={24}
                            />
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    );
}
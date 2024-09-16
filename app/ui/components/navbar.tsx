'use client'

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logoImg from '../../../public/images/one_piece.png'
import ThemeSwitch from "./theme-switcher";
// import { dancingScript } from "@/app/fonts";
import { shantelSans } from "@/app/fonts";

interface NavLink {
    path: string;
    display: string;
    isSpecial?: boolean;
}

const NAV_LINK: NavLink[] = [
    { path: '#about', display: 'About' },
    { path: '#skill', display: 'Skill' },
    { path: '#project', display: 'Project' },
    { path: '#home', display: 'Angga', isSpecial: true },
    { path: '#blog', display: 'Blog' },
    { path: '#blog', display: 'Testi' },
    { path: '#contact', display: 'Contact' },
];

export default function Navbar() {
    const navbarRef = useRef<HTMLElement | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        (window.scrollY > 70) ? setIsScrolled(true) : setIsScrolled(false);
    }

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 left-0 w-full z-50  transition-all bg-secBackground dark:bg-cardDark duration-300 ${isScrolled ? 'top-7 bg-transparent dark:bg-transparent' : ''}`}>
            <div className="container mx-auto flex justify-center ">
                <nav ref={navbarRef} className={`h-20 flex items-center px-10  transition-all duration-300 ${isScrolled ? 'bg-secBackground dark:bg-cardDark w-150 shadow-xl justify-center transform rounded-full' : 'w-full'}`}>
                    {/* Logo */}
                    <div className={`flex items-center ${isScrolled ? 'hidden transition-all duration-300' : 'block'} transition-all duration-300`}>
                        <Image src={logoImg} alt="Logo One Piece" width={65} height={65} className="object-contain" />
                        {/* <p className="ml-2">
                            <span className="font-bold text-acc">Angga</span><span className="italic font-medium">pras.</span>
                        </p> */}
                    </div>

                    {/* Navbar Link */}
                    <div className={`flex space-x-7 mx-auto items-center ${isScrolled ? 'justify-center space-x-7' : ''}`}>
                        {NAV_LINK.map((item, index) => (
                            <Link href={item.path} key={index} onClick={(e) => handleSmoothScroll(e, item.path)}>
                                <span className={`text-normalText dark:text-normalTextDark text-sm tracking-widest font-semibold hover:text-accent dark:hover:text-accent cursor-pointer ${item.isSpecial ? `${shantelSans.className} font-black text-xl` : ''}`}>{item.display}</span>
                            </Link>
                        ))}
                    </div>

                    {/* Theme Switcher */}
                    <div className={`flex items-center ${isScrolled ? 'hidden transition-all duration-300' : 'block'}`}>
                        <button className="flex items-center justify-center w-10 h-10 hover:bg-card dark:hover:bg-cardDark rounded-full focus:outline-none">
                            {/* <Image
                                src={sunImg}
                                alt="Toggle Theme"
                                width={24}
                                height={24}
                            /> */}
                            <ThemeSwitch/>
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    );
}
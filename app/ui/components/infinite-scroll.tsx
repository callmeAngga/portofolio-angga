"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import cpp from '@/public/images/c.svg';
import compose from '@/public/images/compose.svg';
import css from '@/public/images/css.svg';
import git from '@/public/images/git.svg';
import golang from '@/public/images/golang.svg';
import html from '@/public/images/html.svg';
import java from '@/public/images/java.svg';
import javascript from '@/public/images/javascript.svg';
import kotlin from '@/public/images/kotlin.svg';
import nextjs from '@/public/images/nextjs.svg';
import python from '@/public/images/python.svg';
import react from '@/public/images/react.svg';
import tailwind from '@/public/images/tailwind.svg';
import typescript from '@/public/images/typescript.svg';

const programmingLanguages = [
    cpp, css, golang, html, java, javascript, kotlin, python, typescript
];

const developmentTools = [
    compose, git, nextjs, react, tailwind
];

export default function InfiniteSkill() {
    // const scrollRef = useRef<HTMLDivElement>(null)

    const leftScrollRef = useRef<HTMLDivElement>(null);
    const rightScrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const setupInfiniteScroll = (scroller: HTMLDivElement | null, items: Array<any>) => {
            if (!scroller) return;

            const innerScroller = scroller.querySelector(".scroll_inner") as HTMLDivElement;
            if (!innerScroller || innerScroller.getAttribute("data-setup") === "true") return;

            const itemWidth = innerScroller.children[0].clientWidth;

            const totalItems = items.length;
            const requiredClones = Math.ceil(scroller.clientWidth / itemWidth) * 2;

            for (let i = 0; i < requiredClones; i++) {
                const clone = innerScroller.children[i % totalItems].cloneNode(true) as HTMLElement;
                innerScroller.appendChild(clone);
            }

            innerScroller.setAttribute("data-setup", "true");

            const scrollDistance = innerScroller.scrollWidth - scroller.clientWidth;
            const animationDuration = scrollDistance / itemWidth * 2; 

            innerScroller.style.animationDuration = `${animationDuration}s`;
        };

        setupInfiniteScroll(leftScrollRef.current, programmingLanguages);
        setupInfiniteScroll(rightScrollRef.current, developmentTools);


    }, []);

    return (
        <div className="w-full overflow-hidden space-y-10">
            <div ref={leftScrollRef} className="scroller overflow-hidden">
                <div className="scroll_inner flex space-x-24 animate-scroll-left">
                    {programmingLanguages.map((logo, index) => (
                        <div key={index} className="flex-shrink-0">
                            <Image
                                src={logo}
                                alt={`Programming language ${index + 1}`}
                                height={70}
                                className="opacity-70 grayscale"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div ref={rightScrollRef} className="scroller overflow-hidden">
                <div className="scroll_inner flex space-x-24 animate-scroll-right">
                    {developmentTools.map((logo, index) => (
                        <div key={index} className="flex-shrink-0">
                            <Image
                                src={logo}
                                alt={`Development tool ${index + 1}`}
                                height={70}
                                className="opacity-70 grayscale"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// import InfiniteScrollSkills from "../components/infinite-scroll"
// import Image from "next/image"
import React from 'react';
import InfiniteSkill from '../components/infinite-scroll';

export default function Skill() {
    return (
        <section id="skill" className="object-contain w-full bg-thirdBackground dark:bg-backgroundDark py-10 ">
            <div className="container mx-auto">
                <InfiniteSkill/>
            </div>
        </section>
    )
}
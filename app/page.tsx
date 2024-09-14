import Hero from "./ui/section/hero";
// import { jakartaSans } from '@/app/fonts'
import About from "./ui/section/about";
import Skill from "./ui/section/skill";
import Project from "./ui/section/project";
import Blog from "./ui/section/blog";
import Contact from "./ui/section/contact";
import Navbar from "./ui/components/navbar";

export default function Home() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className={`w-full h-full max-w-10xl`}>
                <div className="w-full h-full flex flex-col items-center justify-center bg-background  dark:bg-backgroundDark text-text dark:text-textDark">
                    <Navbar/>
                    <Hero />
                    <About />
                    <Skill />
                    <Project />
                    <Blog />
                    <Contact />
                </div>
            </div>
        </div>
    );
}


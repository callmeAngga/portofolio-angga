import { robotoSlab } from "@/app/fonts";
import Image from "next/image";
import angga from '../../../public/images/Ghibli.png'

export default function Hero() {
    return (
        <section id="home" className="object-contain pb-28 w-full bg-background dark:to-backgroundDark">
            <div className="container mx-auto px-4">
                <div className=" w-full flex flex-col justify-center items-center">
                    <h1 className={`${robotoSlab.className} text-4xl xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-transparent stroke-text tracking-wider leading-[1.5] text-center z-10 relative -bottom-60`}>
                        HI, THERE<br />
                        I&apos;M SOFTWARE DEVELOPER
                    </h1>

                    <Image
                        src={angga}
                        alt="Foto karakter ghibli"
                        className="z-20 w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px]"
                    />
                </div>
            </div>
        </section>
    );
}
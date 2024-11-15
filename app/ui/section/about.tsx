// import Image from "next/image"
import ReactCountryFlag from "react-country-flag"
import CardAccent from "../components/cardAccent"

export default function About() {
    return (
        <section id="about" className="object-contain w-full bg-secBackground dark:bg-backgroundDark py-28">
            <div className="container mx-auto">
                <div className="w-full flex flex-col items-center justify-center space-y-20">
                    <div className="flex items-center space-x-5 w-full px-10">
                        <hr className="bg-thirdBackground dark:bg-white w-full h-[2px] border-0 rounded-md mx-auto" />
                        <div className="flex flex-col items-center justify-center w-full space-y-2">
                            <h3 className="text-5xl tracking-widest font-bold">
                                Angga Prasetyo
                            </h3>
                            <div className="grid grid-cols-3 divide-x py-1 divide-thirdBackground text-center w-full">
                                <div className="flex justify-center items-center">
                                    <ReactCountryFlag countryCode="ID" svg />
                                </div>
                                <p>21</p>
                                <p>Javanese</p>
                            </div>
                        </div>
                        <hr className="bg-thirdBackground dark:bg-background w-full h-[2px] border-0 rounded-md mx-auto" />
                    </div>
                    <div className="text-center w-2/5">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                    <div className="w-full flex justify-evenly ">
                        <CardAccent/>
                        <CardAccent/>
                        <CardAccent/>                     
                    </div>
                </div>
            </div>
        </section>
    )
}
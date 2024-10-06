// "use server"
import React from "react"
import Marquee from "@/components/ui/Marquee"
import Image from "next/image"
// import BlurIn from "../magicui/blur-in"
import { companies } from "@/data"
import ImageHover from "@/components/ui/ImageHover"
// import {
//     Dialog,
//     DialogClose,
//     DialogContent,
//     DialogDescription,
//     DialogFooter,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
// } from "../ui/Dialog"
// import IconCloud from "../magicui/icon-cloud"
// const slugs = [
//     "typescript",
//     "javascript",
//     "burpsuite",
//     "react",
//     "android",
//     "html5",
//     "css3",
//     "nodedotjs",
//     "nextdotjs",
//     "amazonaws",
//     "postgresql",
//     "firebase",
//     "vercel",
//     "python",
//     "docker",
//     "git",
//     "github",
//     "visualstudiocode",
//     "googlecloud",
//     "framer",
//     "threedotjs",
//     "linux",
//     "tailwindcss",
//     "greensock",
//     "kalilinux",
// ]

const About = () => {
    return (
        <>
            <section id="about" className="mt-20 flex flex-col items-center justify-center px-4">
                <div className="mt-5 flex max-w-sm md:min-w-full flex-col items-center justify-center text-center">
                    <h2 className="text-lg font-black text-dark md:text-2xl">
                        Companies I&apos;ve Helped Secure via Bug Bounty
                        Programs
                    </h2>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-dark/50 md:text-base">
                        Identified and Reported Vulnerabilities for Over 60
                        Companies, Including Google, TripAdvisor, and Dell
                        Technologies.
                    </p>
                </div>
                <div className="relative mb-14 flex h-24 max-w-xs flex-col items-center justify-center overflow-hidden md:h-32 lg:max-w-full">
                    <Marquee
                        pauseOnHover
                        className="gap-4 [--duration:20s] md:gap-5">
                        {companies.map((image, index) => (
                            <Image
                                key={index}
                                src={image.img}
                                width={100}
                                height={100}
                                alt={image.name}
                                className="size-16 bg-clip-content object-contain brightness-0 contrast-200 saturate-0 md:size-24"
                            />
                        ))}
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-light md:w-1/3"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-light md:w-1/3"></div>
                </div>
            </section>
            <div className="z-10 flex flex-col items-center justify-center">
                <div className="mb-2 h-[300px] w-[300px]">
                    <ImageHover />
                </div>
                <div className="mx-auto mb-10 mt-4 flex w-full max-w-2xl flex-col items-center justify-center px-4 text-center text-sm sm:max-w-6xl">
                    <h2 className="w-full select-text text-[16px] font-medium leading-normal text-dark/50 md:text-[20px]">
                        I am a Cybersecurity Enthusiast and Ethical Hacker
                        skilled in web, mobile, and API security, with expertise
                        in tools like BurpSuite, Nmap, and Kali Linux. I've
                        discovered critical vulnerabilities, securing over 60
                        companies, including Google and Dell. With 2 years of
                        frontend development experience and 3 years as a
                        certified yoga teacher, I combine technical skills with
                        a focus on wellness.
                    </h2>
                </div>
                {/* <div
                    id="skills"
                    className="z-10 hidden cursor-pointer md:block lg:block">
                    <Dialog>
                        <DialogTrigger asChild>
                            <button className="cursor-pointer rounded-full border border-gray-100/30 px-6 py-2 text-xl font-medium">
                                My Skillset
                            </button>
                        </DialogTrigger>
                        <DialogContent className="bg-primary-500 mx-auto rounded-[8px] border-none outline-none sm:max-w-md lg:max-w-3xl">
                            <div className="mx-auto flex items-center space-x-2">
                                <div className="mx-auto grid gap-2">
                                    <IconCloud iconSlugs={slugs} />
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div> */}
            </div>
        </>
    )
}

export default About

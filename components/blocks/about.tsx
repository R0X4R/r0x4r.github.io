// "use server"
import React from "react"
import Marquee from "@/components/magicui/marquee"
import Image from "next/image"
import BlurIn from "../magicui/blur-in"
import { companies } from "@/data"
import ImageHover from "../ui/ImageHover"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/Dialog"
import IconCloud from "../magicui/icon-cloud"
const slugs = [
    "typescript",
    "javascript",
    "burpsuite",
    "react",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "nextdotjs",
    "amazonaws",
    "postgresql",
    "firebase",
    "vercel",
    "python",
    "docker",
    "git",
    "github",
    "visualstudiocode",
    "googlecloud",
    "framer",
    "threedotjs",
    "linux",
    "tailwindcss",
    "greensock",
    "kalilinux",
]

const About = () => {
    return (
        <>
            <div className="mt-20 flex flex-col items-center justify-center px-4">
                <div className="mt-5 flex w-full flex-col items-center justify-center text-center">
                    <h2 className="text-[18px] font-black md:text-[20px]">
                        Companies I&apos;ve Helped Secure via Bug Bounty
                        Programs
                    </h2>
                    <p className="text-[12px] font-medium leading-relaxed text-gray-100/80 md:text-[14px]">
                        Identified and Reported Vulnerabilities for Over 60
                        Companies, Including Google, TripAdvisor, and Dell
                        Technologies.
                    </p>
                </div>
                <div className="relative mb-5 flex h-[100px] w-full flex-col items-center justify-center overflow-hidden md:h-[150px] lg:max-w-[65em]">
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
                                className="h-[80px] w-[80px] bg-clip-content object-contain brightness-200 contrast-200 saturate-0 md:h-[100px] md:w-[100px]"
                            />
                        ))}
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-primary md:w-1/3"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-primary md:w-1/3"></div>
                </div>
            </div>
            <div className="z-10 flex flex-col items-center justify-center">
                <div className="mb-2 h-[300px] w-[300px]">
                    <ImageHover />
                </div>
                <div className="mx-auto mb-10 mt-4 flex w-full max-w-2xl flex-col items-center justify-center px-4 text-center text-sm text-white sm:max-w-6xl">
                    <BlurIn
                        className="w-full select-text text-[16px] font-medium leading-normal text-gray-100/80 md:text-[20px]"
                        word="I am a Cyber Security Enthusiast and Ethical Hacker with a knack for web, mobile, and API security, as well as vulnerability assessment and penetration testing. Proficient with tools like BurpSuite, Acunetix, Nmap, and Kali Linux, and adept with various GitHub open-source tools, I've also developed scripts to aid the infosec community in identifying low-hanging bugs. My expertise has led to the discovery of critical vulnerabilities such as account takeovers and XSS, securing over 60 companies, including industry giants like Google, TripAdvisor, and Dell Technologies. Alongside my cybersecurity work, I have 2 years of experience in website and frontend development, having crafted over 12 websites. Additionally, I am a certified yoga teacher with over 3 years of teaching experience, blending technical proficiency with holistic wellness."
                    />
                </div>
                <div id="skills" className="hidden lg:block md:block z-10 cursor-pointer">
                    <Dialog>
                        <DialogTrigger asChild>
                            <button className="cursor-pointer rounded-full border border-gray-100/30 px-6 py-2 text-xl font-medium">
                                My Skillset
                            </button>
                        </DialogTrigger>
                        <DialogContent className="rounded-[8px] mx-auto border-none bg-primary outline-none lg:max-w-3xl sm:max-w-md">
                            <div className="flex mx-auto items-center space-x-2">
                                <div className="grid mx-auto gap-2">
                                    <IconCloud iconSlugs={slugs} />
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </>
    )
}

export default About

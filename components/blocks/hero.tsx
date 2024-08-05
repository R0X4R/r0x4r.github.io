// "use server"
import React from "react"
import { Spotlight } from "../ui/Spotlight"
import { TextGenerateEffect } from "../ui/TextGenerateEffect"
import { Button } from "../ui/MovingBorder"
import Spline from "@splinetool/react-spline/next"
import { PiLinkedinLogoDuotone } from "react-icons/pi"
import Link from "next/link"

const Hero = () => {
    return (
        <div className="relative h-screen overflow-hidden bg-scroll pb-20 pt-36">
            <Spotlight
                className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
                fill="white"
            />
            <Spotlight
                className="left-80 top-28 h-[80vh] w-[50vw] opacity-50"
                fill="white"
            />
            <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-scroll bg-dot-black/[0.015] dark:bg-primary dark:bg-dot-white/[0.1]">
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white bg-scroll [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)] dark:bg-primary" />
                <Spline
                    scene="https://prod.spline.design/q4PgqiJYTfAFH-ZX/scene.splinecode"
                    className="z-50 h-full w-full object-cover"
                />
            </div>
            <div className="pointer-events-none relative z-50 my-20 flex justify-center bg-clip-text px-4 sm:px-6 lg:px-8">
                <div className="flex max-w-[92vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[65vw]">
                    <Button
                        borderRadius="1.75rem"
                        className="max-w-96 select-text border border-white/[0.015] bg-primary px-5 py-2 text-center text-[12px] uppercase tracking-widest text-blue-100 lg:text-xs">
                        <h1>👋🏼 Hello World! Eshan this side</h1>
                    </Button>
                    <TextGenerateEffect
                        words="Cybersecurity & Web Dev Specialist: Securing & Innovating"
                        className="select-text text-center text-[25px] font-black md:text-[45px] lg:max-w-screen-xl lg:text-[60px]"
                    />
                    <p className="pointer-events-auto mb-4 mt-2 w-[24em] select-text text-center text-sm font-medium leading-snug text-gray-100 md:text-[16px] lg:w-[32em] lg:text-[20px]">
                        Hi! I&apos;m Eshan, a Cybersecurity Enthusiast and Web
                        Developer from Bharat. I excel in securing digital
                        assets and creating innovative web solutions.
                    </p>
                    <Link href="https://www.linkedin.com/in/r0x4r/" className="pointer-events-auto flex max-w-80 select-text items-center justify-center gap-2 rounded-[5px] border border-gray-100/20 bg-transparent p-4 text-center text-sm font-medium uppercase tracking-widest text-blue-100 transition-all hover:scale-105 hover:border-none hover:bg-red-600">
                        <PiLinkedinLogoDuotone /> Visit my LinkedIn
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero

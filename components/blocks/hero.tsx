import Spline from "@splinetool/react-spline/next"
import Link from "next/link"
import React from "react"
import { PiLinkedinLogoDuotone } from "react-icons/pi"
import { BorderBeam } from "../ui/BorderBeam"

const Hero = () => {
    return (
        <section id="hero" className="relative flex h-screen min-w-full flex-col items-center justify-center overflow-hidden rounded-3xl bg-scroll">
            <div className="absolute left-0 top-0 flex h-screen min-w-full items-center justify-center bg-dark bg-scroll [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.2),rgba(13,13,18,0.1))]">
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-transparent bg-scroll bg-grid-light/[0.02] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent)]" />
                <Spline
                    scene="https://prod.spline.design/q4PgqiJYTfAFH-ZX/scene.splinecode"
                    className="z-50 h-full w-full object-cover"
                />
            </div>
            <div className="pointer-events-none relative z-50 my-20 flex flex-col items-center justify-center bg-clip-text px-4 sm:px-6 lg:px-8">
                <div className="flex max-w-[92vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-5xl">
                    <span className="rounded-full relative max-w-96 select-text border border-white/[0.015] bg-dark/40 px-5 py-2 text-center text-[10px] md:text-xs uppercase tracking-widest text-light backdrop-blur">
                        <h2>👋🏼 Hello World! Eshan this side</h2>
                        <BorderBeam
                            size={50}
                            colorFrom="#F8FAFB"
                            colorTo="#5B49E9"
                        />
                    </span>
                    <h1 className="select-text bg-clip-text pb-2 text-center text-2xl font-black leading-tight text-light md:text-5xl lg:max-w-screen-xl lg:text-6xl">
                        Cybersecurity & Web Dev Specialist: Securing &
                        Innovating
                    </h1>
                    <p className="pointer-events-auto mb-4 mt-2 w-80 select-text text-center text-sm font-medium leading-snug text-light/70 md:text-base lg:w-9/12 lg:text-xl">
                        Hi! I&apos;m Eshan, a Cybersecurity Enthusiast and Web
                        Developer from Bharat. I excel in securing digital
                        assets and creating innovative web solutions.
                    </p>
                    <Link
                        href="https://www.linkedin.com/in/r0x4r/"
                        className="pointer-events-auto flex max-w-80 select-text items-center justify-center gap-1 rounded-2xl bg-opacity-10 p-4 text-center text-sm font-semibold uppercase tracking-wide text-light bg-light backdrop-blur-lg transition-all duration-700 ease-in-out hover:scale-105 hover:border-none">
                        <PiLinkedinLogoDuotone className="size-5" />
                        Visit my LinkedIn
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Hero

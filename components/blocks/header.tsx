"use client"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import AnimatedButton from "@/components/ui/AnimatedButton"
import Marquee from "../ui/Marquee"
import Link from "next/link"
// import Lenis from "@studio-freight/lenis"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/Dialog"
import ContactForm from "@/components/ui/Contact"

const Header = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    // useEffect(() => {
    //     const lenis = new Lenis({
    //         duration: 1.2,
    //         easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    //         smooth: true,
    //     })

    //     function raf(time) {
    //         lenis.raf(time)
    //         requestAnimationFrame(raf)
    //     }

    //     requestAnimationFrame(raf)

    //     return () => lenis.destroy()
    // }, [])

    const handleButtonClick = () => {
        setIsDialogOpen(true) // Open the dialog when button is clicked
    }


    return (
        <header className="fixed top-0 z-[200] w-full bg-transparent">
            <nav className="mx-auto mt-4 flex h-16 w-full max-w-lg items-center justify-between overflow-hidden rounded-full bg-light px-5 shadow-lg shadow-dark/5 md:max-w-3xl">
                <div
                    id="logo"
                    className="group flex cursor-pointer items-center gap-2">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={300}
                        height={300}
                        className="size-12 grayscale rounded-full group-hover:grayscale-0"
                    />
                    <h2 className="text-xl font-black tracking-tighter text-dark">
                        R0X4R
                    </h2>
                </div>
                <div id="links">
                    <ul className="hidden gap-4 text-base font-semibold capitalize md:flex">
                        <li>
                            <Link href="#home">Home</Link>
                        </li>
                        <li>
                            <Link href="#about">About</Link>
                        </li>
                        <li>
                            <Link href="#projects">Projects</Link>
                        </li>
                        <li>
                            <Link href="#timeline">Timeline</Link>
                        </li>
                        <li>
                            <Link href="#community">Video &amp; Blogs</Link>
                        </li>
                    </ul>
                </div>
                <div id="call-to-action" onClick={handleButtonClick} className="cursor-pointer p-0">
                    <AnimatedButton
                        initialText={
                            <Marquee className="gap-0 text-dark">
                                <span>Learn More</span>
                                <span>About Me</span>
                                <span>Send me a message</span>
                                <span>Get Started</span>
                                <span>Get Started</span>
                            </Marquee>
                        }
                        changeText="Started!"
                        className="relative h-14 w-40 overflow-hidden rounded-full border py-1 text-sm font-bold uppercase text-dark"
                        changeTextClassName="absolute h-14 w-full rounded-full px-4 py-1 text-sm font-bold uppercase text-light bg-dark"
                        animationType="down-to-up"
                    />
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogContent className="mx-auto h-[600px] w-full max-w-md rounded-3xl border-none bg-light outline-none backdrop-blur-sm lg:max-w-3xl">
                            <div className="flex items-center space-x-2">
                                <div className="mx-auto w-full gap-2">
                                    <div className="w-full space-y-8">
                                        <div>
                                            <h2 className="ml-2 mt-6 text-left text-4xl font-black tracking-tighter text-dark">
                                                Contact
                                            </h2>
                                        </div>
                                        <ContactForm />
                                    </div>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </nav>
        </header>
    )
}

export default Header

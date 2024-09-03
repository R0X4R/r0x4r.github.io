import Link from "next/link"
import React from "react"
import { RiTwitterXLine, RiInstagramFill } from "react-icons/ri"
import { RxGithubLogo } from "react-icons/rx"
import { FaYoutube } from "react-icons/fa"
import { SiLinkedin } from "react-icons/si"
import { NeonGradientCard } from "../magicui/gradient"
import { FaMedium } from "react-icons/fa6"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "./Dialog"
import ContactForm from "./contactform"

export default function Content() {
    return (
        <div className="bg-primary-500 flex h-full w-full flex-col justify-between px-6 py-8 md:px-12 lg:px-24">
            <div className="flex flex-col items-center justify-center">
                <NeonGradientCard className="mb-10 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-transparent text-center transition-all duration-1000 ease-in-out hover:rotate-[360deg]">
                    <div className="text-primary-100 pointer-events-none z-10 flex h-full w-full items-center justify-center bg-clip-text text-7xl font-bold leading-none tracking-tighter">
                        <Image
                            src="/images/logo.png"
                            className="h-14 w-14 cursor-pointer bg-transparent"
                            alt="logo"
                            width={80}
                            height={80}
                        />
                    </div>
                </NeonGradientCard>
                <div className="mb-6 flex items-center justify-center text-gray-100">
                    <ul className="flex flex-wrap items-center justify-center gap-4 text-base tracking-wide md:gap-6 md:text-lg lg:gap-8 lg:text-xl">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <button className="text-base tracking-wide md:gap-6 md:text-lg lg:gap-8 lg:text-xl">
                                        Contact
                                    </button>
                                </DialogTrigger>
                                <DialogContent className="bg-primary-500 mx-auto h-[600px] w-full max-w-md rounded-[8px] border-none outline-none lg:max-w-3xl">
                                    <div className="flex items-center space-x-2">
                                        <div className="mx-auto w-full gap-2">
                                            <div className="w-full space-y-8">
                                                <div>
                                                    <h2 className="text-primary-100 ml-2 mt-6 text-left text-4xl font-bold">
                                                        Contact
                                                    </h2>
                                                </div>
                                                <ContactForm />
                                            </div>
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </li>
                        <li>
                            <Link href="mailto:r0x4r@yahoo.com">Email</Link>
                        </li>
                        <li className="outline-none">
                            <button className="text-base tracking-wide md:gap-6 md:text-lg lg:gap-8 lg:text-xl">
                                <Link href="/resume.pdf" target="_blank">
                                    Download My Resume
                                </Link>
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="mb-6 flex items-center justify-center">
                    <ul className="flex flex-wrap items-center justify-center gap-4 text-xl md:gap-6 md:text-2xl lg:gap-8 lg:text-3xl">
                        <li className="hover:text-primary-100 text-gray-100 transition-all duration-500 ease-in-out hover:rotate-180 hover:scale-95">
                            <Link href="https://x.com/R0X4R">
                                <RiTwitterXLine />
                            </Link>
                        </li>
                        <li className="hover:text-primary-100 text-gray-100 transition-all duration-500 ease-in-out hover:rotate-180 hover:scale-95">
                            <Link href="https://instagram.com/indianeshansingh">
                                <RiInstagramFill />
                            </Link>
                        </li>
                        <li className="hover:text-primary-100 text-gray-100 transition-all duration-500 ease-in-out hover:rotate-180 hover:scale-95">
                            <Link href="https://www.linkedin.com/in/r0x4r/">
                                <SiLinkedin />
                            </Link>
                        </li>
                        <li className="hover:text-primary-100 text-gray-100 transition-all duration-500 ease-in-out hover:rotate-180 hover:scale-95">
                            <Link href="https://medium.com/@R0X4R">
                                <FaMedium />
                            </Link>
                        </li>
                        <li className="hover:text-primary-100 text-gray-100 transition-all duration-500 ease-in-out hover:rotate-180 hover:scale-95">
                            <Link href="https://www.github.com/R0X4R">
                                <RxGithubLogo />
                            </Link>
                        </li>
                        <li className="hover:text-primary-100 text-gray-100 transition-all duration-500 ease-in-out hover:rotate-180 hover:scale-95">
                            <Link href="https://www.youtube.com/EshanSingh">
                                <FaYoutube />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="mb-4 flex items-center text-gray-100">
                    <h2 className="text-xs font-medium leading-snug md:text-sm lg:text-base">
                        © 2024 | Credits For 3D Robot:{" "}
                        <Link
                            className="tracking-wide underline decoration-indigo-500"
                            href="https://app.spline.design/@aximoris">
                            @aximoris
                        </Link>{" "}
                        &{" "}
                        <Link
                            className="tracking-wide underline decoration-pink-500"
                            href="https://spline.design/">
                            spline
                        </Link>
                    </h2>
                </div>
            </div>
        </div>
    )
}

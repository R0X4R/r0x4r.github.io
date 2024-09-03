import React from "react"
import { RiTwitterXLine, RiInstagramFill } from "react-icons/ri"
import { RxGithubLogo } from "react-icons/rx"
import { FaMedium, FaYoutube } from "react-icons/fa6"
import { SiLinkedin } from "react-icons/si"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet"
import Link from "next/link"
import { Dialog, DialogContent, DialogTrigger } from "../ui/Dialog"
import ContactForm from "../ui/contactform"

const Header = () => {
    return (
        <header className="fixed top-0 z-[99] w-full bg-transparent">
            <div className="mx-auto flex w-full items-center justify-between px-6 py-3 md:px-10 lg:px-40">
                <div className="flex-grow" />
                <div className="flex items-center justify-center">
                    <Sheet>
                        <SheetTrigger asChild>
                            <div className="bg-primary-500 group relative mt-5 size-20 cursor-pointer items-center justify-center rounded-full">
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <div className="h-[1.2px] w-8 -translate-y-[0.375rem] rounded-full bg-zinc-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0 group-hover:rotate-45"></div>
                                </div>
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <div className="h-[1.2px] w-8 translate-y-[0.375rem] rounded-full bg-zinc-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0 group-hover:-rotate-45"></div>
                                </div>
                            </div>
                            {/* <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-primary-500 transition-all duration-700 ease-in-out hover:rotate-[360deg] md:h-16 md:w-16 lg:h-20 lg:w-20">
                                <HiBars2 className="text-3xl text-primary-100 md:text-4xl lg:text-5xl" />
                            </div> */}
                        </SheetTrigger>
                        <SheetContent className="bg-primary-500 z-[99] border-none bg-opacity-80 outline-none backdrop-blur-sm">
                            <div className="mt-20 flex flex-col items-center gap-4 py-4 md:mt-40">
                                <ul className="flex flex-col items-start justify-center gap-6 text-2xl font-bold tracking-wide md:text-4xl lg:text-5xl">
                                    <li className="w-full border-b border-gray-100/10 pb-2">
                                        <Link href="/">Home</Link>
                                    </li>
                                    {/* <li className="w-full border-b border-gray-100/10 pb-2">
                                        <Link href="/projects">Projects</Link>
                                    </li> */}
                                    <li className="w-full border-b border-gray-100/10 pb-2">
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <button className="text-2xl font-bold tracking-wide md:text-4xl lg:text-5xl">
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
                                    <li className="w-full border-b border-gray-100/10 pb-2">
                                        <Link href="mailto:r0x4r@yahoo.com">
                                            Email
                                        </Link>
                                    </li>
                                    <li className="outline-none">
                                        <button className="text-primary-100 rounded-[5px] bg-red-600 p-2 text-base font-medium uppercase tracking-normal md:p-4 md:text-xl">
                                            <Link
                                                href="/resume.pdf"
                                                target="_blank">
                                                Download My Resume
                                            </Link>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-2 flex items-center justify-center border-t border-gray-100/10 pt-6">
                                <ul className="flex flex-wrap items-center justify-center gap-4 text-xl md:gap-6 md:text-2xl lg:gap-5 lg:text-2xl">
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
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}

export default Header

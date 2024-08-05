import React from "react"
import { HiBars2 } from "react-icons/hi2"
import { RiTwitterXLine, RiInstagramFill } from "react-icons/ri"
import { RxGithubLogo } from "react-icons/rx"
import { FaMedium, FaYoutube } from "react-icons/fa6"
import { SiLinkedin } from "react-icons/si"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet"
import Link from "next/link"
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

const Header = () => {
    return (
        <header className="fixed top-0 z-[99] w-full bg-transparent">
            <div className="mx-auto flex w-full items-center justify-between px-6 py-3 md:px-10 lg:px-40">
                <div className="flex-grow" />
                <div className="flex items-center justify-center">
                    <Sheet>
                        <SheetTrigger asChild>
                            <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-primary transition-all duration-700 ease-in-out hover:rotate-[360deg] md:h-16 md:w-16 lg:h-20 lg:w-20">
                                <HiBars2 className="text-3xl text-white md:text-4xl lg:text-5xl" />
                            </div>
                        </SheetTrigger>
                        <SheetContent className="z-[99] border-none bg-primary bg-opacity-80 outline-none backdrop-blur-sm">
                            <div className="mt-20 flex flex-col items-center gap-4 py-4 md:mt-40">
                                <ul className="flex flex-col items-start justify-center gap-6 text-2xl font-bold tracking-wide md:text-4xl lg:text-5xl">
                                    <li className="w-full border-b border-gray-100/10 pb-2">
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li className="w-full border-b border-gray-100/10 pb-2">
                                        <Link href="/projects">Projects</Link>
                                    </li>
                                    <li className="w-full border-b border-gray-100/10 pb-2">
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <button className="text-2xl font-bold tracking-wide md:text-4xl lg:text-5xl">
                                                    Contact
                                                </button>
                                            </DialogTrigger>
                                            <DialogContent className="mx-auto h-[600px] w-full rounded-[8px] border-none bg-primary outline-none max-w-md lg:max-w-3xl">
                                                <div className="flex items-center space-x-2">
                                                    <div className="mx-auto w-full gap-2">
                                                        <div className="w-full space-y-8">
                                                            <div>
                                                                <h2 className="ml-2 mt-6 text-left text-4xl font-bold text-white">
                                                                    Contact
                                                                </h2>
                                                            </div>
                                                            <form className="mt-8 w-full space-y-6 px-4 sm:px-6 lg:px-2">
                                                                <div className="mx-auto">
                                                                    <div className="mb-4">
                                                                        <label
                                                                            htmlFor="full-name"
                                                                            className="sr-only">
                                                                            Full
                                                                            Name
                                                                        </label>
                                                                        <input
                                                                            id="full-name"
                                                                            name="full-name"
                                                                            type="text"
                                                                            autoComplete="name"
                                                                            required
                                                                            className="relative block w-full rounded-[5px] px-3 py-3 text-sm text-white placeholder-gray-500 outline-none focus:z-10 lg:text-lg"
                                                                            placeholder="Full Name"
                                                                        />
                                                                    </div>
                                                                    <div className="mb-4">
                                                                        <label
                                                                            htmlFor="email"
                                                                            className="sr-only">
                                                                            Email
                                                                            address
                                                                        </label>
                                                                        <input
                                                                            id="email"
                                                                            name="email"
                                                                            type="email"
                                                                            autoComplete="email"
                                                                            required
                                                                            className="relative block w-full rounded-[5px] px-3 py-3 text-sm text-white placeholder-gray-500 outline-none focus:z-10 lg:text-lg"
                                                                            placeholder="Email address"
                                                                        />
                                                                    </div>
                                                                    <div className="mb-4">
                                                                        <label
                                                                            htmlFor="message"
                                                                            className="sr-only">
                                                                            Message
                                                                        </label>
                                                                        <textarea
                                                                            id="message"
                                                                            name="message"
                                                                            rows={4}
                                                                            required
                                                                            className="relative block w-full rounded-[5px] px-3 py-3 text-sm text-white placeholder-gray-500 outline-none focus:z-10 lg:text-lg"
                                                                            placeholder="Your Message"></textarea>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <button
                                                                        type="submit"
                                                                        className="group relative flex w-full max-w-[10em] justify-center rounded-[3px] px-4 py-3 text-sm font-medium text-white lg:text-lg bg-red-600">
                                                                        Send
                                                                        Message
                                                                    </button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                    </li>
                                    <li className="w-full border-b border-gray-100/10 pb-2">
                                        <Link href="mailto:r0x4r@yahoo.com">Email</Link>
                                    </li>
                                    <li className="outline-none">
                                        <button className="rounded-[5px] bg-red-600 p-2 text-base font-medium uppercase tracking-normal text-white md:p-4 md:text-xl">
                                            <Link href="#">
                                                Download My Resume
                                            </Link>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-2 flex items-center justify-center border-t border-gray-100/10 pt-6">
                                <ul className="flex flex-wrap items-center justify-center gap-4 text-xl md:gap-6 md:text-2xl lg:gap-5 lg:text-2xl">
                                    <li className="text-gray-100 transition-all duration-500 ease-in-out hover:rotate-180 hover:scale-95 hover:text-white">
                                        <Link href="https://x.com/R0X4R">
                                            <RiTwitterXLine />
                                        </Link>
                                    </li>
                                    <li className="text-gray-100 transition-all duration-500 ease-in-out hover:rotate-180 hover:scale-95 hover:text-white">
                                        <Link href="https://instagram.com/indianeshansingh">
                                            <RiInstagramFill />
                                        </Link>
                                    </li>
                                    <li className="text-gray-100 transition-all duration-500 ease-in-out hover:rotate-180 hover:scale-95 hover:text-white">
                                        <Link href="https://www.linkedin.com/in/r0x4r/">
                                            <SiLinkedin />
                                        </Link>
                                    </li>
                                    <li className="text-gray-100 transition-all duration-500 ease-in-out hover:rotate-180 hover:scale-95 hover:text-white">
                                        <Link href="https://medium.com/@R0X4R">
                                            <FaMedium />
                                        </Link>
                                    </li>
                                    <li className="text-gray-100 transition-all duration-500 ease-in-out hover:rotate-180 hover:scale-95 hover:text-white">
                                        <Link href="https://www.github.com/R0X4R">
                                            <RxGithubLogo />
                                        </Link>
                                    </li>
                                    <li className="text-gray-100 transition-all duration-500 ease-in-out hover:rotate-180 hover:scale-95 hover:text-white">
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

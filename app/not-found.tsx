"use client"
import Footer from "@/components/blocks/footer"
import Header from "@/components/blocks/header"
import Link from "next/link"
import React, { useEffect, useRef, useState } from "react"

const NotFound = () => {
    const [count, setCount] = useState(0)
    const target = 404 // Final count

    useEffect(() => {
        const updateInterval = 50 // Update interval in milliseconds
        const increment = 40 // Increment value per frame

        const interval = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount < target) {
                    return Math.min(prevCount + increment, target)
                } else {
                    clearInterval(interval)
                    return target
                }
            })
        }, updateInterval)

        return () => clearInterval(interval)
    }, [target])

    return (
        <>
            {/* <Header /> */}
            <div className="relative flex h-screen min-h-screen flex-col items-center justify-center overflow-hidden bg-[url('/images/background.jpg')] bg-cover bg-center">
                <div className="absolute backdrop-blur-[0.5px] inset-0 z-0 bg-black/50" />
                <div
                    id="countUp"
                    className="relative z-10 text-center text-white">
                    <div className="number text-8xl font-black">{count}</div>
                    <div className="mt-4 text-xl font-medium">
                        Page not found
                    </div>
                    <div className="mt-2 text-xl font-thin">
                        This may not mean anything.
                    </div>
                    <div className="text-lg font-light">
                        I'm probably working on something that has blown up.
                    </div>
                </div>
                <button className="z-20 mt-20">
                    <Link
                        href="/"
                        className="pointer-events-auto flex max-w-80 select-text items-center justify-center gap-2 rounded-[5px] border border-gray-100/20 bg-transparent p-4 text-center text-sm font-medium uppercase tracking-widest text-blue-100 transition-all duration-300 hover:border-none hover:bg-red-600">
                        Back to Homepage
                    </Link>
                </button>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default NotFound

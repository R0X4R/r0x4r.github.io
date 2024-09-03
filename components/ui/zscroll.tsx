"use client"
import React, { useEffect } from "react"
import $ from "jquery"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/data"

const ZScroll = () => {
    useEffect(() => {
        const $frames = $(".frame")
        const frames = $frames.toArray()
        const numFrames = $frames.length
        const zSpacing = -1000
        const perspective = 300
        const zVals: number[] = []

        let lastPos =
            document.body.scrollTop || document.documentElement.scrollTop
        let scrollMsg = document.getElementById("instructions-overlay")

        for (let i = 0; i < numFrames; i++) {
            zVals.push((numFrames - i) * zSpacing)
        }

        const handleScroll = () => {
            const top =
                document.body.scrollTop || document.documentElement.scrollTop
            const delta = lastPos - top
            lastPos = top

            for (let i = 0; i < numFrames; i++) {
                const newZVal = (zVals[i] += delta * -1.5)
                const frame = frames[i] as HTMLElement
                const transform = `translateZ(${newZVal}px)`
                const opacity =
                    newZVal < 200
                        ? 1
                        : 1 - Math.min(1, (newZVal - 200) / (perspective - 200))

                const display = newZVal > perspective ? "none" : "block"

                frame.style.transform = transform
                frame.style.display = display
                frame.style.opacity = opacity.toFixed(2) // Ensure opacity is a string

                if (scrollMsg && top > 0) {
                    scrollMsg.style.display = "none"
                }
            }
        }

        $(window).on("scroll", handleScroll)

        return () => {
            $(window).off("scroll", handleScroll)
        }
    }, [])

    const frames = projects.map((item, index) => (
        <div
            key={index}
            className="frame box absolute flex h-full w-full flex-col items-center justify-center rounded-[10px] bg-white p-8 text-center text-[30px] font-bold text-primary">
            <div className="flex h-full w-full flex-col items-center justify-center">
                <Image
                    src={item.src}
                    alt={`Image for ${item.title}`}
                    width={1280}
                    height={720}
                    className="h-[300px] w-[500px] rounded-[10px] object-cover"
                />
                <h2 className="mt-4">{item.title}</h2>
                <p className="mt-2 max-w-2xl text-lg font-medium text-gray-600">
                    {item.description}
                </p>
                <button className="bg-primary-500 text-primary-100 mt-4 rounded-full px-4 py-2 text-base font-medium">
                    <Link href={item.link}>View Project</Link>
                </button>
            </div>
        </div>
    ))

    return (
        <div
            id="content"
            className="fixed left-0 top-0 flex h-full w-full items-center justify-center">
            <div
                id="viewport"
                className="h-full w-full"
                style={{ perspective: "300px", perspectiveOrigin: "50% 50%" }}>
                <div
                    id="instructions-overlay"
                    className="bg-primary-500 fixed z-50 flex h-full w-full flex-col items-center justify-center">
                    <h2 className="text-primary-100 text-[25px] font-bold">
                        Scroll to view full page
                    </h2>
                </div>
                {frames}
            </div>
        </div>
    )
}

export default ZScroll

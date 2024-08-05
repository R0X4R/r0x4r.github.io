// Services.tsx
"use client"
import React, { useState } from "react"
import Example from "../ui/HorizontalScroll"
import Projects from "./projects"
import Scene from "./scene"
import Timeline from "../ui/Timeline"


const Services = () => {
    const [activeMenu, setActiveMenu] = useState<number | null>(null)

    return (
        <section className="pointer-events-auto mx-auto my-20 flex w-full flex-col px-4 md:px-6 lg:max-w-screen-xl lg:px-8">
            <div className="pointer-events-auto mx-auto mb-5 h-full w-full overflow-hidden px-4 lg:max-w-screen-xl">
                <Projects setActiveMenu={setActiveMenu} />
                <Scene activeMenu={activeMenu} />
            </div>
            <div className="h-[10vh]" />
            <div className="z-10 mx-auto mb-10 flex w-full flex-col">
                <h2 className="mb-16 text-2xl font-black tracking-wide mix-blend-difference sm:text-2xl md:text-2xl lg:text-5xl">
                    Education Timeline
                </h2>
                <Timeline />
            </div>
            <div className="z-10 w-full">
                <Example />
            </div>
        </section>
    )
}

export default Services
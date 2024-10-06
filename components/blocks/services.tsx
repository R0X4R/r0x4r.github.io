// Services.tsx
"use client"
import React, { useState } from "react"
import Blogs from "@/components/ui/HorizontalScroll"
import Projects from "@/components/blocks/projects"
import Scene from "@/components/blocks/scene"
import Timeline from "@/components/ui/Timeline"
// import Timeline from "../ui/Timeline"

const Services = () => {
    const [activeMenu, setActiveMenu] = useState<number | null>(null)

    return (
        <>
            <section className="pointer-events-auto mx-auto my-20 flex w-full flex-col px-4 md:px-6 lg:max-w-screen-xl lg:px-8">
                <div id="projects" className="pointer-events-auto mx-auto mb-5 h-full w-full overflow-hidden px-4 lg:max-w-screen-xl">
                    <Projects setActiveMenu={setActiveMenu} />
                    <Scene activeMenu={activeMenu} />
                </div>
                <div className="h-[2vh]" />
                <div id="timeline" className="z-10 mx-auto mb-10 flex w-full flex-col items-center">
                    <h2 className="mb-16 text-center text-2xl font-black tracking-wide mix-blend-difference sm:text-2xl md:text-2xl lg:text-5xl">
                        Education Timeline
                    </h2>
                    <Timeline />
                </div>
            </section>
            <div id="community" className="rounded-3xl z-10 max-w-full bg-dark md:[background-image:radial-gradient(28%_100%_at_center,rgba(255,255,255,0.1),rgba(13,13,18,1))] py-8">
                <Blogs />
            </div>
            <div className="h-60" />
        </>
    )
}

export default Services

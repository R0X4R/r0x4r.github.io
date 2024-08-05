import React from "react"
import { projects } from "@/data"
import { AiOutlineArrowRight } from "react-icons/ai"
import Link from "next/link"

interface ProjectsProps {
    setActiveMenu: (index: number | null) => void
}

const Projects: React.FC<ProjectsProps> = ({ setActiveMenu }) => {
    return (
        <div className="relative z-10 min-h-screen w-full cursor-pointer overflow-y-auto text-white mix-blend-difference">
            <div className="flex items-center justify-between px-1 lg:px-5">
                <h2 className="py-8 text-lg font-black uppercase tracking-wide sm:text-2xl md:text-2xl lg:text-5xl">
                    My Projects
                </h2>
                <Link
                    href="/projects"
                    className="group flex cursor-pointer items-center justify-center gap-2 bg-transparent text-xs font-medium uppercase tracking-wide text-white lg:text-xl">
                    View All Projects
                    <span className="hidden transition-all duration-700 ease-in-out group-hover:block">
                        <AiOutlineArrowRight />
                    </span>
                </Link>
            </div>
            <ul onMouseLeave={() => setActiveMenu(null)} className="border-b">
                {projects.map((project, i) => (
                    <li
                        onMouseOver={() => setActiveMenu(i)}
                        key={project.title}
                        className="border-t border-gray-100 px-5 py-8 text-xl font-medium text-gray-100 sm:text-xl md:text-lg lg:text-5xl">
                        <Link href={project.link}>
                            <p>{project.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Projects
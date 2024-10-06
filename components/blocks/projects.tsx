import React from "react"
import { projects } from "@/data"
import { AiOutlineArrowRight } from "react-icons/ai"
import Link from "next/link"

interface ProjectsProps {
    setActiveMenu: (index: number | null) => void
}

const Projects: React.FC<ProjectsProps> = ({ setActiveMenu }) => {
    return (
        <div className="relative z-10 min-h-screen w-full overflow-y-auto">
            <div className="flex items-center justify-center px-1 mix-blend-screen mb-16 lg:px-5">
                <h2 className="text-lg font-normal text-center text-dark/60 md:text-2xl lg:text-5xl">
                    These are a few projects that I have made
                </h2>
            </div>
            <div className="relative z-10 min-h-screen w-full cursor-pointer overflow-y-auto mix-blend-difference">
                <ul
                    onMouseLeave={() => setActiveMenu(null)}
                    className="border-b">
                    {projects.map((project, i) => (
                        <li
                            onMouseOver={() => setActiveMenu(i)}
                            key={project.title}
                            className="border-t border-dashed border-dark/20 px-5 py-8 font-medium text-xl md:text-lg lg:text-5xl mix-blend-difference">
                            <Link href={project.link}>
                                <p>{project.title}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Projects

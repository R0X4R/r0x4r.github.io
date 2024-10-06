import React from "react"
import { IoSchool } from "react-icons/io5"
import { GrYoga } from "react-icons/gr"
import { FaSchoolFlag } from "react-icons/fa6"
import { AiTwotoneSafetyCertificate } from "react-icons/ai"
import { PiCertificateFill } from "react-icons/pi"
import { CardSpotlight } from "@/components/ui/CardSpotlight"
import { education } from "@/data"

const iconComponents: { [key: string]: JSX.Element } = {
    IoSchool: <IoSchool />,
    GrYoga: <GrYoga />,
    FaSchoolFlag: <FaSchoolFlag />,
    AiTwotoneSafetyCertificate: <AiTwotoneSafetyCertificate />,
    PiCertificateFill: <PiCertificateFill />,
}

const Timeline = () => {
    return (
        <div className="mx-auto w-full max-w-3xl">
            <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-dark/30 before:to-transparent md:before:mx-auto md:before:translate-x-0">
                {education.map((item, index) => (
                    <div
                        key={index}
                        className="group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse">
                        <div className="text-dark/60 backdrop-blur-2xl bg-light/60 group-hover:text-dark flex size-10 cursor-pointer items-center justify-center rounded-full shadow transition-transform duration-300 ease-in-out group-hover:-translate-y-1 group-hover:rotate-[360deg] group-hover:scale-105 group-hover:bg-light md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            {
                                iconComponents[
                                    item.icon as keyof typeof iconComponents
                                ]
                            }
                        </div>
                        <CardSpotlight className="group w-[calc(100%-4rem)] cursor-pointer justify-center flex flex-col rounded-2xl px-4 py-8 md:w-[calc(50%-2.5rem)]">
                            <div className="z-20 mb-1 flex items-center justify-between space-x-2">
                                <div className="text-dark relative z-20 text-lg font-black">
                                    {item.title}
                                </div>
                                <time className="group-hover:bg-light z-20 text-sm font-medium text-accent/60">
                                    {item.year}
                                </time>
                            </div>
                            <div className="relative z-20 mt-4 text-sm font-semibold text-dark/60">
                                <h2>{item.description}</h2>
                            </div>
                        </CardSpotlight>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Timeline

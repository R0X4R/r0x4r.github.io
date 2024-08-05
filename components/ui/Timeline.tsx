import React from "react";
import { IoSchool } from "react-icons/io5";
import { GrYoga } from "react-icons/gr";
import { FaSchoolFlag } from "react-icons/fa6";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import { PiCertificateFill } from "react-icons/pi";
import { CardSpotlight } from "./card-spotlight";
import { education } from "@/data";

const iconComponents: { [key: string]: JSX.Element } = {
    IoSchool: <IoSchool />,
    GrYoga: <GrYoga />,
    FaSchoolFlag: <FaSchoolFlag />,
    AiTwotoneSafetyCertificate: <AiTwotoneSafetyCertificate />,
    PiCertificateFill: <PiCertificateFill />,
};

const Timeline = () => {
    return (
        <div className="mx-auto w-full max-w-3xl">
            <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent md:before:mx-auto md:before:translate-x-0">
                {education.map((item, index) => (
                    <div
                        key={index}
                        className="group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse"
                    >
                        <div className="flex h-10 w-10 transition-transform duration-1000 ease-in-out group-hover:scale-105 group-hover:rotate-[360deg] group-hover:-translate-y-1 cursor-pointer items-center justify-center rounded-full border border-white bg-primary text-white shadow group-hover:bg-white group-hover:text-primary md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            {
                                iconComponents[
                                    item.icon as keyof typeof iconComponents
                                ]
                            }
                        </div>
                        <CardSpotlight className="w-[calc(100%-4rem)] cursor-pointer rounded px-4 py-8 md:w-[calc(50%-2.5rem)]">
                            <div className="z-20 mb-1 flex items-center justify-between space-x-2">
                                <div className="relative z-20 text-lg font-bold text-white">
                                    {item.title}
                                </div>
                                <time className="z-20 text-sm font-medium text-red-100">
                                    {item.year}
                                </time>
                            </div>
                            <div className="relative z-20 mt-4 text-sm text-gray-100">
                                <h2>{item.description}</h2>
                            </div>
                        </CardSpotlight>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Timeline;
"use client"
import { motion, useTransform, useScroll } from "framer-motion"
import { useRef } from "react"
import { EvervaultCard } from "./EvervaultCard"
import { blogs } from "@/data"

// Define the Blog type
type Blog = {
    title: string
    type: string
    link: string
}

const Example = () => {
    return (
        <div className="bg-primary-500">
            <HorizontalScrollCarousel />
        </div>
    )
}

const HorizontalScrollCarousel = () => {
    const targetRef = useRef<HTMLDivElement | null>(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
    })

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"])

    return (
        <section ref={targetRef} className="bg-primary-500 relative h-[300vh]">
            <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
                <h2 className="text-primary-100 my-10 text-left text-5xl font-bold">
                    For Community
                </h2>
                <motion.div style={{ x }} className="flex gap-8">
                    {blogs.map((blog: Blog, index: number) => (
                        <Card key={index} blog={blog} />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

const Card = ({ blog }: { blog: Blog }) => {
    return (
        <div className="relative mx-auto flex h-[30rem] w-[300px] flex-shrink-0 flex-col items-start border border-primary/[0.2] p-4 dark:border-white/[0.2]">
            <EvervaultCard text={blog.type} />
            <h2 className="mt-4 text-lg font-semibold text-gray-100">
                {blog.title}
            </h2>
            <a
                href={blog.link}
                className="mt-6 w-full rounded-[5px] border border-primary/[0.2] px-2 py-3 text-center text-sm font-semibold uppercase tracking-wider text-gray-100 hover:cursor-pointer hover:text-pretty hover:bg-gray-100 hover:text-primary dark:border-white/[0.2]">
                Learn more
            </a>
        </div>
    )
}

export default Example

"use client"
import { motion, useTransform, useScroll } from "framer-motion"
import { useRef } from "react"
import { EvervaultCard } from "./EvervaultCard"
import { blogs } from "@/data"
import Link from "next/link"

// Define the Blog type
type Blog = {
    title: string
    type: string
    link: string
}

const Blogs = () => {
    return (
        <div className="w-full h-full min-w-full">
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
        <section ref={targetRef} className="relative h-[600vh] min-w-full">
            <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
                <h2 className="my-10 text-center text-5xl font-bold text-light">
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
        <div className="relative mx-auto flex h-auto w-[250px] md:w-[400px] flex-shrink-0 flex-col items-start rounded-2xl border border-light/10 bg-light/5 p-6 shadow-lg backdrop-blur-[2px] backdrop-saturate-150">
            <EvervaultCard text={blog.type} className="rounded-2xl" />
            <h2 className="mt-4 text-lg font-semibold text-gray-100">
                {blog.title}
            </h2>
            <Link
                href={blog.link}
                className="mt-6 w-full rounded-[5px] px-2 py-4 text-center text-sm font-semibold uppercase tracking-wider bg-light/5 backdrop-blur-sm backdrop-saturate-150 hover:bg-light hover:text-dark text-light/60 hover:cursor-pointer">
                Learn more
            </Link>
        </div>
    )
}

export default Blogs

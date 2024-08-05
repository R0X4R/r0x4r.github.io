import React from "react"
import About from "@/components/blocks/about"
import Footer from "@/components/blocks/footer"
import Hero from "@/components/blocks/hero"
import Preloader from "@/components/blocks/preloader"
import Services from "@/components/blocks/services"
import Header from "@/components/blocks/header"

interface CustomMetadata {
    title: string
    description: string
    alternates?: {
        canonical?: string
        languages?: {
            "en-US": string
        }
    }
}

export const metadata: CustomMetadata = {
    title: "Eshan Singh (R0X4R) - Hacker, Researcher, Yoga Trainer, Self-taught Developer",
    description:
        "Undergraduate student, Cybersecurity expert & Ethical Hacker securing over 60 companies, web developer, and certified yoga teacher with 3+ years' experience.",
    alternates: {
        canonical: "/",
        languages: {
            "en-US": "/",
        },
    },
}

export default function Home() {
    return (
        <>
            <Preloader />
            <Header />
            <Hero />
            <About />
            <Services />
            <Footer />
        </>
    )
}
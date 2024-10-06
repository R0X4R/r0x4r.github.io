import About from "@/components/blocks/about"
import Footer from "@/components/blocks/footer"
import Header from "@/components/blocks/header"
import Hero from "@/components/blocks/hero"
import Preloader from "@/components/blocks/preloader"
import Services from "@/components/blocks/services"

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
            <main className="flex flex-col items-center justify-center rounded-b-3xl bg-light p-4">
                <Hero />
                <About />
                <Services />
            </main>
            <Footer />
        </>
    )
}

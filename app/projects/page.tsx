import Header from "@/components/blocks/header"
import Zscroll from "@/components/ui/zscroll"
import React from "react"

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
        "My all projects are listed here.",
    alternates: {
        canonical: "/projects",
        languages: {
            "en-US": "/projects",
        },
    },
}

const ProjectPage = () => {
  return (
      <main className="h-[8000px]">
          <Header />
          <Zscroll />
    </main>
  )
}

export default ProjectPage
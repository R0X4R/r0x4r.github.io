import type { Metadata } from "next"
import "./globals.css"
import "./poppins.css"

export const metadata: Metadata = {
    metadataBase: new URL("https://eshansingh.in"),
    title: "Eshan Singh (R0X4R) - Hacker, Researcher, Yoga Trainer, Self-taught Developer",
    referrer: "origin-when-cross-origin",
    authors: [{ name: "Eshan Singh" }],
    description:
        "Undergraduate student, Cybersecurity expert & Ethical Hacker securing over 60 companies, web developer, and certified yoga teacher with 3+ years experience.",
    twitter: {
        card: "summary_large_image",
        site: "@R0X4R",
        title: "Eshan Singh (R0X4R) - Hacker, Researcher, Yoga Trainer, Self-taught Developer",
        description:
            "Undergraduate student, Cybersecurity expert & Ethical Hacker securing over 60 companies, web developer, and certified yoga teacher with 3+ years experience.",
    },
    creator: "Eshan Singh",
    openGraph: {
        title: "Eshan Singh (R0X4R) - Hacker, Researcher, Yoga Trainer, Self-taught Developer",
        description:
            "Undergraduate student, Cybersecurity expert & Ethical Hacker securing over 60 companies, web developer, and certified yoga teacher with 3+ years experience.",
        url: "https://eshansingh.in",
        siteName: "Eshan Singh",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
            },
        ],
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "/favicon.png",
        shortcut: "/favicon.png",
        apple: "/favicon.png",
    },
    verification: {
        google: "93HaLAA9Ai7pLV67hlZV4FRQkG3SgvW1H3NeALAb09U",
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className="bg-dark scroll-smooth antialiased">
                {children}
            </body>
        </html>
    )
}

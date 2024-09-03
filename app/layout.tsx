import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "./provider"

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
                url: "/images/og-image.png",
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
        icon: "/images/favicon.png",
        shortcut: "/images/favicon.png",
        apple: "/images/favicon.png",
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
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="sticky-header bg-primary-500 scroll-smooth antialiased hover:subpixel-antialiased focus:scroll-auto">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}

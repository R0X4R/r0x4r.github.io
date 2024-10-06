"use client"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const words = ["ओ३म्", "ओ३म्", "खं", "खं", "ब्रह्म"]

const opacity = {
    initial: { opacity: 0 },
    enter: { opacity: 0.75, transition: { duration: 1, delay: 0.2 } },
}

const slideUp = {
    initial: { top: 0 },
    exit: {
        top: "-100vh",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
}

const Preloader: React.FC = () => {
    const [index, setIndex] = useState(0)
    const [dimension, setDimension] = useState({ width: 0, height: 0 })
    const [showPreloader, setShowPreloader] = useState(true) // Flag to hide preloader after all words

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight })
    }, [])

    useEffect(() => {
        if (index === words.length - 1) {
            // After showing the last word, set a timeout to trigger the exit animation
            setTimeout(() => {
                setShowPreloader(false)
            }, 1000) // Exit 1 second after last word
            return
        }

        const timeout = setTimeout(
            () => {
                setIndex(index + 1)
            },
            index === 0 ? 1000 : 150
        )

        return () => clearTimeout(timeout)
    }, [index])

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`

    const curve = {
        initial: {
            d: initialPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
        },
        exit: {
            d: targetPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
        },
    }

    return (
        <AnimatePresence>
            {showPreloader && (
                <motion.div
                    variants={slideUp}
                    initial="initial"
                    exit="exit"
                    className="bg-light fixed inset-0 z-[999] flex items-center justify-center">
                    {dimension.width > 0 && (
                        <>
                            <motion.p
                                variants={opacity}
                                initial="initial"
                                animate="enter"
                                className="hindi-text text-light relative z-10 flex items-center text-4xl font-extrabold tracking-wide">
                                {words[index]}
                            </motion.p>
                            <svg className="absolute inset-0 h-full w-full">
                                <motion.path
                                    variants={curve}
                                    initial="initial"
                                    exit="exit"
                                    fill="#0D0D12"></motion.path>
                            </svg>
                        </>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Preloader

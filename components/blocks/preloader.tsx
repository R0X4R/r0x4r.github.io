"use client"
import React, { useEffect, useRef, useState, useCallback } from "react"
import { motion } from "framer-motion"
import { opacity, slideUp } from "@/data"

const words = ["ओ३म्", "ओ३म्", "खं", "खं", "ब्रह्म"]

const Preloader: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement>(null)
    const [index, setIndex] = useState(0)
    const [dimension, setDimension] = useState({ width: 0, height: 0 })
    const [isVisible, setIsVisible] = useState(true)

    const updateDimensions = useCallback(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight })
    }, [])

    useEffect(() => {
        updateDimensions()
        window.addEventListener("resize", updateDimensions)
        return () => {
            window.removeEventListener("resize", updateDimensions)
        }
    }, [updateDimensions])

    useEffect(() => {
        const changeWord = setTimeout(() => {
            if (index < words.length - 1) {
                setIndex(index + 1)
            }
        }, 250) // Faster change interval

        return () => clearTimeout(changeWord)
    }, [index])

    useEffect(() => {
        const hidePreloader = setTimeout(() => {
            setIsVisible(false)
            document.body.style.cursor = "default"
            window.scrollTo(0, 0)
        }, 6000) // Ensure this is long enough for all words to be shown

        return () => clearTimeout(hidePreloader)
    }, [])

    useEffect(() => {
        const playAudio = async () => {
            try {
                if (audioRef.current) {
                    await audioRef.current.play()
                }
            } catch (error) {
                console.error("Failed to play audio:", error)
            }
        }
        playAudio()
    }, [])

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 100} 0 ${dimension.height} L0 0`
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`

    const curve = {
        initial: {
            d: initialPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
        },
        exit: {
            d: targetPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
        },
    }

    if (!isVisible) return null

    return (
        <motion.div
            variants={slideUp}
            initial="initial"
            exit="exit"
            className="bg-primary-500 fixed inset-0 z-[999] flex items-center justify-center">
            {dimension.width > 0 && (
                <>
                    <motion.p
                        variants={opacity}
                        initial="initial"
                        animate="enter"
                        className="relative z-10 flex items-center font-hindi text-4xl font-extrabold tracking-wide text-primary-100">
                        {words[index]}
                    </motion.p>
                    <svg className="absolute inset-0 h-full w-full">
                        <motion.path
                            variants={curve}
                            initial="initial"
                            exit="exit"
                            fill="#0C0C0C"></motion.path>
                    </svg>
                    <audio ref={audioRef} src="/om.mp3" preload="auto" />
                </>
            )}
        </motion.div>
    )
}

export default Preloader

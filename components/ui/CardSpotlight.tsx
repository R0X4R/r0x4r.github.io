"use client"

import { useMotionValue, motion, useMotionTemplate } from "framer-motion"
import React, { MouseEvent as ReactMouseEvent, useState } from "react"
import { CanvasRevealEffect } from "@/components/ui/CanvasReveal"
import { cn } from "@/lib/utils"

export const CardSpotlight = ({
    children,
    radius = 350,
    color = "#F8FAFB",
    className,
    ...props
}: {
    radius?: number
    color?: string
    children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>) => {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: ReactMouseEvent<HTMLDivElement>) {
        let { left, top } = currentTarget.getBoundingClientRect()

        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
    }

    const [isHovering, setIsHovering] = useState(false)
    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)
    return (
        <div
            className={cn(
                "group/spotlight h-48 relative rounded-2xl border-dark/15 border-dashed border",
                className
            )}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...props}>
            <motion.div
                className="pointer-events-none absolute -inset-px z-0 rounded-md opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
                style={{
                    backgroundColor: color,
                    maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 60%
            )
          `,
                }}>
                {isHovering && (
                    <CanvasRevealEffect
                        animationSpeed={5}
                        containerClassName="bg-transparent absolute inset-0 pointer-events-none"
                        colors={[
                            [13, 13, 18],
                            [13, 13, 18],
                        ]}
                        dotSize={3}
                    />
                )}
            </motion.div>
            {children}
        </div>
    )
}

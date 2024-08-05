/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */

import React, { useEffect, useRef } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { motion } from "framer-motion-3d"
import { animate, useMotionValue, useTransform } from "framer-motion"
import { vertex, fragment } from "@/components/hooks/shader"
import { useTexture, useAspect } from "@react-three/drei"
import useMouse from "@/components/hooks/useMouse"
import useDimension from "@/components/hooks/useDimension"
import { projects } from "@/data"

// Define the props for the Model component
interface ModelProps {
    activeMenu: number | null
}

export default function Model({ activeMenu }: ModelProps) {
    const plane = useRef<any>()
    const { viewport } = useThree()
    const dimension = useDimension()
    const mouse = useMouse()
    const opacity = useMotionValue(0)

    // Load textures from projects data
    const textures = projects.map((project) => useTexture(project.src))
    const { width, height } = textures[0].image

    // Linear interpolation function
    const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a

    // Calculate the aspect ratio of the texture
    const scale = useAspect(width, height, 0.225)

    // Initialize smooth mouse motion values
    const smoothMouse = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    }

    useEffect(() => {
        if (activeMenu != null) {
            // Update the texture and animate the opacity when the active menu changes
            plane.current.material.uniforms.uTexture.value =
                textures[activeMenu]
            animate(opacity, 1, {
                duration: 0.2,
                onUpdate: (latest) =>
                    (plane.current.material.uniforms.uAlpha.value = latest),
            })
        } else {
            // Animate the opacity to 0 when there is no active menu
            animate(opacity, 0, {
                duration: 0.2,
                onUpdate: (latest) =>
                    (plane.current.material.uniforms.uAlpha.value = latest),
            })
        }
    }, [activeMenu])

    // Initialize shader uniforms
    const uniforms = useRef({
        uDelta: { value: { x: 0, y: 0 } },
        uAmplitude: { value: 0.0005 },
        uTexture: { value: textures[0] },
        uAlpha: { value: 0 },
    })

    useFrame(() => {
        const { x, y } = mouse
        const smoothX = smoothMouse.x.get()
        const smoothY = smoothMouse.y.get()

        // Smoothly interpolate mouse movements
        if (Math.abs(x - smoothX) > 1) {
            smoothMouse.x.set(lerp(smoothX, x, 0.1))
            smoothMouse.y.set(lerp(smoothY, y, 0.1))
            plane.current.material.uniforms.uDelta.value = {
                x: x - smoothX,
                y: -1 * (y - smoothY),
            }
        }
    })

    // Transform smooth mouse positions to mesh positions
    const x = useTransform(
        smoothMouse.x,
        [0, dimension.width],
        [(-1 * viewport.width) / 2, viewport.width / 2]
    )
    const y = useTransform(
        smoothMouse.y,
        [0, dimension.height],
        [viewport.height / 2, (-1 * viewport.height) / 2]
    )

    return (
        <motion.mesh position-x={x} position-y={y} ref={plane} scale={scale}>
            <planeGeometry args={[1, 1, 15, 15]} />
            {/* Uncomment the next line for a basic material with wireframe for debugging */}
            {/* <meshBasicMaterial wireframe={true} color="red"/> */}
            <shaderMaterial
                vertexShader={vertex}
                fragmentShader={fragment}
                uniforms={uniforms.current}
                transparent={true}
                // Uncomment the next line for wireframe mode
                // wireframe={true}
            />
        </motion.mesh>
    )
}

import React, { useEffect, useState } from "react"

// Define an interface to type the mouse position state
interface MousePosition {
    x: number
    y: number
}

export default function useMouse(): MousePosition {
    // Initialize state to store mouse position with default values { x: 0, y: 0 }
    const [mouse, setMouse] = useState<MousePosition>({ x: 0, y: 0 })

    // Event handler function to update mouse position state
    const mouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e
        // Update the state with the new mouse position
        setMouse({
            x: clientX,
            y: clientY,
        })
    }

    // useEffect to add and clean up the mousemove event listener
    useEffect(() => {
        // Add mousemove event listener to the window
        window.addEventListener("mousemove", mouseMove)
        // Cleanup function to remove the event listener when the component unmounts
        return () => window.removeEventListener("mousemove", mouseMove)
    }, [])

    // Return the current mouse position
    return mouse
}

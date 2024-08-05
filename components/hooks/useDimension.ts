import React, { useEffect, useState } from 'react';

// Define an interface to type the dimension state
interface Dimension {
    width: number;
    height: number;
}

export default function useDimension(): Dimension {
    // Initialize state to store window dimensions with default values { width: 0, height: 0 }
    const [dimension, setDimension] = useState<Dimension>({ width: 0, height: 0 });

    // Event handler function to update dimension state on window resize
    const resize = () => {
        const { innerWidth, innerHeight } = window;
        // Update the state with the new window dimensions
        setDimension({
            width: innerWidth,
            height: innerHeight,
        });
    };

    // useEffect to add and clean up the resize event listener
    useEffect(() => {
        // Call resize initially to set the state with current window dimensions
        resize();
        // Add resize event listener to the window
        window.addEventListener('resize', resize);
        // Cleanup function to remove the event listener when the component unmounts
        return () => window.removeEventListener('resize', resize);
    }, []);

    // Return the current window dimensions
    return dimension;
}

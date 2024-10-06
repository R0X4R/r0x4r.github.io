"use client";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Model from "@/components/ui/Model";

// Define the props for the Scene component
interface SceneProps {
    activeMenu: number | null;
}

const Scene: React.FC<SceneProps> = ({ activeMenu }) => {
    return (
        <div className="fixed top-0 h-screen w-full">
            <Canvas>
                <Model activeMenu={activeMenu} />
            </Canvas>
        </div>
    );
};

export default Scene;

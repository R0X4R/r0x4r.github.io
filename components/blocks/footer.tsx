import React from "react";
import Content from "@/components/ui/Content";

export default function Footer() {
    return (
        <div
            className="relative mx-auto h-[400px] w-full lg:max-w-screen-xl"
            style={{
                clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
            }}
        >
            <div className="relative -top-[100vh] h-[calc(100vh+400px)]">
                <div className="sticky top-[calc(100vh-400px)] h-[400px] pt-16">
                    <Content />
                </div>
            </div>
        </div>
    );
}

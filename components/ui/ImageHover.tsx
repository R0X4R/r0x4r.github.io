"use client"
import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import gsap from "gsap"

// Type definitions for the hover effect options
interface HoverEffectOptions {
    parent: HTMLElement
    displacementImage: string
    image1: string
    image2: string
    imagesRatio?: number
    intensity1?: number
    intensity2?: number
    angle?: number
    angle1?: number
    angle2?: number
    speedIn?: number
    speedOut?: number
    hover?: boolean
    easing?: string
    video?: boolean
}

const initializeHoverEffect = (options: HoverEffectOptions) => {
    // console.log(
    //     "%c Hover effect by Robin Delaporte: https://github.com/robin-dela/hover-effect ",
    //     "color: #bada55; font-size: 0.8rem"
    // )

    const {
        parent,
        displacementImage,
        image1,
        image2,
        imagesRatio = 1,
        intensity1 = 1,
        intensity2 = 1,
        angle = Math.PI / 4,
        angle1 = angle,
        angle2 = 3 * -angle,
        speedIn = 1.6,
        speedOut = 1.2,
        hover = true,
        easing = "expo.out",
        video = false,
    } = options

    if (parent && image1 && image2 && displacementImage) {
        const scene = new THREE.Scene()
        const camera = new THREE.OrthographicCamera(
            parent.offsetWidth / -2,
            parent.offsetWidth / 2,
            parent.offsetHeight / 2,
            parent.offsetHeight / -2,
            1,
            2000
        )
        camera.position.z = 1

        const renderer = new THREE.WebGLRenderer({
            antialias: false,
            alpha: true,
        })
        renderer.setPixelRatio(2)
        renderer.setClearColor(0xffffff, 0)
        renderer.setSize(parent.offsetWidth, parent.offsetHeight)
        parent.appendChild(renderer.domElement)

        const render = () => renderer.render(scene, camera)

        const textureLoader = new THREE.TextureLoader()
        textureLoader.crossOrigin = ""

        const displacementTexture = textureLoader.load(
            displacementImage,
            render
        )
        displacementTexture.magFilter = displacementTexture.minFilter =
            THREE.LinearFilter

        let texture1: THREE.Texture
        let texture2: THREE.Texture
        if (video) {
            const video1 = document.createElement("video")
            video1.autoplay = true
            video1.loop = true
            video1.muted = true
            video1.src = image1
            video1.load()

            const video2 = document.createElement("video")
            video2.autoplay = true
            video2.loop = true
            video2.muted = true
            video2.src = image2
            video2.load()

            texture1 = new THREE.VideoTexture(video1)
            texture2 = new THREE.VideoTexture(video2)

            video1.addEventListener(
                "loadeddata",
                () => {
                    video1.play()
                    ;(texture1 as THREE.VideoTexture).magFilter = (
                        texture1 as THREE.VideoTexture
                    ).minFilter = THREE.LinearFilter
                    material.uniforms.texture1.value = texture1
                },
                false
            )

            video2.addEventListener(
                "loadeddata",
                () => {
                    video2.play()
                    ;(texture2 as THREE.VideoTexture).magFilter = (
                        texture2 as THREE.VideoTexture
                    ).minFilter = THREE.LinearFilter
                    material.uniforms.texture2.value = texture2
                },
                false
            )
        } else {
            texture1 = textureLoader.load(image1, render)
            texture2 = textureLoader.load(image2, render)
            texture1.magFilter = texture2.magFilter = THREE.LinearFilter
            texture1.minFilter = texture2.minFilter = THREE.LinearFilter
        }

        const aspectRatio = parent.offsetHeight / parent.offsetWidth
        const widthRatio =
            aspectRatio < imagesRatio
                ? 1
                : (parent.offsetWidth / parent.offsetHeight) * imagesRatio
        const heightRatio =
            aspectRatio < imagesRatio
                ? parent.offsetHeight / parent.offsetWidth
                : 1

        const material = new THREE.ShaderMaterial({
            uniforms: {
                intensity1: { value: intensity1 },
                intensity2: { value: intensity2 },
                dispFactor: { value: 0 },
                angle1: { value: angle1 },
                angle2: { value: angle2 },
                texture1: { value: texture1 },
                texture2: { value: texture2 },
                disp: { value: displacementTexture },
                res: {
                    value: new THREE.Vector4(
                        parent.offsetWidth,
                        parent.offsetHeight,
                        widthRatio,
                        heightRatio
                    ),
                },
                dpr: { value: window.devicePixelRatio },
            },
            vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
            fragmentShader: `
        varying vec2 vUv;
        uniform float dispFactor;
        uniform float dpr;
        uniform sampler2D disp;
        uniform sampler2D texture1;
        uniform sampler2D texture2;
        uniform float angle1;
        uniform float angle2;
        uniform float intensity1;
        uniform float intensity2;
        uniform vec4 res;
        mat2 getRotM(float angle) {
          float s = sin(angle);
          float c = cos(angle);
          return mat2(c, -s, s, c);
        }
        void main() {
          vec4 disp = texture2D(disp, vUv);
          vec2 dispVec = vec2(disp.r, disp.g);
          vec2 uv = 0.5 * gl_FragCoord.xy / res.xy;
          vec2 myUV = (uv - vec2(0.5)) * res.zw + vec2(0.5);
          vec2 distortedPosition1 = myUV + getRotM(angle1) * dispVec * intensity1 * dispFactor;
          vec2 distortedPosition2 = myUV + getRotM(angle2) * dispVec * intensity2 * (1.0 - dispFactor);
          vec4 _texture1 = texture2D(texture1, distortedPosition1);
          vec4 _texture2 = texture2D(texture2, distortedPosition2);
          gl_FragColor = mix(_texture1, _texture2, dispFactor);
        }
      `,
            transparent: true,
            opacity: 1,
        })

        const geometry = new THREE.PlaneGeometry(
            parent.offsetWidth,
            parent.offsetHeight,
            1
        )
        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)

        const handleMouseEnter = () => {
            gsap.to(material.uniforms.dispFactor, {
                duration: speedIn,
                value: 1,
                ease: easing,
                onUpdate: render,
                onComplete: render,
            })
        }

        const handleMouseLeave = () => {
            gsap.to(material.uniforms.dispFactor, {
                duration: speedOut,
                value: 0,
                ease: easing,
                onUpdate: render,
                onComplete: render,
            })
        }

        if (hover) {
            parent.addEventListener("mouseenter", handleMouseEnter)
            parent.addEventListener("touchstart", handleMouseEnter)
            parent.addEventListener("mouseleave", handleMouseLeave)
            parent.addEventListener("touchend", handleMouseLeave)
        }

        window.addEventListener("resize", () => {
            const aspectRatio = parent.offsetHeight / parent.offsetWidth
            const newWidthRatio =
                aspectRatio < imagesRatio
                    ? 1
                    : (parent.offsetWidth / parent.offsetHeight) * imagesRatio
            const newHeightRatio =
                aspectRatio < imagesRatio
                    ? parent.offsetHeight / parent.offsetWidth
                    : 1
            material.uniforms.res.value = new THREE.Vector4(
                parent.offsetWidth,
                parent.offsetHeight,
                newWidthRatio,
                newHeightRatio
            )
            renderer.setSize(parent.offsetWidth, parent.offsetHeight)
            render()
        })

        return () => {
            if (hover) {
                parent.removeEventListener("mouseenter", handleMouseEnter)
                parent.removeEventListener("touchstart", handleMouseEnter)
                parent.removeEventListener("mouseleave", handleMouseLeave)
                parent.removeEventListener("touchend", handleMouseLeave)
            }
            window.removeEventListener("resize", () => {
                const aspectRatio = parent.offsetHeight / parent.offsetWidth
                const newWidthRatio =
                    aspectRatio < imagesRatio
                        ? 1
                        : (parent.offsetWidth / parent.offsetHeight) *
                          imagesRatio
                const newHeightRatio =
                    aspectRatio < imagesRatio
                        ? parent.offsetHeight / parent.offsetWidth
                        : 1
                material.uniforms.res.value = new THREE.Vector4(
                    parent.offsetWidth,
                    parent.offsetHeight,
                    newWidthRatio,
                    newHeightRatio
                )
                renderer.setSize(parent.offsetWidth, parent.offsetHeight)
                render()
            })
        }
    } else {
        console.warn("One or more images are missing")
    }
}

const HoverEffectComponent: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        if (containerRef.current) {
            initializeHoverEffect({
                parent: containerRef.current,
                displacementImage: "/4.png",
                image1: "/self.jpg",
                image2: "/yoga.jpg",
            })
        }
    }, [])

    return (
        <div
            ref={containerRef}
            className="relative z-10 h-full w-full cursor-pointer overflow-hidden rounded-full object-cover object-center transition-all duration-700 ease-in-out hover:-translate-y-5 hover:shadow-xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}></div>
    )
}

export default HoverEffectComponent

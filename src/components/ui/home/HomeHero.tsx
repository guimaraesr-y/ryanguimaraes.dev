'use client';

import TypeWrite from "../../typeWrite/TypeWrite";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HomeHero = () => {
    const tecnologias = ["NODE.JS", "REACT.JS", "PHP", "JAVA"];

    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            // Animações para telas grandes (largura mínima 768px)
            const tl = gsap.timeline();
            tl
                .from(".tracking-widest h1", {
                    opacity: 0,
                    y: -50,
                    duration: 0.5,
                    stagger: 0.2,
                })
                .from(".tracking-widest h2", {
                    opacity: 0,
                    y: -50,
                    duration: 0.5,
                }, 0)
                .from(".hero-image", {
                    x: -200, // Vem da esquerda
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out",
                }, "-=0.5"); // Sobreposição da animação
        });

        mm.add("(max-width: 767px)", () => {
            // Animações para telas pequenas (até 767px)
            const tl = gsap.timeline();
            tl
                .from(".tracking-widest h1", {
                    opacity: 0,
                    y: -50,
                    duration: 0.5,
                    stagger: 0.2,
                })
                .from(".tracking-widest h2", {
                    opacity: 0,
                    y: -50,
                    duration: 0.5,
                }, 0)
                .from(".hero-image", {
                    y: -100, // Vem de cima
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out",
                }, "-=0.5"); // Sobreposição da animação
        });

        return () => mm.revert();
    }, []);

    return (
        <header id="home" className="bg-gradient-radial from-[#1b2735] to-[#090a0f] text-center md:text-left h-[100vh] transition-[height] flex flex-col-reverse md:flex-row items-center gap-10 place-content-center md:justify-between px-[15vw] font-bold">
            <div className="tracking-widest flex flex-col gap-2">
                <h1 className="text-[7vw] md:text-[2.25vw]">FULLSTACK DEVELOPER</h1>
                <h2 className="font-light text-[5vw] md:text-[1vw]">FRONT-END & BACK-END</h2>
                <h1 className="text-[5vw] md:text-[2vw]">
                    <TypeWrite texts={tecnologias} />
                </h1>
            </div>

            <Image 
                src="/imgs/hey.png" 
                width={0} 
                height={0} 
                sizes="100vw" 
                className="hero-image w-3/4 md:w-[35%]" 
                alt="Logo de sauda o na tela principal" 
                priority={true}
            />
        </header>
    )
}

export default HomeHero


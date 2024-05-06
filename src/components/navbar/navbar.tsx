import React, { useEffect, useRef, useState } from "react";
import './navbar.css';

import { Kanit } from "next/font/google";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const kanit = Kanit({ weight: "400", subsets: ["latin"] })

const Navbar = ({ fixNav }: {
    fixNav: boolean
}) => {
    const nav = useRef<HTMLElement>(null);
    const toggleButton = useRef<HTMLDivElement>(null);
    const linkMenu = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(fixNav && nav.current) {
            nav.current.style.position = "fixed";
            nav.current.style.backgroundColor = '#1c1c1c'
        } else if(nav.current) {
            nav.current.style.position = "absolute";
            nav.current.style.backgroundColor = 'transparent'
        }

        const toggleButtonHandler = () => {
            if(!nav.current || !linkMenu.current) return;
            
            const openedPx = `-${linkMenu.current?.offsetHeight}px`;
            const closedPx = '101%';
            const state = nav.current.getAttribute('data-open') == 'true';

            if(!state) {
                if(!fixNav) nav.current.style.backgroundColor = '#1c1c1c'
                nav.current.setAttribute('data-open', 'true');
            } else {
                if(!fixNav) nav.current.style.backgroundColor = 'transparent'
                nav.current.setAttribute('data-open', 'false')
            }

            
            if(linkMenu.current?.style.bottom == openedPx) {
                linkMenu.current!.style.bottom = closedPx;
            } else {
                linkMenu.current!.style.bottom = openedPx;
            }
        }

        const toggleButtonCurrent = toggleButton.current;
        toggleButtonCurrent?.addEventListener('click', toggleButtonHandler)

        return () => {
            toggleButtonCurrent?.removeEventListener('click', toggleButtonHandler)
        }
        
    }, [fixNav, nav])

    return (
        <nav ref={nav} className={`navbar absolute top-0 left-0 right-0 flex items-center justify-between text-[1em] transition-all duration-600 px-[5%] py-[1.6%] z-20 ${kanit.className}`}>
            <a href="#home" className="flex flex-column items-center w-1/2 md:w-1/6 z-20">
                <Image src="/imgs/logo-1x-compressed.gif" width={0} height={0} className="w-full max-w-[200px]" alt="Logo" priority={true} />
            </a>
            <div ref={toggleButton} className="inline-block md:hidden cursor-pointer z-20">
                <div className="bar1 w-[35px] h-[5px] bg-white rounded-[5px] my-[6px] transition-all duration-400"></div>
                <div className="bar2 w-[35px] h-[5px] bg-white rounded-[5px] my-[6px] transition-all duration-400"></div>
                <div className="bar3 w-[35px] h-[5px] bg-white rounded-[5px] my-[6px] transition-all duration-400"></div>
            </div>
            <div ref={linkMenu} className="linkMenu absolute left-0 right-0 bottom-[101%] bg-[#1c1c1c] md:bg-transparent shadow-2xl md:relative flex flex-col md:flex-row gap-[30px] p-[10%] md:p-0 z-10 transition-all duration-400">
                <a href="#sobre">SOBRE</a>
                <a href="#skills">SKILLS</a>
                {/* <a href="#">BLOG</a> */}
                {/* <Link to="/askmeanything">A.M.A</Link> */}
                <a href="#contato">CONTATO</a>
            </div>
        </nav>
    )
}

export default Navbar
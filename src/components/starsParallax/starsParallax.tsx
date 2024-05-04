import React, { useEffect, useRef } from "react";
import "./starsParallax.css"

const StarsParallax = () => {
    const starsParallax = useRef<HTMLDivElement>(null);

    const resizeHandler = () => {
        if(!starsParallax.current || !starsParallax.current.parentElement) return;

        // 1px extra fixes white space bug
        starsParallax.current.style.height = `${starsParallax.current.parentElement.offsetHeight + 1}px`;
    }

    useEffect(() => {
        resizeHandler();
        
        window.addEventListener('resize', resizeHandler);
        return () => {
            window.removeEventListener('resize', resizeHandler);
        }
    })

    return (
        <div ref={starsParallax} className="stars-parallax">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
        </div>
    )

}

export default StarsParallax;
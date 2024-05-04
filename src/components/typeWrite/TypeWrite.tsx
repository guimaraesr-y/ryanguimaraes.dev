import { useGSAP } from "@gsap/react"
import gsap, { random } from "gsap"
import TextPlugin from "gsap/TextPlugin"

const randomRange = (min: number, max: number)  => {
    return Math.floor(Math.random() * (max - min) ) + min;
}

const TypeWrite = ({ texts, className }: {
    texts: string[],
    className?: string
}) => {

    useGSAP(() => {
        gsap.registerPlugin(TextPlugin);

        const cursor = gsap.to('.cursor', {
            opacity: 0,
            ease: "power2.inOut",
            repeat: -1,
        })

        let textTl = gsap.timeline({
            repeat: -1,
        });

        texts.forEach(text => {
            let tl = gsap.timeline({
                repeat: 1,
                yoyo: true,
            });

            tl.to('.text', {
                duration: text.length * randomRange(0.25, 0.6),
                text: text,
            })
            textTl.add(tl)
        })
    })

    return (
        <div>
            <h1 className={"overflow-hidden " + className}>
                <span className="text"></span>
                <span className="cursor ">_</span>
            </h1>
        </div>
    )
}

const box = {

}

export default TypeWrite
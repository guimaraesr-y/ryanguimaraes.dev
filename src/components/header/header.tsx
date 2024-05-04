import TypeWrite from "../typeWrite/TypeWrite";
import Image from "next/image";

const Header = () => {
    const tecnologias = ["NODE.JS", "REACT.JS", "PHP", "JAVA"];
    
    return (
        <header id="home" className="text-center md:text-left h-[100vh] transition-[height] flex flex-col-reverse md:flex-row items-center gap-10 place-content-center md:justify-center px-5 font-bold">
            <div>
                <h1 className="text-[7vw] md:text-[4vw]">FULLSTACK DEVELOPER</h1>
                <h2 className="font-light text-[5vw] md:text-[2.75vw]">FRONT-END & BACK-END</h2>
                <h1 className="text-[5vw] md:text-[2vw]">
                    <TypeWrite texts={tecnologias} />
                </h1>
            </div>
            <Image 
                src="/imgs/hey.png" 
                width={0} 
                height={0} 
                sizes="100vw" 
                className="w-3/4 md:w-[35%]" 
                alt="Logo de saudação na tela principal" 
                priority={true}
                />
        </header>
    )
}

export default Header
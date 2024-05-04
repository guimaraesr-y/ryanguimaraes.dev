import Image from "next/image";

interface cardProps {
    img: string
    text: string
}

const Card = ({ img, text }: cardProps) => {
    return (
        <div className="flex flex-col bg-[rgba(255,255,255,0.05)] md:bg-transparent backdrop-blur-sm md:backdrop-blur-md py-10 px-5 text-center rounded-lg border-[2px] border-solid border-transparent" style={borderImageStyle}>
            <div className="h-full flex flex-col items-center justify-center">
                <Image src={img} alt="" width={0} height={0} className="w-full max-w-[25vh] max-h-[25vh]" />
            </div>
            <div>
                <p className="font-bold">{text}</p>
            </div>
        </div>
    )
}

const borderImageStyle = {
    borderImage: "linear-gradient(45deg, rgb(40 103 108) 30%, rgb(40 71 108)) 1"
}

export default Card;
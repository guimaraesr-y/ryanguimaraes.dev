import { ButtonHTMLAttributes } from "react"

interface buttonProps {
    children: React.ReactNode
    onClick?: () => void
    type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
}

const Button = ({ children, onClick, type }: buttonProps) => {
    return (
        <button 
            onClick={onClick} 
            type={type} 
            className="relative border border-solid bg-transparent text-white py-3 px-5 rounded-md overflow-hidden hover:text-black hover:before:left-0 before:absolute before:w-full before:h-full before:bg-white before:left-[100%] before:inset-0 before:z-[-1] before:transition-all before:duration-300 before:ease-in-out"
            >
            { children }
        </button>
    )
}

export default Button;
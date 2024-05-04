import FollowingMouse from "@/components/followingMouse/followingMouse";
import Image from "next/image";

interface LinksInterface {
    image: string;
    link: string;
    title: string;
}

const LinksPage = () => {

    const profilePictureSrc = "/imgs/profile-pic.webp";
    const links: LinksInterface[] = [
        {
            image: "/imgs/social/github.svg",
            link: "https://github.com/guimaraesr-y",
            title: "GitHub",
        },
        {
            image: "/imgs/social/instagram.svg",
            link: "https://www.instagram.com/guimaraesr.y/",
            title: "Instagram",
        },
        {
            image: "/imgs/social/linkedin.svg",
            link: "https://www.linkedin.com/in/guimaraesry/",
            title: "LinkedIn",
        },
        {
            image: "/r-logo.svg",
            link: "/",
            title: "Visite meu website :)",
        },
        {
            image: "/r-logo.svg",
            link: "/",
            title: "Visite meu website :)",
        },
        {
            image: "/r-logo.svg",
            link: "/",
            title: "Visite meu website :)",
        },
        {
            image: "/r-logo.svg",
            link: "/",
            title: "Visite meu website :)",
        },
    ]

    return (
        <div className="flex flex-col items-center py-16 gap-10 w-screen min-h-[100dvh] bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#1b2735] to-[#090a0f]">
            <FollowingMouse radius={50} color="rgba(255,255,255,.25)" />
            <div className="flex-none">
                <div className="relative w-fit m-auto rounded-full overflow-hidden before:absolute before:bg-[white] before:w-full before:h-full before:bg-gradient-to-b before:from-[#f09433] before:via-[#e6683c] before:via-[#dc2743] before:via-[#cc2366] before:to-[#bc1888] before:animate-spin">
                    <div className="relative border-[3px] border-solid border-[transparent] rounded-full z-10">
                        <Image 
                            src={profilePictureSrc} 
                            alt='Ryan Guimaraes' 
                            width={0} 
                            height={0} 
                            sizes='100vw' 
                            className="w-[35vw] h-[35vw] md:max-w-[15vw] md:max-h-[15vw]" 
                            priority={true} 
                            />
                    </div>
                </div>
                <div className="mt-2 text-center">
                    <h1 className="text-2xl font-bold">Ryan Guimarães</h1>
                    <small>Full-stack Developer</small>
                </div>
            </div>

            <div className="w-3/4 md:w-[40%] flex flex-col gap-5">
                { links.map((link, i) => (
                    <div className="w-full px-5 py-2 shadow-[0_20px_20px_-15px_rgba(0,0,0,0.5)] border-2 border-solid border-gray-500 rounded-md hover:scale-105 transition-all duration-300 cursor-pointer" key={i}>
                        <a className="flex items-center gap-5" href={link.link} target="_blank" rel="noreferrer">
                            <Image src={link.image} width={36} height={36} alt={link.title} />
                            <span>{link.title}</span>
                        </a>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default LinksPage;
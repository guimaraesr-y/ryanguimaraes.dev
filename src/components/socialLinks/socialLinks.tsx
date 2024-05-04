import Image from "next/image";

const SocialLinks = () => {
    return (
        <div className='flex gap-[20px] items-center justify-center w-full py-5'>
            <a href='https://github.com/guimaraesr-y' target='_blank' rel='noreferrer'>
                <Image src='/imgs/social/github.svg' alt='Github' width={36} height={36} />
            </a>
            <a href='https://www.instagram.com/guimaraesr.y/' target='_blank' rel='noreferrer'>
                <Image src='/imgs/social/instagram.svg' alt='Instagram' width={36} height={36} />
            </a>
            <a href='https://www.linkedin.com/in/guimaraesry/' target='_blank' rel='noreferrer'>
                <Image src='/imgs/social/linkedin.svg' alt='Linkedin' width={36} height={36} />
            </a>
        </div>
    )
}

export default SocialLinks;
import React from 'react';
import Image from 'next/image';
import { Kanit } from 'next/font/google';

import ContactForm from '@/components/ui/home/contactForm';
import SkillSection from '@/components/ui/home/skills';
import HomeHero from '@/components/ui/home/HomeHero';
import SocialLinks from '@/components/ui/home/socialLinks';
import StarsParallax from '@/components/starsParallax/starsParallax';

const nameFont = Kanit({ weight: '400', subsets: ['latin'] });

const Home = () => {

    return (
        <>
            <HomeHero />
            
            <section id='sobre' className='bg-[#353535] px-[8%] pt-[7%] md:pt-[3%] pb-[12%] md:pb-[6%]'>
                <div className='flex flex-col items-center text-justify'>
                    <div className={`w-full ${nameFont.className}`}>
                        <div className='flex items-center justify-between mb-[3%] md:mb-[-1%]'>
                            <p className='text-[12vw] leading-[9vw] text-stroke text-transparent'>RYAN</p>
                            <p className='text-[3.5vw]'>FULL-STACK DEVELOPER</p>
                        </div>
                        <h1 className='font-bold text-[16vw] leading-[14vw] text-center p-0'>GUIMARÃES</h1>
                    </div>

                    <SocialLinks />

                    <div className='flex flex-col md:flex-row items-center gap-[10%]'>
                        <Image src='/imgs/ryan.webp' alt='Desenvolvedor e dono do website, Ryan' width={0} height={0} sizes='100vw' className='w-full md:w-[30%] pb-5 md:pb-0 rounded-full' />
                        <p className='text-[4vw] md:text-[1.5vw]'>
                            Programador, músico e aprendiz.<br/>
                            Focado e comprometido, desenvolvo aplicações web, como websites e APIs.
                            Minha especialidade atual Javascript e Typescript, utilizando React.js
                            e Next.js em boa parte dos meus projetos, porém Java, PHP e Python também 
                            são bem vindo. Pessoalmente acredito que um negócio precisa de uma identidade 
                            digital para se conectar com o mundo digital. Seja bem vindo ao meu mundo. 🌎<br/><br/>
                            <code>console.log(&quot;hello, world!&quot;);</code>
                        </p>
                    </div>
                </div>
            </section>

            <SkillSection></SkillSection>

            <section id='contato'>
                <StarsParallax />
                <div className='py-[6vw]'>
                    <ContactForm />
                </div>
            </section>
        </>
    )
}

export default Home;
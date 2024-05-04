'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/header/header';
import Navbar from '@/components/navbar/navbar';
import StarsParallax from '@/components/starsParallax/starsParallax';

import Image from 'next/image';
import SocialLinks from '@/components/socialLinks/socialLinks';
import Card from '@/components/card/card';
import ContactForm from '@/components/contactForm/contactForm';

const Home = () => {
    const [fixNavbar, setFixNavbar] = useState(false);

    const tecnologiasData = [
        { src: '/imgs/technologies/python.svg', name: 'Python' },
        { src: '/imgs/technologies/nodejs.svg', name: 'Node' },
        { src: '/imgs/technologies/php.svg', name: 'PHP' },
        { src: '/imgs/technologies/java.svg', name: 'Java' },
        { src: '/imgs/technologies/mysql.svg', name: 'SQL' },
        { src: '/imgs/technologies/react.svg', name: 'React' },
        { src: '/imgs/technologies/spring.svg', name: 'Spring' },
        { src: '/imgs/technologies/next-js.svg', name: 'Next.JS' },
    ]

    const handleScroll = () => {
        const firstSection = document.querySelector('section');

        if(window.scrollY > firstSection!.getBoundingClientRect().top) {
            setFixNavbar(true);
        } else {
            setFixNavbar(false);
        }

        if(window.scrollY > 1500) {
            let imgs = document.querySelectorAll(".skills-item");
            imgs.forEach(async(img, i) => {
                setTimeout(() => {
                    img.classList.remove("opacity-0")
                }, (i * 400))
            });
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    });

    return (
        <>
            <Navbar fixNav={fixNavbar} />
            <div>
                <StarsParallax />
                <Header />
            </div>
            
            <section id='sobre' className='bg-[#353535] px-[8%] pt-[7%] md:pt-[3%] pb-[12%] md:pb-[6%]'>
                <div className='flex flex-col items-center text-justify'>
                    <div className='w-full'>
                        <div className='flex items-center justify-between mb-[-10%] md:mb-[-12%]'>
                            <p className='text-[12vw] text-stroke text-transparent'>RYAN</p>
                            <p className='text-[3.5vw]'>FULL-STACK DEVELOPER</p>
                        </div>
                        <h1 className='font-bold text-[15vw] md:text-[14.5vw] text-center p-0'>GUIMARÃES</h1>
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

            <section id='skills' className='px-[8%] py-[12%] md:py-[6%] bg-[url(/imgs/bg-waves.jpg)] bg-cover bg-center'>
                <div className='skills-panel animate__animated animate__fadeIn animate__delay-1s'>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:max-w-[70vw] m-auto py-5'>
                        { tecnologiasData.map(skill => ( <Card key={skill.name} img={skill.src} text={skill.name} /> )) }
                    </div>
                </div>
            </section>

            <section id='contato'>
                <StarsParallax />
                <div className='py-[6vw]'>
                    <ContactForm />
                </div>
            </section>
        </>
    )
}

export default Home
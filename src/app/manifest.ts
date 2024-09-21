import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Ryan Guimarães - Full-Stack Developer',
        short_name: 'Ryan Guimarães Developer',
        description: 'Este é meu site pessoal na grande rede. Eu sou Ryan de Almeida Guimarães e sou um desenvolvedor full-stack. Aqui compartilho meus projetos, informações e muitas outras coisas.',
        start_url: '/',
        display: 'standalone',
        background_color: "#2b2c39",
        theme_color: "#2b2c39",
        icons: [
            {
                src: "/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png"
            },
            {
                src: "/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png"
            },
        ],
    }
}

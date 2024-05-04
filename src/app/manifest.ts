import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Ryan Guimarães - Full-Stack Developer',
        short_name: 'Ryan Guimarães Developer',
        description: '',
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
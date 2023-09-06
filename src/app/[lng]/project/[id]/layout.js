import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Project About',
}

export default function ProjectLayout({ children }) {
    return (
    <html>
        <body className={`${inter.className} bg-[#294180]`}>
            {children}
        </body>
    </html>
    )
}
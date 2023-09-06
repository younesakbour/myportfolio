import '../globals.css'
import { Inter } from 'next/font/google'
import Layout from './components/Layout'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Welcome to my Portfolio',
  description: "I'm Younes Akbour, a web developer, and this is my portfolio.",
}

export default function RootLayout({ children, params }) {
  return (
    <Layout params={params.lng} inter={inter.className} children={children} />
  )
}
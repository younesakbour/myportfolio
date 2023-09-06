import {AiOutlineMenu} from 'react-icons/ai'
import {BiSolidUpArrow} from 'react-icons/bi'
import { useState } from 'react';
import Link from 'next/link';

export default function Header(props) {
    const [nav, setNav] = useState(false);
    
    const handleClick = () => {
        setNav(!nav);
    }

    return (
        <div id='header' className='xl:mx-40 md:mx-24 z-50 absolute duration-300 ease-in-out'>
            {/* Desktop */}
            <div className="hidden md:flex duration-300 ease-in-out fixed left-0 w-full justify-around uppercase py-12 font-ubuntu font-medium tracking-wide text-[#51B6FF]">
                <ul className="flex navdesktop space-x-6">
                    <li><a href="#home" className='active duration-100 ease-in-out hover:border-l-4 border-[#067cd0] px-2 hover:text-[#067cd0]'>{props.lng.header.home}</a></li>
                    <li><a href="#about" className='duration-100 ease-in-out hover:border-l-4 border-[#067cd0] px-2 hover:text-[#067cd0]'>{props.lng.header.about}</a></li>
                    <li><a href="#projects" className='duration-100 ease-in-out hover:border-l-4 border-[#067cd0] px-2 hover:text-[#067cd0]'>{props.lng.header.projects}</a></li>
                    <li><a href="#contact" className='duration-100 ease-in-out hover:border-l-4 border-[#067cd0] px-2 hover:text-[#067cd0]'>{props.lng.header.contact}</a></li>
                </ul>
                <ul className="flex self-end items-center space-x-4">
                    <li><Link href="/fr" className={props.lng.lang == "fr" ? 'border-b-4 border-[#129BFF] py-1 text-[#129BFF]' : "hover:text-[#129BFF]"}>fr</Link></li>
                    <li><Link href="/en" className={props.lng.lang == "en" ? 'border-b-4 border-[#129BFF] py-1 text-[#129BFF]' : "hover:text-[#129BFF]"}>en</Link></li>
                </ul>
            </div>
            {/* Mobile */}
            <div className='md:hidden w-full px-6 flex justify-between fixed py-6 uppercase text-[#51B6FF]'>
                {!nav ? <div onClick={handleClick}><AiOutlineMenu size={20} /></div> : ''}
                <div className={nav ? 'md:hidden text-white fixed h-fit w-full bg-[#129BFF] opacity-90 top-0 left-0 ease-in-out duration-500 z-50' : 'md:hidden fixed h-fit w-[80%] left-0 top-[-100%] ease-in-out duration-500'}>
                        <ul className="w-full mt-20 navmob flex flex-col justify-center items-center space-y-6">
                            <li className='activemb'><a href="#home" className='uppercase font-roboto font-bold tracking-widest text-xl'>{props.lng.header.home}</a></li>
                            <li><a href="#about" className='uppercase font-roboto font-bold tracking-widest text-xl'>{props.lng.header.about}</a></li>
                            <li><a href="#projects" className='uppercase font-roboto font-bold tracking-widest text-xl'>{props.lng.header.projects}</a></li>
                            <li><a href="#contact" className='uppercase font-roboto font-bold tracking-widest text-xl'>{props.lng.header.contact}</a></li>
                        </ul>
                        <div className='w-full pt-6 pb-3 px-4 flex justify-end' onClick={handleClick}><BiSolidUpArrow size={36}/></div>
                </div>
                <ul className={!nav ? "flex self-end items-center space-x-4" : "hidden"}>
                    <li><Link href="/fr" className={props.lng.lang == "fr" ? 'border-b-4 border-[#129BFF] py-1 text-[#129BFF]' : ""}>fr</Link></li>
                    <li><Link href="/en" className={props.lng.lang == "en" ? 'border-b-4 border-[#129BFF] py-1 text-[#129BFF]' : ""}>en</Link></li>
                </ul>
            </div>
        </div>
    )
}
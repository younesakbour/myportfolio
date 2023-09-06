"use client"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import {data_en, data_fr} from '../../../projects'
import { usePathname } from "next/navigation"
import Link from 'next/link';
import {VscArrowSmallLeft} from 'react-icons/vsc'


export default function ProjectAbout() {
    const pathname = usePathname();
    let project = "";
    let home = "";
    let path = "";

    if (data_en.find(e => `/en/project/${e.id}` === pathname)) {
        project = data_en.find(e => `/en/project/${e.id}` === pathname);
        home = "Home";
        path = "/";
    } else {
        project = data_fr.find(e => `/fr/project/${e.id}` === pathname);
        home = "Accuiel";
        path = "/fr";
    }

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='xl:mx-40 md:mx-24 mx-6 my-6 mb-16 text-white'>
            <div>
                <Link className='flex font-josefin font-bold items-center tracking-widest uppercase duration-200 ease-in-out text-white hover:text-sky-200' href={path}><VscArrowSmallLeft size={66} />{home}</Link>
            </div>
            <div className='flex flex-col items-center space-y-6'>
                <div className='flex md:space-x-6 space-x-2 md:w-4/5'>
                    <div className='self-end'><img src={project.webDesktop} alt="" /></div>
                    <div><img src={project.webMobile} alt="" /></div>
                </div>
                <div className='md:w-4/5 w-full flex justify-between items-center md:px-4'>
                    <p className='md:text-3xl text-xl uppercase font-josefin font-bold tracking-widest'>{project.name}</p>
                    <a className='uppercase md:rounded-lg rounded-md duration-300 ease-in-out tracking-[0.2em] hover:tracking-[0.3em] font-bold text-sm md:px-12 px-4 py-2 bg-black hover:bg-white hover:text-black' href={project.link} target="_blank" rel="noopener noreferrer">Visit</a>
                </div>
                <div className='md:w-4/5 space-y-8'>
                    <p className='md:text-lg font-josefin tracking-wide mb-16'>{project.about}</p>
                    {
                    project.keyFeatures !== ""
                    ? Object.keys(project.keyFeatures).map((e, index) =>
                    <div>
                        <h4 className='md:text-xl animate-pulse rounded-t-lg bg-white text-black py-2 px-4 font-josefin font-bold tracking-wide'>{e}:</h4>
                        <p className='rounded-b-lg bg-black py-4 w-fit px-4 md:px-8 font-kalam tracking-wide'>{Object.values(project.keyFeatures)[index]}</p>
                    </div> )
                    : ""
                    }
                </div>
                {project.moreAbout !== ""
                ? <div></div>
                : ""}
            </div>
        </div>
    )
}
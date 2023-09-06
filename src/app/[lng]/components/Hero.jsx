'use client';
import Typed from 'react-typed';
import SocialMedia from './SocialMedia';

export default function Hero(props) {
    const webDeveloper = props.lng.introduce_3;

    return (
        <div id='home' className='xl:mx-40 md:mx-24 mb-28 md:mb-0 relative'>
            {/* Desktop Hero */}
            <div className="w-full pt-10 hidden md:flex justify-between items-center h-screen relative z-20">
                <div className="font-ubuntu font-medium uppercase space-y-4 flex flex-col">
                    <p className="md:text-2xl">{props.lng.introduce_1}</p>
                    <p className="xl:text-5xl md:text-3xl pl-6">Younes Akbour</p>
                    <div className='flex items-center md:text-2xl self-end'>
                        <p>{props.lng.introduce_2}</p>
                        <Typed
                            className='uppercase pl-2 text-[#0082E0]'
                            strings={[webDeveloper]}
                            typeSpeed={80}
                        />
                    </div>
                    <a className='text-white hover:bg-[#1292ee] text-sm font-roboto font-bold tracking-[0.3em] duration-150 ease-in-out hover:tracking-[0.6em] uppercase bg-[#0082E0] px-10 py-2 self-end' href="#about">{props.lng.more_button}</a>
                </div>
                <div className='relative mx-16'>
                    <div className='relative xl:w-[280px] md:w-[240px] w-[220px] xl:h-[300px] h-[260px] border-8 border-[#51B6FF]'>
                        <img className='absolute top-[-15%] right-[10%] xl:w-[280px] md:w-[240px] w-[220px] xl:h-[300px] h-[260px]' src="/static/images/mypic.jpg" alt="my image" />
                    </div>
                    <ul className='absolute h-full md:right-[-25%] xl:right-[-20%] top-0 flex flex-col item justify-center space-y-4'>
                        <SocialMedia size={16} />
                    </ul>
                </div>
            </div>
            <div className='hidden first-block md:block z-10 absolute top-[26%] right-[20%] w-1/3 xl:h-36 h-24 bg-[#1870B0]'>
            </div>
            <div className='hidden second-block md:block absolute top-[43%] left-[-20%] w-2/3 xl:h-36 h-24 bg-[#ACD0EA]'></div>
            {/* Mobile Hero */}
            <div className='md:hidden flex flex-col justify-center items-center pt-20 space-y-10 z-40 relative'>
                <div className='font-ubuntu font-medium uppercase space-y-4 flex flex-col'>
                    <p className="text-2xl">{props.lng.introduce_1}</p>
                    <p className="text-4xl pl-3">Younes Akbour</p>
                    <div className='flex items-center text-2xl pl-8 self-end'>
                        <p>{props.lng.introduce_2}</p>
                        <Typed
                            className='uppercase pl-2 text-[#0082E0]'
                            strings={[webDeveloper]}
                            typeSpeed={80}
                        />
                    </div>
                    <button className='self-end text-white hover:animate-pulse font-roboto font-bold tracking-[0.3em] duration-150 ease-in-out hover:tracking-[0.6em] uppercase bg-[#0082E0] px-10 py-2'><a href="#about">{props.lng.more_button}</a></button>
                </div>
                <div>
                    <div className='relative w-[240px] h-[260px] border-8 border-[#51B6FF]'>
                        <img className='absolute top-6 left-6 w-[240px] h-[260px]' src="/static/images/mypic.jpg" alt="my image" />
                        <ul className='absolute w-full bottom-[-40%] flex justify-center space-x-4'>
                            <SocialMedia size={20} />
                        </ul>
                    </div>
                </div>
            </div>
            <div className='md:hidden animate-ping-slow absolute z-0 top-[22%] left-[-5%] w-1/2 h-24 bg-[#ACD0EA]'></div>
            <div className='md:hidden block-mb absolute top-[80%] right-0 w-1/2 h-24 bg-[#1870B0]'></div>
        </div>
    )
}
import {BiSolidDownArrow,BiLogoCss3,BiLogoHtml5,BiLogoJavascript,BiLogoPhp,BiLogoTailwindCss,BiLogoReact} from 'react-icons/bi'
import {TbBrandNextjs} from 'react-icons/tb'
import {LiaLaravel} from 'react-icons/lia'
import {PiArrowBendRightDownBold} from 'react-icons/pi'

export default function About(props) {
    return (
        <div id='about' className="md:space-y-6 space-y-10 pt-20 mb-28 md:mb-0 overflow-hidden">
            <div className="xl:mx-40 md:mx-24 mx-6 flex justify-end items-center text-[#0082E0] space-x-2">
                <h3 className="font-ubuntu font-bold uppercase text-2xl">{props.lng.aboutme}</h3>
                <div><BiSolidDownArrow size={28} /></div>
            </div>
            <div data-aos="zoom-out-up" data-aos-duration='1500' className='xl:mx-40 md:mx-24 mx-6 py-4 space-y-6'>
                <h3 className='font-josefin font-bold tracking-[0.3em] text-[#93bad5] text-lg uppercase flex space-x-2 items-center'><p>{props.lng.excel}</p><div><PiArrowBendRightDownBold size={24} /></div></h3>
                <ul className='w-full grid grid-cols-4 md:flex justify-around text-[#1870B0] opacity-25'>
                    <li><BiLogoHtml5 size={(58)} /></li>
                    <li><BiLogoCss3 size={(58)} /></li>
                    <li><BiLogoJavascript size={(58)} /></li>
                    <li><BiLogoPhp size={(58)} /></li>
                    <li><BiLogoTailwindCss size={(58)} /></li>
                    <li><BiLogoReact size={(58)} /></li>
                    <li><TbBrandNextjs size={(58)} /></li>
                    <li><LiaLaravel size={(58)} /></li>
                </ul>
            </div>
            <div>
                <div data-aos="fade-right" data-aos-duration='1500' className='bg-[#ACD0EA] w-[90%] text-[#023A63] md:pr-16 xl:pl-40 md:pl-24 p-4 font-josefin tracking-wide'>
                    <p>{props.lng.section_1}</p>
                </div>
                <div data-aos="fade-left" data-aos-duration='1500' className='xl:ml-40 md:ml-24 bg-[#1870B0] xl:pr-40 md:pr-24 text-white p-4 font-josefin tracking-wide'>
                    <p>{props.lng.section_2}</p>
                </div>
                <div data-aos="fade-right" data-aos-duration='1500' className='bg-[#ACD0EA] md:w-[60%] w-[80%] text-[#023A63] md:pr-16 xl:pl-40 md:pl-24 p-4 font-josefin tracking-wide'>
                    <p>{props.lng.section_3}</p>
                </div>
            </div>
            <div className='xl:mx-40 md:mx-24 mx-6 flex justify-end'>
                <div className='relative bg-[#1870B0] xl:w-[24%] sm:w-[36%] w-[66%] h-[44px]'>
                    <a className='absolute text-center uppercase w-full border-4 duration-300 ease-in-out hover:bg-[#129BFF] top-[-20%] hover:top-0 hover:left-0 left-[-5%] text-sm border-[#129BFF] p-2 font-ubuntu font-bold tracking-wide text-white' href={props.lng.download} download="cv">{props.lng.resume}</a>
                </div>
            </div>
        </div>
    )
}
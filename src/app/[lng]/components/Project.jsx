import Link from 'next/link';

export default function Project(props) {
    return(
        <div data-aos="fade-right" data-aos-duration='1500' className="my-16 md:flex flex-row">
            <div className="md:w-1/2 flex">
                <div className="w-5/6 md:mr-2 mr-1 h-full self-end">
                    <div>
                        <img src={props.inf.webDesktop} alt="Image of Website Project" />
                        <div className="font-mono font-bold tracking-wider md:text-base text-xs uppercase">
                            <ul className="w-full flex space-x-2 md:rounded-b-xl bg-[#023A63] p-2 text-[#023A63]">
                                {props.inf.tools.map((e,index) => <li key={index} className="bg-[#ACD0EA] rounded-lg md:px-4 px-2">{e}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-[28%] self-end">
                    <img src={props.inf.webMobile} alt="Image of Website Project" />
                </div>
            </div>
            <div className='md:w-1/2 flex flex-col justify-center md:mt-0 mt-2'>
                <h4 className='font-kalam font-bold text-start text-[#72a0c1] xl:text-3xl text-lg uppercase tracking-[0.2em] pt-2 md:py-2 bg-sky-900 md:bg-transparent md:px-6 px-4'>{props.inf.name}</h4>
                <div className='bg-[#ACD0EA] text-[#023A63] xl:p-6 p-4 tracking-wider md:rounded-tr-2xl rounded-bl-2xl md:rounded-bl-none font-josefin font-medium xl:text-base text-sm'><p>{props.inf.about.substr(0, 200)}...</p></div>
                <div className='self-end py-1'>
                    <Link className='bg-[#72a0c1] duration-300 ease-in-out hover:bg-black rounded-b-2xl text-[#023A63] hover:text-white px-8 py-2 xl:text-lg uppercase font-ubuntu font-bold tracking-wider' href={props.inf.lang == "en" ? `en/project/${props.inf.id}` : `fr/project/${props.inf.id}`}>{props.inf.lang == "en" ? "More" : "Plus"}</Link>
                </div>
            </div>
        </div>
    )
}
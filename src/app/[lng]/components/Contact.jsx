import {BiSolidDownArrow} from 'react-icons/bi'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SocialMedia from './SocialMedia';

export default function Contact(props) {
    const form = useRef();
    const [send, setSend] = useState("");
    const styleInp = "py-3 font-josefin font-medium text-[#0082E0] tracking-[0.1em] outline-none border-b-4 focus:placeholder:opacity-0 placeholder:font-ubuntu placeholder:text-[#0083e0] placeholder:opacity-50 placeholder:tracking-[0.3em] placeholder:font-bold border-[#0082E0] bg-[#ACD0EA] bg-opacity-25 px-4 md:px-6"
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_t7kzdua', 'template_ir79pzp', form.current, 'Vnq8FCVkl9oqsA9Xt')
            .then((result) => {
                console.log('SUCCESS!', result.text);
                setSend("success")
        }, (error) => {
                console.log('FAILED...', error.text);
                setSend("failed")
        });
    };
    
    return(
        <div id='contact' className="md:space-y-20 space-y-10 pt-20 mb-20">
            <div className="xl:mx-40 md:mx-24 mx-6 flex justify-end items-center text-[#0082E0] space-x-2">
                <h3 className="font-ubuntu font-bold uppercase text-2xl">Contact</h3>
                <div><BiSolidDownArrow size={28} /></div>
            </div>
            <div className='xl:mx-40 md:mx-24 mx-6 md:flex justify-end'>
                <form className='space-y-4 flex flex-col md:w-4/5'  ref={form} onSubmit={sendEmail}>
                    {send == "success"
                    ? ""
                    :<>
                        <h4 className='font-ubuntu text-xl tracking-widest font-semibold uppercase text-[#0082E0]'>{props.lng.contactme}</h4>
                        <div className='md:w-full md:space-x-4 md:space-y-0 space-y-4 md:flex'>
                            <input className={`md:w-1/2 w-full ${styleInp}`} type="text" name="user_name" placeholder={props.lng.name} required/>
                            <input className={`md:w-1/2 w-full ${styleInp}`} type="email" name="user_email" placeholder="EMAIL" required/>
                        </div>
                        <input className={`w-full ${styleInp}`} type="text" name="subject" placeholder={props.lng.subject} required/><br />
                        <textarea name='message' className={`w-full resize-none ${styleInp}`} cols="30" rows="8" placeholder='MESSAGE' required></textarea>
                        <input type="submit" className='text-white cursor-pointer duration-200 ease-in-out hover:tracking-[0.1em] self-end font-ubuntu font-bold text-sm tracking-[0.3em] px-6 py-2 bg-[#0082E0] hover:bg-[#51b6fe]' value={props.lng.send} />
                    </>}
                        {send == "success"
                    ? <div className='py-2 h-1/2 flex justify-center items-center'>
                            <p className='text-[#0082E0] md:text-base text-sm font-ubuntu font-bold tracking-wide'>{props.lng.send_success}</p>
                    </div>
                    : send == "failed"
                    ? <div className='py-2 flex justify-end'>
                            <p className='text-red-600 md:text-base text-sm font-ubuntu font-bold tracking-wide'>{props.lng.send_failed}</p>
                        </div>
                        : ""}
                </form>
                <div className='md:w-1/5 hidden md:block'>
                    <ul className='h-full flex flex-col justify-center items-center space-y-6'>
                        <SocialMedia size={20} />
                    </ul>
                </div>
            </div>
        </div>
    )
}
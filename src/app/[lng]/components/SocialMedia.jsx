import {AiFillInstagram,AiFillFacebook,AiFillGithub,AiFillLinkedin,AiFillMail} from 'react-icons/ai';

export default function SocialMedia(props) {
    return(
        <>
            <li className='bg-[#51B6FF] cursor-pointer duration-200 ease-in-out hover:animate-spin-slow hover:scale-125 hover:bg-[#0082E0] w-fit p-2 rounded-full'><a href="https://www.instagram.com/younes_akb/"><AiFillInstagram size={props.size} color='white' /></a></li>
            <li className='bg-[#51B6FF] cursor-pointer duration-200 ease-in-out hover:animate-spin-slow hover:scale-125 hover:bg-[#0082E0] w-fit p-2 rounded-full'><a href="https://www.facebook.com/youn.akbour"><AiFillFacebook size={props.size} color='white' /></a></li>
            <li className='bg-[#51B6FF] cursor-pointer duration-200 ease-in-out hover:animate-spin-slow hover:scale-125 hover:bg-[#0082E0] w-fit p-2 rounded-full'><a href="https://github.com/younesakbour"><AiFillGithub size={props.size} color='white' /></a></li>
            <li className='bg-[#51B6FF] cursor-pointer duration-200 ease-in-out hover:animate-spin-slow hover:scale-125 hover:bg-[#0082E0] w-fit p-2 rounded-full'><a href="https://www.linkedin.com/in/younesakbour"><AiFillLinkedin size={props.size} color='white' /></a></li>
            <li className='bg-[#51B6FF] cursor-pointer duration-200 ease-in-out hover:animate-spin-slow hover:scale-125 hover:bg-[#0082E0] w-fit p-2 rounded-full'><a href="mailto:younesakbour6@gmail.com"><AiFillMail size={props.size} color='white' /></a></li>
        </>
    )
}
export default function Footer(props) {
    return (
        <div className="w-full bg-[rgb(0,130,224)] py-10 flex items-center">
            <div className="md:w-1/6 w-1/6 h-8 bg-[#ACD0EA]"></div>
            <div className="md:w-4/6 w-4/6 px-6"><p className="text-white text-center font-roboto font-semibold md:text-lg text-sm tracking-widest">&copy; 2023 Younes Akbour. {props.lng}.</p></div>
            <div className="md:w-1/6 w-1/6 h-8 bg-[#ACD0EA]"></div>
        </div>
    )
}
import { AiOutlineInstagram, AiFillFacebook, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";

export default function NavBar() {
    return(
        <nav className="flex justify-around bg-primary/25">
            <ul className="flex gap-4">
                <li className="border-r-[1px] pr-4 my-4 text-white cursor-pointer">Home</li>
                <li className="border-r-[1px] pr-4 my-4 text-white cursor-pointer">About</li>
                <li className="border-r-[1px] pr-4 my-4 text-white cursor-pointer">Project</li>
                <li className="border-r-[1px] pr-4 my-4 text-white cursor-pointer">Contact</li>
            </ul>
            <div className="flex items-center gap-5">
                <AiOutlineInstagram className="text-[24px] text-white cursor-pointer"/>
                <AiFillFacebook className="text-[24px] text-white cursor-pointer"/>
                <AiFillTwitterCircle className="text-[24px] text-white cursor-pointer"/>
                <AiFillLinkedin className="text-[24px] text-white cursor-pointer"/>
            </div>
            <div className="flex justify-center">
                <button className="bg-white px-4">Request Quote</button>
            </div>
        </nav>
    )
}
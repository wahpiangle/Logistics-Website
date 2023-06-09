import { companyLogo, iconMailBlue, iconPhoneBlue } from "../assets"
import { AiFillLinkedin, AiFillTwitterCircle, AiFillFacebook } from "react-icons/ai"

export default function Footer(){
    return(
        <div className="bg-primary py-4">
            <div className="flex justify-center py-8">
                <img src={companyLogo}/>
            </div>
            <div className="flex justify-around px-8 md:px-56 gap-16 flex-col md:flex-row">
                <div>
                    <p className="text-white text-[14px]">Leverage agile frameworks to provide a robust synopsis for strategy  collaborative thinking to further the overall value proposition.</p>
                    <div className="flex mt-6 items-center">
                        <img src={iconMailBlue} className="md:w-auto w-12" />
                        <p className="text-white text-[14px] ml-3">Email<br/>contact@logistics.com</p>
                    </div>
                    <div className="flex mt-6 items-center">
                        <img src={iconPhoneBlue}  className="md:w-auto w-12"/>
                        <p className="text-white text-[14px] ml-3">Call Us<br/>(00) 112 365 489</p>
                    </div>
                </div>
                <div>
                    <form className="flex flex-col">
                        <input type="email" placeholder="Your Email*" className="focus:outline-none bg-transparent appearance-none border-[0.5px] text-white border-[#999999] py-3 self-center px-2 md:px-4 w-[180px] md:w-[280px]"/>
                        <div className="flex items-center gap-4 justify-between md:flex-row flex-col">
                            <button type="submit" className="yellow-gradient mt-5 py-3 px-6">Send Now</button>
                            <div className="flex gap-4 mt-5">
                                <AiFillLinkedin className="text-white text-2xl "/>
                                <AiFillTwitterCircle className="text-white text-2xl"/>
                                <AiFillFacebook className="text-white text-2xl"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
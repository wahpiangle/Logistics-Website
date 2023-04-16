import NavBar from "./NavBar";
import { contact, iconMailBlue, iconClockBlue, iconPhoneBlue, company1, company2, company3, company4 } from "../assets";
import { styles } from "../styles";

export default function Contact() {
    return (
        <>
            <div className="bg-cover bg-no-repeat" style={{ backgroundImage: `url(${contact})` }}>
                <NavBar />
                <div className="flex flex-col px-28 max-w-3xl py-28">
                    <div className={`${styles.heroSubText} max-w-fit`}>Contact</div>
                    <h1 className={`${styles.heroHeadText}`}>Contact Us</h1>
                </div>
            </div>
            <div className="bg-primary flex flex-col justify-center items-center px-6 lg:px-32 py-20 my-4 lg:my-12 mx-8 lg:mx-48">
                <div className="bg-[#e8e8e811] text-white border-l-2 border-primaryyellow px-2 text-[12px] max-w-fit">Contact</div>
                <h1 className="xl:text-[30px] text-[20px] text-white font-semibold">Get in touch with us</h1>
                <p className="text-white text-center">Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value.</p>
                <div className="flex md:gap-20 gap-8 flex-col md:flex-row text-white mt-12">
                    <div className="flex justify-center items-center flex-col self-start">
                        <img src={iconMailBlue} className="w-12 self-center"/>
                        <p className="mt-2">contact@logistics.com</p>
                    </div>
                    <div className="flex justify-center items-center flex-col md:self-start">
                        <img src={iconPhoneBlue} className="w-12 self-center"/>
                        <p className="mt-2 whitespace-nowrap">(00) 112 365 489</p>
                    </div>
                    <div className="flex justify-center items-center flex-col text-center self-start">
                        <img src={iconClockBlue} className="w-12 self-center"/>
                        <p className="mt-2 whitespace-nowrap" >Mon - Sat 9.00 - 18.00 <br/>Sunday Closed</p>
                    </div>
                </div>
                <form className="mt-6 w-full flex flex-col">
                    <div className="mt-6 grid grid-cols-2 gap-2 sm:gap-8">
                        <input type="text" placeholder="Name*" className="bg-transparent border-[#E0E0E0] border-[1px] p-4 text-white outline-none"/>
                        <input type="text" placeholder="Email*" className="bg-transparent border-[#E0E0E0] border-[1px] p-4 text-white outline-none"/>
                    </div>
                    <div className="grid grid-cols-2 gap-2 sm:gap-8">
                        <input type="text" placeholder="Phone Number*" className="bg-transparent border-[#E0E0E0] border-[1px] p-4 text-white outline-none w-full mt-6"/>
                        <input type="text" placeholder="City*" className="bg-transparent border-[#E0E0E0] border-[1px] p-4 text-white outline-none w-full mt-6"/>
                    </div>
                    <textarea placeholder="Message*" className="bg-transparent border-[#E0E0E0] border-[1px] p-4 text-white outline-none w-full mt-6 h-40"></textarea>
                    <button className="yellow-gradient px-8 py-4 mt-6 w-fit self-center">Send Message</button>
                </form>
            </div>
            <div className="flex justify-center items-center py-24 md:flex-row flex-col">
                <img src={company1} className="border-[1px] border-[#4E5683] cursor-pointer"/>
                <img src={company2} className="border-[1px] border-[#4E5683] cursor-pointer"/>
                <img src={company3} className="border-[1px] border-[#4E5683] cursor-pointer"/>
                <img src={company4} className="border-[1px] border-[#4E5683] cursor-pointer"/>
            </div>
        </>
    )
}
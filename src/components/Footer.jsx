import { companyLogo, iconMailBlue, iconPhoneBlue } from "../assets"

export default function Footer(){
    return(
        <div className="bg-primary py-4">
            <div className="flex justify-center py-8">
                <img src={companyLogo}/>
            </div>
            <div className="flex justify-around px-56 gap-16">
                <div>
                    <p className="text-white">Leverage agile frameworks to provide a robust synopsis for strategy  collaborative thinking to further the overall value proposition.</p>
                    <div className="flex mt-6 items-center">
                        <img src={iconMailBlue} />
                        <p className="text-white ml-3">Email<br/>contact@logistics.com</p>
                    </div>
                    <div className="flex mt-6 items-center">
                        <img src={iconPhoneBlue} />
                        <p className="text-white ml-3">Call Us<br/>(00) 112 365 489</p>
                    </div>
                </div>
                <div>
                    <form>
                        <input type="email" placeholder="Your Email*" className="bg-transparent appearance-none border-[0.5px] text-white border-[#999999] py-4 px-6"/>
                    </form>
                </div>
            </div>
        </div>
    )
}
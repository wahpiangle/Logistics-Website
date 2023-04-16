import { shipServices } from "../assets";
import NavBar from "./NavBar";
import { styles } from "../styles";
import { pricing } from "./constants/pricing";

export default function Pricing() {
    return(
        <>
            <div className="bg-cover bg-no-repeat" style={{ backgroundImage: `url(${shipServices})` }}>
                <NavBar/>
                <div className="flex flex-col p-10 max-w-3xl sm:p-28">
                    <div className={`${styles.heroSubText} max-w-fit mb-2`}>Pricing</div>
                    <h1 className={`${styles.heroHeadText} mb-2`}>Our Best Price</h1>
                </div>
            </div>
            <div>
                <div className="flex items-center justify-center p-10 lg:p-24 flex-col">
                    <div className="bg-[#00000012] text-black border-l-2 border-primaryyellow px-2 text-[12px] max-w-fit">Pricing</div>
                    <h1 className="xl:text-[30px] text-[20px] font-semibold">Our Best Pricing</h1>
                    <div className="grid lg:grid-cols-3 mt-6 justify-center text-center gap-8">
                        {pricing.map((item, index) =>{
                            if (index % 2 === 0){
                                return(
                                    <div className="bg-[#F4F4F4] px-12 py-8" key={item.index}>
                                        <h2 className="text-md font-semibold">{item.title}</h2>
                                        <h1 className="text-[46px] font-semibold whitespace-nowrap">${item.pricePerMonth}<span className="font-normal text-[12px]">/ month</span></h1>
                                        <div className="mt-4">
                                            {item.features.map((feature,index)=>(
                                                <p key={index} className="py-4 border-t-[1px] border-[#D6D6D6]">{feature}</p>
                                            ))}
                                        <button className="bg-primary px-4 py-2 mt-2 text-white">Choose Plan</button>
                                        </div>
                                    </div>
                                )
                            }else{
                                return(
                                    <div className="bg-primary text-white px-12 py-8" key={item.index}>
                                        <h2 className="text-md font-semibold">{item.title}</h2>
                                        <h1 className="text-[46px] font-semibold whitespace-nowrap">${item.pricePerMonth}<span className="font-normal text-[12px]">/ month</span></h1>
                                        <div className="mt-4">
                                            {item.features.map((feature,index)=>(
                                                <p key={index} className="py-4 border-t-[1px] border-[#D6D6D6]">{feature}</p>
                                            ))}
                                        </div>
                                        <button className="yellow-gradient px-4 py-2 mt-2 text-black">Choose Plan</button>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        </>

    )
}
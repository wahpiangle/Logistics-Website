import { lorryMan, planeBackground,iconShip, iconBuilding, iconPlane, iconProject, iconCustomer, iconLorry } from "../assets"
import NavBar from "./NavBar"
import { styles } from "../styles"
import { useState } from "react"
import { team } from "./constants/team"
import { AiOutlineTwitter, AiFillFacebook, AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai"

export default function About() {
    const [buttonSelection, setButtonSelection] = useState("approach")
    return(
        <div>
            <div className="bg-cover bg-no-repeat" style={{ backgroundImage: `url(${planeBackground})` }}>
                <NavBar/>
                <div className="flex flex-col px-28 max-w-3xl py-28">
                    <div className={`${styles.heroSubText} max-w-fit`}>About Us</div>
                    <h1 className={`${styles.heroHeadText}`}>About Our Logistics</h1>
                </div>
            </div>
            <div className="flex py-16 px-28 gap-16 md:flex-row flex-col">
                <div>
                    <img src={lorryMan} className="max-w-[400px] h-auto object-cover"/>
                </div>
                <div>
                    <div className="bg-[#e8e8e877] border-l-2 border-primaryyellow px-2 text-[12px] max-w-fit">About Us</div>
                    <h2 className="font-semibold mt-4 text-[28px]">Our Company Overview</h2>
                    <p className="text-paragraph text-[12px]">Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.</p>
                    <div className="flex gap-12 mt-4 text-[14px]">
                        <button className={`${buttonSelection === 'approach'?"yellow-gradient":"bg-[#e6e6e6]"} py-3 px-6 min-w-[150px]`} onClick={()=>{setButtonSelection("approach")}}>Our Approach</button>
                        <button className={`${buttonSelection === 'story'?"yellow-gradient":"bg-[#e6e6e6]"} p-3 min-w-[150px]`} onClick={()=>{setButtonSelection("story")}}>Our Story</button>
                        <button className={`${buttonSelection === 'values'?"yellow-gradient":"bg-[#e6e6e6]"} p-3 min-w-[150px]`} onClick={()=>{setButtonSelection("values")}}>Our Values</button>
                    </div>
                    {buttonSelection === 'approach' &&
                        <p className="text-paragraph mt-6 text-[12px]">Approach text Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit.</p>
                    }
                    {buttonSelection === 'story' &&
                        <p className="text-paragraph mt-6 text-[12px]">Story text Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit.</p>
                    }
                    {buttonSelection === 'values' &&
                        <p className="text-paragraph mt-6 text-[12px]">Values text Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit.</p>
                    }
                    <button className="mt-6 py-3 px-8 bg-primary text-white">Learn More</button>
                </div>
            </div>
            <div className="bg-[#F4F4F4] flex flex-col items-center py-10 px-32">
                <div className="bg-[#e8e8e88b] text-black border-l-2 mt-2 border-primaryyellow px-2 text-[12px] max-w-fit">Why Us</div>
                <h1 className="text-[30px] font-semibold">Our Logistics Services</h1>
                <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-16 mt-8">
                    <div>
                        <img src={iconShip} className="w-9"/>
                        <h2 className="mt-2 text-lg">Sea Transport Services</h2>
                        <p className="text-paragraph text-[12px]">Following the quality of our service thus having gained trust of our many clients.</p>
                    </div>
                    <div>
                        <img src={iconBuilding} className="w-9"/>
                        <h2 className="mt-2 text-lg">Warehousing Services</h2>
                        <p className="text-paragraph text-[12px]">Following the quality of our service thus having gained trust of our many clients.</p>
                    </div>
                    <div>
                        <img src={iconPlane} className="w-9"/>
                        <h2 className="mt-2 text-lg">Air Freight Services</h2>
                        <p className="text-paragraph text-[12px]">Following the quality of our service thus having gained trust of our many clients.</p>
                    </div>
                    <div>
                        <img src={iconProject} className="w-9"/>
                        <h2 className="mt-2 text-lg">Project & Exhibition Services</h2>
                        <p className="text-paragraph text-[12px]">Following the quality of our service thus having gained trust of our many clients.</p>
                    </div>
                    <div>
                        <img src={iconLorry} className="w-9"/>
                        <h2 className="mt-2 text-lg">Local Shipping Services</h2>
                        <p className="text-paragraph text-[12px]">Following the quality of our service thus having gained trust of our many clients.</p>
                    </div>
                    <div>
                        <img src={iconCustomer} className="w-9"/>
                        <h2 className="mt-2 text-lg">Customer Clearance Services</h2>
                        <p className="text-paragraph text-[12px]">Following the quality of our service thus having gained trust of our many clients.</p>
                    </div>
                </div>
                <button className="bg-primary text-white py-3 px-5 mt-8">More Works</button>
            </div>
            <div className="bg-[#F4F4F4] flex flex-col items-center py-10 px-32">
                <div className="bg-[#e8e8e88b] text-black border-l-2 border-primaryyellow px-2 text-[12px] max-w-fit mt-2">The Transporters</div>
                <h1 className="text-[30px] font-semibold">Meet Our Expert Team</h1>
                <div className="flex flex-wrap gap-20 justify-center">
                    {team.map((member, index) => (
                        <div key={index}>
                            <img className="max-w-[250px] h-auto mt-4" src={member.image}/>
                            <div className="flex justify-end">
                                <div className="yellow-gradient flex absolute max-w-fit text-[20px] p-4 gap-2 -mt-6">
                                    <AiFillFacebook className="cursor-pointer"/>
                                    <AiFillLinkedin className="cursor-pointer"/>
                                    <AiOutlineInstagram className="cursor-pointer"/>
                                </div>
                            </div>
                            <div className="bg-primary text-white p-4">
                                <h2 className="font-semibold">{member.name}</h2>
                                <p className="text-[12px]">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
import { lorryMan, planeBackground,iconShip, quotation, iconBuilding, iconPlane, iconProject, iconCustomer, iconLorry, company1, company2, company3, company4} from "../assets"
import NavBar from "./NavBar"
import { styles } from "../styles"
import { useState } from "react"
import { team } from "./constants/team"
import { AiFillFacebook, AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai"
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs"
import { reviews } from "./constants/reviews"
import { Link } from "react-router-dom"

export default function About() {
    const [buttonSelection, setButtonSelection] = useState("approach")
    const [review , setReview] = useState([0,1]);

    function handleReviewForward(){
        if(review[1] < reviews.length-2){
            setReview([review[0]+2,review[1]+2])
        }
    }

    function handleReviewBackward(){
        if(review[0] > 0){
            setReview([review[0]-2,review[1]-2])
        }
    }

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
                    <img src={lorryMan} className="md:max-w-[400px] max-w-[280px] h-auto object-cover"/>
                </div>
                <div>
                    <div className="bg-[#e8e8e877] border-l-2 border-primaryyellow px-2 text-[12px] max-w-fit">About Us</div>
                    <h2 className="font-semibold mt-4 text-[32px]">Our Company Overview</h2>
                    <p className="text-paragraph text-[12px]">Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.</p>
                    <div className="flex gap-12 mt-4 text-[12px] md:flex-row flex-col">
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
            <div className="bg-[#F4F4F4] flex flex-col items-center py-10 px-12 md:px-32">
                <div className="bg-[#e8e8e88b] text-black border-l-2 mt-2 border-primaryyellow px-2 text-[12px] max-w-fit">Why Us</div>
                <h1 className="text-[30px] mt-2 font-semibold">Our Logistics Services</h1>
                <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-16 mt-8">
                    <div>
                        <img src={iconShip} className="w-12"/>
                        <h2 className="mt-2 text-xl hover:text-primaryyellow"><Link to="/service">Sea Transport Services</Link></h2>
                        <p className="text-paragraph text-[12px]">Following the quality of our service thus having gained trust of our many clients.</p>
                    </div>
                    <div>
                        <img src={iconBuilding} className="w-12"/>
                        <h2 className="mt-2 text-xl">Warehousing Services</h2>
                        <p className="text-paragraph text-[12px]">Following the quality of our service thus having gained trust of our many clients.</p>
                    </div>
                    <div>
                        <img src={iconPlane} className="w-12"/>
                        <h2 className="mt-2 text-xl">Air Freight Services</h2>
                        <p className="text-paragraph text-[12px]">Following the quality of our service thus having gained trust of our many clients.</p>
                    </div>
                    <div>
                        <img src={iconProject} className="w-12"/>
                        <h2 className="mt-2 text-xl">Project & Exhibition Services</h2>
                        <p className="text-paragraph text-[12px]">Following the quality of our service thus having gained trust of our many clients.</p>
                    </div>
                    <div>
                        <img src={iconLorry} className="w-12"/>
                        <h2 className="mt-2 text-xl">Local Shipping Services</h2>
                        <p className="text-paragraph text-[12px]">Following the quality of our service thus having gained trust of our many clients.</p>
                    </div>
                    <div>
                        <img src={iconCustomer} className="w-12"/>
                        <h2 className="mt-2 text-xl">Customer Clearance Services</h2>
                        <p className="text-paragraph text-[12px]">Following the quality of our service thus having gained trust of our many clients.</p>
                    </div>
                </div>
                <button className="bg-primary text-md text-white py-3 px-5 mt-12">More Works</button>
            </div>
            <div className="flex flex-col items-center py-10 px-12 md:px-32">
                <div className="bg-[#e8e8e88b] text-black border-l-2 border-primaryyellow px-2 text-[12px] max-w-fit mt-2">The Transporters</div>
                <h1 className="text-[30px] mt-2 font-semibold">Meet Our Expert Team</h1>
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
            <div className="bg-[#F4F4F4] px-12 md:px-32 py-10">
                <div className="bg-[#e8e8e88b] text-blapx-12 md:px-32ck border-l-2 border-primaryyellow px-2 text-[12px] max-w-fit mt-2">Testimonial</div>
                <div className="flex justify-between flex-col md:flex-row gap-4">
                    <h1 className="text-[35px] mt-2 font-semibold">What Our Customers Say</h1>
                    <div className="flex gap-3">
                        <BsFillArrowLeftCircleFill className="h-auto w-10 text-primary hover:text-primaryyellow cursor-pointer" onClick={()=>handleReviewBackward()}/>
                        <BsFillArrowRightCircleFill className="h-auto w-10 text-primary hover:text-primaryyellow cursor-pointer" onClick={()=>handleReviewForward()}/>
                    </div>
                </div>
                <div className="flex mt-8 justify-center flex-col lg:flex-row">
                    <div className="p-12">
                        <div className="flex items-center gap-4">
                            <img src={reviews[review[0]].image} className="rounded-full h-[91px] object-cover aspect-square"/>
                            <div>
                                <h2 className="font-semibold">{reviews[review[0]].name}</h2>
                                <p className="text-[12px]">{reviews[review[0]].company}</p>
                            </div>
                            <img src={quotation} className="h-14 flex-8 ml-auto"/>
                        </div>
                        <p className="text-paragraph italic text-[12px] mt-4">{reviews[review[0]].review}</p>
                    </div>
                    <div className="bg-primary text-white p-12">
                        <div className="flex items-center gap-4">
                            <img src={reviews[review[1]].image} className="rounded-full h-[91px] object-cover aspect-square"/>
                            <div>
                                <h2 className="font-semibold">{reviews[review[1]].name}</h2>
                                <p className="text-[12px]">{reviews[review[1]].company}</p>
                            </div>
                            <img src={quotation} className="h-14 flex-8 ml-auto"/>
                        </div>
                        <p className="text-white italic text-[12px] mt-4">{reviews[review[1]].review}</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center py-24 md:flex-row flex-col">
                <img src={company1} className="border-[1px] border-[#4E5683] cursor-pointer"/>
                <img src={company2} className="border-[1px] border-[#4E5683] cursor-pointer"/>
                <img src={company3} className="border-[1px] border-[#4E5683] cursor-pointer"/>
                <img src={company4} className="border-[1px] border-[#4E5683] cursor-pointer"/>
            </div>
            <div className="px-8 justify-evenly border-[#D4D4D4] border-[1px] md:flex hidden">
                <div className="flex items-center gap-4 border-r-[1px] p-6 justify-center">
                    <h1 className="text-[35px] font-bold">25</h1>
                    <div className="w-4 h-4 yellow-gradient"></div>
                    <p className="text-[16px]">Locations</p>
                </div>
                <div className="flex items-center gap-4 border-r-[1px] p-6 justify-center">
                    <h1 className="text-[35px] font-bold">4669</h1>
                    <div className="w-4 h-4 yellow-gradient"></div>
                    <p className="text-[16px]">Delivered Packages</p>
                </div>
                <div className="flex items-center gap-4 border-r-[1px] p-6 justify-center">
                    <h1 className="text-[35px] font-bold">723</h1>
                    <div className="w-4 h-4 yellow-gradient"></div>
                    <p className="text-[16px]">Satisfied Customers</p>
                </div>
                <div className="flex items-center gap-4 p-8">
                    <h1 className="text-[35px] font-bold">83+</h1>
                    <div className="w-4 h-4 yellow-gradient"></div>
                    <p className="text-[16px]">Owned Vehicles</p>
                </div>
            </div>
        </div>
    )
}
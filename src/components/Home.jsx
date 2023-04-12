import NavBar from "./NavBar";
import { shipImg, iconBuilding, iconShip, iconPlane, iconLorry, cargoBox, womanPlane,iconBox, iconCash } from "../assets";
import { styles } from "../styles"

export default function Home() {
    return (
        <>
            <div className="bg-cover bg-no-repeat" style={{ backgroundImage: `url(${shipImg})` }}>
                <NavBar />
                <div className="flex flex-col px-28 max-w-3xl py-28">
                    <div className={`${styles.heroSubText} max-w-fit`}>Logistics & Supply Chain Solutions</div>
                    <h1 className={`${styles.heroHeadText}`}>Your Gateway to any Destination in the World</h1>
                    <p className="text-white">In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus. </p>
                    <button className="yellow-gradient p-4 max-w-[194px] mt-4">Explore More</button>
                </div>
            </div>
            <div className="bg-secondary flex items-center px-28 py-14 gap-10 flex-col md:flex-row">
                <div className="max-w-2xl">
                    <div className="bg-[#00000012] text-black border-l-2 border-primaryyellow px-2 text-[12px] max-w-fit">What We Do</div>
                    <h1 className="text-[35px] font-semibold">Safe & Reliable Cargo Solutions</h1>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-8">
                    <div className="flex gap-8">
                        <div>
                            <img src={iconShip} className="object-contain w-20 h-20" />
                        </div>
                        <div className="border-l-2 px-4">
                            <h2>Sea Transport Services</h2>
                            <p className="text-paragraph text-[12px]">Following the quality of our service thus having gained trust of our many clients.</p>
                        </div>
                    </div>
                    <div className="flex gap-8">
                        <div>
                            <img src={iconBuilding} className="object-contain w-20 h-20" />
                        </div>
                        <div className="border-l-2 px-4">
                            <h2>Warehousing Services</h2>
                            <p className="text-paragraph text-[12px]">Following the quality of our service thus having gained trust of our many clients.</p>
                        </div>
                    </div>
                    <div className="flex gap-8">
                        <div>
                            <img src={iconPlane} className="object-contain w-20 h-20" />
                        </div>
                        <div className="border-l-2 px-4">
                            <h2>Air Freight Services</h2>
                            <p className="text-paragraph text-[12px]">Following the quality of our service thus having gained trust of our many clients.</p>
                        </div>
                    </div>
                    <div className="flex gap-8">
                        <div>
                            <img src={iconLorry} className="object-contain w-20 h-20" />
                        </div>
                        <div className="border-l-2 px-4">
                            <h2>Local Shipping Services</h2>
                            <p className="text-paragraph text-[12px]">Following the quality of our service thus having gained trust of our many clients.</p>
                        </div>
                    </div>

                </div>
            </div>
            <img src={cargoBox} />
            <div className="relative z-10 flex gap-10 justify-around px-12 mx-48 py-12 -mt-24 bg-fixed bg-white flex-col lg:flex-row">
                <div className="">
                    <div className="bg-[#00000012] text-black border-l-2 border-primaryyellow px-2 text-[12px] max-w-fit">Why Us</div>
                    <h1 className="text-[30px] font-semibold">We provide full range global logistics solution</h1>
                    <p className="text-paragraph text-[14px] hidden md:block">Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. <br/><br/>Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                    <div className="flex gap-4 items-center mt-2">
                        <img src={iconBox} className="w-10 h-10"/>
                        <div>Delivery On Time</div>
                    </div>
                    <div className="flex gap-4 items-center mt-2">
                        <img src={iconCash} className="w-10 h-10"/>
                        <div>Optimized Delivery Cost</div>
                    </div>
                </div>
                <img src={womanPlane} className="object-contain w-[400px] h-auto" />
            </div>
        </>
    )
}
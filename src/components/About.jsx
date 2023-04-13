import { lorryMan, planeBackground } from "../assets"
import NavBar from "./NavBar"
import { styles } from "../styles"
import { useState } from "react"

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
        </div>
    )
}
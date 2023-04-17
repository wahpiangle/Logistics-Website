import { planeBackground } from "../assets"
import NavBar from "./NavBar"
import { styles } from "../styles"
import { NavLink } from "react-router-dom"

export default function Error() {
    return(
        <>
            <div className="bg-cover bg-no-repeat" style={{ backgroundImage: `url(${planeBackground})` }}>
                <NavBar/>
                <div className="flex flex-col max-w-3xl sm:p-28 p-20">
                    <div className={`${styles.heroSubText} max-w-fit`}>Error</div>
                    <h1 className={`${styles.heroHeadText}`}>Page Not Found</h1>
                </div>
            </div>
            <div className="p-12 text-center">
                <h1 className="text-[150px] font-semibold">4<span className="text-primaryyellow">0</span>4</h1>
                <h2 className="font-semibold text-[24px]">Oops! Page Not Found.</h2>
                <p className="text-paragraph text-[14px] mt-2">Let's get where you need to be.</p>
                <button className="yellow-gradient px-4 py-2 mt-4"><NavLink to="/">Back to Home</NavLink></button>
            </div>
        </>
    )
}
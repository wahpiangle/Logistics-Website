import { shipServices } from "../assets";
import NavBar from "./NavBar";
import { styles } from "../styles";
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
                <div className="flex items-center justify-center p-32 flex-col">
                    <div className="bg-[#00000012] text-black border-l-2 border-primaryyellow px-2 text-[12px] max-w-fit">Pricing</div>
                    <h1 className="xl:text-[30px] text-[20px] font-semibold">Our Best Pricing</h1>
                    <div>

                    </div>
                </div>
            </div>
        </>

    )
}
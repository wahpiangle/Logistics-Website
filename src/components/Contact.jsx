import NavBar from "./NavBar";
import { contact } from "../assets";
import { styles } from "../styles";

export default function Contact() {
    return(
        <>
            <div className="bg-cover bg-no-repeat" style={{ backgroundImage: `url(${contact})` }}>
                <NavBar/>
                <div className="flex flex-col px-28 max-w-3xl py-28">
                    <div className={`${styles.heroSubText} max-w-fit`}>Contact</div>
                    <h1 className={`${styles.heroHeadText}`}>Contact Us</h1>
                </div>
                <div>
                    <form>

                    </form>
                </div>
            </div>
        </>
    )
}
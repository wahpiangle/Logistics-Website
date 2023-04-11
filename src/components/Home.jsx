import NavBar from "./NavBar";
import { shipImg } from "../assets";
export default function Home() {
    return(
        <div className="bg-cover bg-no-repeat" style={{ backgroundImage: `url(${shipImg})` }}>
            <NavBar/>
        </div>
    )
}
import NavBar from "./NavBar"
import { projectBg, projectHover } from "../assets"
import { styles } from "../styles"
import { projects } from "./constants/projects"
import { NavLink } from "react-router-dom"

export default function Project() {
    return (
        <>
            <div className="bg-cover bg-no-repeat" style={{ backgroundImage: `url(${projectBg})` }}>
                <NavBar />
                <div className="flex flex-col px-28 max-w-3xl py-28">
                    <div className={`${styles.heroSubText} max-w-fit`}>About Us</div>
                    <h1 className={`${styles.heroHeadText}`}>About Our Logistics</h1>
                </div>
            </div>
            <div className="lg:px-40 md:px-20 px-8 py-12 grid md:grid-cols-3 grid-cols-2 gap-12">
                {projects.map((item) => {
                    return (
                        <div className="relative">
                                <img src={item.img} />
                                <NavLink to={`/project/${item.id}`} state={item}><img src={projectHover} className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer" /></NavLink>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
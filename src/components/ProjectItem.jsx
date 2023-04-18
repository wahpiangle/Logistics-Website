import { useLocation } from "react-router-dom"; //useLocation to access state
import { projectItemBg } from "../assets";
import NavBar from "./NavBar";
import { styles } from "../styles";
export default function ProjectItem() {
    let location = useLocation();
    const projectItem = location.state;

    return(
        <div>
            <div className="bg-cover bg-no-repeat" style={{ backgroundImage: `url(${projectItemBg})` }}>
                <NavBar/>
                <div className="flex flex-col px-28 max-w-3xl py-28">
                    <div className={`${styles.heroSubText} max-w-fit`}>Our Project</div>
                    <h1 className={`${styles.heroHeadText}`}>About Our Project</h1>
                </div>
            </div>
            <div className="px-20 lg:px-48 py-20 flex bg-[#F4F4F4] gap-20 justify-center items-center md:flex-row flex-col">
                <img src={projectItem.img} className="w-[300px]"/>
                <div>
                    <h1 className="text-[24px] font-semibold">Project Details</h1>
                    <p className="mt-4 font-[14px]"><span className="font-semibold mr-2">Customer : </span>{projectItem.customer}</p>
                    <p className="mt-4 font-[14px]"><span className="font-semibold mr-2">Date : </span>{projectItem.date}</p>
                    <p className="mt-4 font-[14px]"><span className="font-semibold mr-2">Status : </span>{projectItem.status}</p>
                    <p className="mt-4 font-[14px]"><span className="font-semibold mr-2">Tags : </span>
                    {projectItem.tags.map((tag, index) => {
                        return index !== projectItem.tags.length - 1 ? `${tag}, ` : `${tag}`
                    })}
                    </p>
                </div>
            </div>
        </div>
    )
}
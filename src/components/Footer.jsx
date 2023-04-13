import { companyLogo } from "../assets"

export default function Footer(){
    return(
        <div className="bg-primary">
            <img src={companyLogo}/>
        </div>
    )
}
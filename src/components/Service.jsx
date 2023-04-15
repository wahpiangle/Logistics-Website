import { cargoBg, shipServices,iconShip, serviceLorry } from "../assets";
import NavBar from "./NavBar";
import { styles } from "../styles";

export default function Service() {
    return(
        <>
            <div className="bg-no-repeat bg-auto" style={{ backgroundImage: `url(${cargoBg})` }}>
                <NavBar/>
                <div className="flex flex-col px-28 max-w-3xl py-28">
                    <div className={`${styles.heroSubText} max-w-fit`}>Service</div>
                    <h1 className={`${styles.heroHeadText}`}>Service Details</h1>
                </div>
            </div>
            <div className="flex justify-center flex-col md:p-32 p-10">
                <img src={shipServices} className="max-w-[1000px]"/>
                <div className="flex gap-6 items-center mt-8">
                    <img src={iconShip} className="w-8 md:w-12"/>
                    <h1 className="md:text-[30px] text-[18px] font-semibold">Sea Transport Services</h1>
                </div>
                <p className="mt-4 text-[12px] text-paragraph">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?<br/><br/>Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
            </div>
            <div className="flex md:px-32 py-24 p-10 bg-[#F4F4F4]">
                <div>
                    <h1 className="md:text-[30px] text-[18px] font-semibold">Benefit Of Service</h1>
                    <p className="text-[12px] text-paragraph mt-2">Sed ut perspiciatis, unde omnis iste natu volupta temaccu santium doloremque laudantium, totam rem quae ab illo inventore veritatis.</p>
                    <ul className="mt-4 flex flex-col gap-5">
                        <li>→ Clearance and compliance service</li>
                        <li>→ Saves Time</li>
                        <li>→ Increase Business Efficiency</li>
                        <li>→ Reduce Costs</li>
                    </ul>
                </div>
                <img src={serviceLorry}/>
            </div>
        </>
    )
}
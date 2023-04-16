import { useEffect, useState } from "react";
import { AiOutlineInstagram, AiFillFacebook, AiFillTwitterCircle, AiFillLinkedin, AiOutlineMenu, } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';
import { useSelector, useDispatch } from 'react-redux';
import { setHome, setAbout, setPricing, setContact, setProject } from '../redux/navSlice';

export default function NavBar() {
    const active = useSelector((state) => state.navigation.value);
    const dispatch = useDispatch();
    const [menuToggle, setToggleMenu] = useState(false);
    useEffect(() => {
        if (window.location.pathname === '/') {
            dispatch(setHome());
        } else if (window.location.pathname === '/about') {
            dispatch(setAbout());
        } else if (window.location.pathname === '/pricing') {
            dispatch(setPricing());
        } else if (window.location.pathname === '/contact') {
            dispatch(setContact());
        }else if(window.location.pathname === '/project'){
            dispatch(setProject());
        }
    },[])
    return (
        <nav className="flex justify-around bg-primary/25 gap-8">
            <ul className="lg:flex gap-4 hidden">
                <NavLink to="/">
                    <li onClick={() => dispatch(setHome())} className={`p-2 my-4 text-white cursor-pointer hover:border-b-2 ${active === 'home' ? 'border-b-2 border-b-white' : ""}`}>Home</li>
                </NavLink>
                <div className="h-10 text-white justify-center py-6 px-1">|</div>
                <NavLink to="/about" >
                    <li onClick={() => dispatch(setAbout())} className={`p-2 my-4 text-white cursor-pointer hover:border-b-2 ${active === 'about' ? 'border-b-2' : ""}`}>About</li>
                </NavLink>

                <div className="h-10 text-white justify-center py-6 px-1">|</div>
                <NavLink to="/project">
                    <li onClick={() => dispatch(setProject())} className={`p-2 my-4 text-white cursor-pointer hover:border-b-2 ${active === 'project' ? 'border-b-2' : ""}`}>Projects</li>
                </NavLink>

                <div className="h-10 text-white justify-center py-6 px-1">|</div>
                <NavLink to="/pricing" >
                    <li onClick={() => dispatch(setPricing())} className={`p-2 my-4 text-white cursor-pointer hover:border-b-2 ${active === 'pricing' ? 'border-b-2' : ""}`}>Pricing</li>
                </NavLink>

                <div className="h-10 text-white justify-center py-6 px-1">|</div>
                <NavLink to="/contact">
                    <li onClick={() => dispatch(setContact())} className={`p-2 my-4 text-white cursor-pointer hover:border-b-2 ${active === 'contact' ? 'border-b-2' : ""}`}>Contact</li>
                </NavLink>
            </ul>
            <div className="lg:hidden flex p-2 my-4">
                {!menuToggle&&
                    <AiOutlineMenu className="text-white cursor-pointer text-2xl" onClick={() => setToggleMenu(state => !state)} />}
                {menuToggle &&
                <RxCross1 className="text-white cursor-pointer text-2xl" onClick={() => setToggleMenu(state => !state)}/>
                }
            </div>

            {menuToggle &&
                <div className=" bg-primary absolute left-10 top-44 px-12">
                    <ul className="flex justify-center flex-col items-center">
                        <NavLink to="/">
                            <li onClick={() => dispatch(setHome())} className={`p-2 my-4 text-white cursor-pointer border-b-transparent border-b-2 hover:text-primaryyellow`}>Home</li>
                        </NavLink>
                        <NavLink to="/about" >
                            <li onClick={() => dispatch(setAbout())} className={`p-2 my-4 text-white cursor-pointer hover:text-primaryyellow`}>About</li>
                        </NavLink>
                        <NavLink to="/project" >
                            <li onClick={() => dispatch(setProject())} className={`p-2 my-4 text-white cursor-pointer hover:text-primaryyellow`}>Project</li>
                        </NavLink>
                        <NavLink to="/pricing" >
                            <li onClick={() => dispatch(setPricing())} className={`p-2 my-4 text-white cursor-pointer hover:text-primaryyellow`}>Pricing</li>
                        </NavLink>
                        <NavLink to="/contact">
                            <li onClick={() => dispatch(setContact())} className={`p-2 my-4 text-white cursor-pointer hover:text-primaryyellow`}>Contact</li>
                        </NavLink>
                    </ul>
                </div>}
            <div className="flex items-center gap-5">
                <AiOutlineInstagram className="text-[24px] text-white cursor-pointer" />
                <AiFillFacebook className="text-[24px] text-white cursor-pointer" />
                <AiFillTwitterCircle className="text-[24px] text-white cursor-pointer" />
                <AiFillLinkedin className="text-[24px] text-white cursor-pointer" />
            </div>
            <div className="flex justify-center">
                <button className="bg-white px-4">Request Quote</button>
            </div>
        </nav>
    )
}
import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

export default function RootLayout() {
    return (
        <div className="root-layout">
            <header>
                <Header/>
            </header>
            <main>
                <Outlet />
            </main>
            <Footer/>
        </div>
    )
}
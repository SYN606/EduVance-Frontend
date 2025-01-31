import { Outlet } from "react-router-dom"
import { Footer, Navbar } from "../components"

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout

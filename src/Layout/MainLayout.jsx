import { Outlet } from "react-router-dom"
import Nav from "../Components/Nav/Nav"
import Footer from "../Pages/Footer/Footer"

const MainLayout = () => {
    return (
        <div>
            <div>
                <Nav />
            </div>
            <div>
                <Outlet />
            </div>
            <Footer/>
        </div>
    )
}

export default MainLayout
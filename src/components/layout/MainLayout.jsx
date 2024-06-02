import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "../footer/Footer"


// eslint-disable-next-line react/prop-types
const MainLayout = () => {
  return (
    <div className="max-w-[1920px] mx-auto overflow-auto h-[125vh] bg-white">
        <Navbar />
        <main>
        <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default MainLayout

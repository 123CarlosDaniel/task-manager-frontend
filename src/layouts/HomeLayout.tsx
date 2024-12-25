import { Outlet } from "react-router"
import HomeNavbar from "@/layouts/HomeNavbar"

const HomeLayout = () => {
  return (
    <div className="min-h-screen px-6 pt-4 pb-2">
      <HomeNavbar />
      <Outlet />
    </div>
  )
}

export default HomeLayout
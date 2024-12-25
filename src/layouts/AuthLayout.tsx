import { Outlet, useNavigate } from "react-router"
import FormSkeleton from "@/components/skeletons/FormSkeleton"
import { useEffect } from "react"
import AuthNavbar from "@/layouts/AuthNavbar"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"

const AuthLayout = () => {
  const { loading, session } = useSelector((state: RootState) => state.auth)
  const navigate = useNavigate()
  useEffect(() => {
    if (session) {
      navigate("/")
    }
  }, [session, navigate])

  if (loading) {
    return (
      <div className="grid min-h-screen place-items-center">
        <FormSkeleton />
      </div>
    )
  }

  if (session) {
    return null
  }

  return (
    <div className="flex flex-col min-h-screen">
      <AuthNavbar />
      <div className="grid flex-1 place-items-center">
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout

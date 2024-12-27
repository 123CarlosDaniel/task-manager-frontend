import { Outlet, useNavigate } from "react-router"
import FormSkeleton from "@/components/skeletons/FormSkeleton"
import { useEffect } from "react"
import AuthNavbar from "@/layouts/AuthNavbar"
import { useAppSelector } from "@/hooks/redux"

const AuthLayout = () => {
  const { loading, session } = useAppSelector((state) => state.auth)
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
    <div className="flex flex-col min-h-screen px-4">
      <AuthNavbar />
      <div className="grid flex-1 place-items-center">
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout

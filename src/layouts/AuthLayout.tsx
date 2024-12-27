import { Outlet, useNavigate } from "react-router"
import FormSkeleton from "@/components/skeletons/FormSkeleton"
import { useEffect } from "react"
import AuthNavbar from "@/layouts/AuthNavbar"
import { useAppSelector } from "@/hooks/redux"
import { Suspense } from "react"

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
      <LoadingFormSkeleton />
    )
  }

  if (session) {
    return null
  }

  return (
    <Suspense fallback={<LoadingFormSkeleton />}>
      <div className="flex flex-col min-h-screen px-4">
        <AuthNavbar />
        <div className="grid flex-1 place-items-center">
          <Outlet />
        </div>
      </div>
    </Suspense>
  )
}

export default AuthLayout

const LoadingFormSkeleton = () => {
  return (
    <div className="grid min-h-screen place-items-center">
      <FormSkeleton />
    </div>
  )
}
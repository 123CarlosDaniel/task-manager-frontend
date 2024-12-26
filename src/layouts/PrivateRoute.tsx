import TasksSkeleton from "@/components/skeletons/TasksSkeleton"
import { Outlet, useNavigate } from "react-router"
import { useEffect } from "react"
import { useAppSelector } from "@/hooks/redux"

const PrivateRoute = () => {
  const { loading, session } = useAppSelector((state) => state.auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (!loading && !session) {
      navigate("/auth/login")
    }
  }, [loading, session, navigate])

  if (loading) {
    return <TasksSkeleton />
  }

  if (!session) {
    return null
  }

  return <Outlet />
}

export default PrivateRoute

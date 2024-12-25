import TasksSkeleton from "@/components/skeletons/TasksSkeleton"
import { Outlet, useNavigate } from "react-router"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"

const PrivateRoute = () => {
  const { loading, session } = useSelector((state: RootState) => state.auth)
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

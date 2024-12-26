import TaskCard from "./TaskCard"
import TasksSkeleton from "../skeletons/TasksSkeleton"
import { useAppDispatch, useAppSelector } from "@/hooks/redux"
import { useEffect } from "react"
import { fetchTasks } from "@/store/thunks/tasksThunks"

const TasksList = () => {
  const { session } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()
  const { tasks, error, loading } = useAppSelector((state) => state.tasks)

  useEffect(() => {
    dispatch(
      fetchTasks({
        accessToken: session?.access_token!,
        refreshToken: session?.refresh_token!,
      })
    )
  }, [dispatch, session?.access_token, session?.refresh_token])

  if (loading) return <TasksSkeleton />
  if (error) return <p>{error}</p>

  return (
    <div className="grid items-center justify-center grid-cols-3 pt-6 pb-2 gap-x-4 gap-y-12">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  )
}

export default TasksList

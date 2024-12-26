import { useSelector } from "react-redux"
import TaskCard from "./TaskCard"
import { RootState } from "@/store/store"
import useTasks from "@/hooks/useTasks"
import TasksSkeleton from "../skeletons/TasksSkeleton"

const TasksList = () => {
  const { session } = useSelector((state: RootState) => state.auth)
  const { tasks, error, loading } = useTasks(
    session?.access_token,
    session?.refresh_token
  )

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

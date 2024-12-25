import TaskList from "@/components/task/TaskList"
import { RootState } from "@/store/store"
import { useSelector } from "react-redux"

function TasksPage() {
  // const { loading, session } = useSelector((state: RootState) => state.auth)

  return <div className="w-full">
    <TaskList/>
  </div>
}

export default TasksPage

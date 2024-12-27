import TaskDialog from "@/components/task/TaskDialog"
import TasksList from "@/components/task/TasksList"
import { Button } from "@/components/ui/button"
import { FaPlus } from "react-icons/fa"

function TasksPage() {
  return (
    <div className="w-full">
      <div className="sticky top-0 flex justify-center w-full pt-4 pb-2 bg-white sm:justify-end bg-opacity-10 sm:pe-7 backdrop-blur-sm">
        <TaskDialog mode="create">
          <Button type="button" size={"sm"} variant={"sky"}>
            <FaPlus />
            Create task
          </Button>
        </TaskDialog>
      </div>
      <TasksList />
    </div>
  )
}

export default TasksPage

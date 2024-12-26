import TaskDialog from "@/components/task/TaskDialog"
import TasksList from "@/components/task/TasksList"
import { Button } from "@/components/ui/button"

function TasksPage() {
  return (
    <div className="w-full">
      <div className="sticky top-0 flex justify-end w-full pt-4 pb-2 bg-white bg-opacity-10 pe-7 backdrop-blur-sm">
        <TaskDialog mode="create">
          <Button type="button">Create task</Button>
        </TaskDialog>
      </div>
      <TasksList />
    </div>
  )
}

export default TasksPage

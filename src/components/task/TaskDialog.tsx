import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ReactNode } from "react"
import TaskForm from "./TaskForm"
import { Task } from "@/types/task"

interface TaskDialogProps {
  task?: Partial<Task>
  mode?: "create" | "update"
  children: ReactNode
}
const TaskDialog = ({ children, task = {}, mode = "update" }: TaskDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {mode === "create" ? "Create" : "Update"} task
          </DialogTitle>
          <DialogDescription>
            {mode === "create"
              ? "You can create a new task here"
              : "Make changes to your task here. You can select the field to edit"}
          </DialogDescription>
        </DialogHeader>
        <TaskForm task={task} mode={mode}/>
      </DialogContent>
    </Dialog>
  )
}

export default TaskDialog

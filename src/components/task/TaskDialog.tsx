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

const TaskDialog = ({ children, task }: { children: ReactNode, task: Partial<Task> }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit task</DialogTitle>
          <DialogDescription>
            Make changes to your task here. You can select the field to edit
          </DialogDescription>
        </DialogHeader>
        <TaskForm task={task}/>
      </DialogContent>
    </Dialog>
  )
}

export default TaskDialog

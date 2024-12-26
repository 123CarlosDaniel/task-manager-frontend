import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Task } from "@/types/task"
import TaskDialog from "./TaskDialog"
import TaskState from "./TaskState"
import { useAppDispatch, useAppSelector } from "@/hooks/redux"
import { deleteTaskThunk } from "@/store/thunks/tasksThunks"
import { toast } from "@/hooks/useToast"

const TaskCard = ({ task }: { task: Task }) => {
  const dispatch = useAppDispatch()
  const { session } = useAppSelector((state) => state.auth)
  const { error } = useAppSelector((state) => state.tasks)

  const deleteTask = () => {
    dispatch(
      deleteTaskThunk({
        id: task.id!,
        accessToken: session?.access_token!,
        refreshToken: session?.refresh_token!,
      })
    ).then(() => {
      if (error) {
        toast({
          title: "Task delete failed",
          description: error,
          variant: "destructive",
        })
        return
      }
      toast({
        title: "Task deleted",
        description: "Task deleted successfully",
        variant: "success",
      })
    })
  }
  return (
    <Card className="w-[350px] mx-auto">
      <CardHeader>
        <CardTitle className="text-lg">{task.title}</CardTitle>
        <CardDescription>{task.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <TaskState state={task.state} />
      </CardContent>
      <CardFooter className="flex justify-around">
        <TaskDialog task={task} mode="update">
          <Button variant="outline">Update</Button>
        </TaskDialog>
        <Button variant="destructive" onClick={deleteTask}>
          Delete
        </Button>
      </CardFooter>
    </Card>
  )
}

export default TaskCard

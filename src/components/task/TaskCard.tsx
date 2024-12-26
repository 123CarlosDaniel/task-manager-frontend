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

const TaskCard = ({ task }: { task: Task }) => {
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
        <TaskDialog task={task}>
          <Button variant="outline">Update</Button>
        </TaskDialog>
        <Button variant="destructive">Delete</Button>
      </CardFooter>
    </Card>
  )
}

export default TaskCard

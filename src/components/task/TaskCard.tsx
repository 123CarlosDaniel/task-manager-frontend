import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { MdOutlinePendingActions } from "react-icons/md"
import { FaBarsProgress } from "react-icons/fa6"
import { MdTaskAlt } from "react-icons/md"
import { Task } from "@/types/task"

const taskState = {
  0: {
    label: "Pending",
    icon: <MdOutlinePendingActions className="text-red-500 size-6" />,
  },
  1: {
    label: "In Progress",
    icon: <FaBarsProgress className="text-blue-500 size-6" />,
  },
  2: {
    label: "Completed",
    icon: <MdTaskAlt className="text-green-500 size-6" />,
  },
}

const TaskCard = ({ task }: { task: Task }) => {
  return (
    <Card className="w-[350px] mx-auto">
      <CardHeader>
        <CardTitle className="text-lg">{task.title}</CardTitle>
        <CardDescription>{task.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-x-2">
          {taskState[task.state as keyof typeof taskState].icon}
          <span>{taskState[task.state as keyof typeof taskState].label}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-around">
        <Button variant="outline">Update</Button>
        <Button variant="destructive">Delete</Button>
      </CardFooter>
    </Card>
  )
}

export default TaskCard

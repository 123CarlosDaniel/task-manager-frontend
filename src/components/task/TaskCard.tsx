/*
title, description , state(completed, in progress, pending) (delete, update)
*/

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
import { FaBarsProgress } from "react-icons/fa6";
import { MdTaskAlt } from "react-icons/md";

const taskState = {
  0: {
    label: "Pending",
    icon: <MdOutlinePendingActions className="text-red-500 size-6"/>,
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

const TaskCard = ({
  task,
}: {
  task: { title: string; description: string; state: number }
}) => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-lg">Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
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

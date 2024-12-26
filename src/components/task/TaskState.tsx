import { MdOutlinePendingActions } from "react-icons/md"
import { FaBarsProgress } from "react-icons/fa6"
import { MdTaskAlt } from "react-icons/md"

const taskState = {
  0: {
    label: "Pending",
    icon: <MdOutlinePendingActions className="text-red-500 size-5" />,
  },
  1: {
    label: "In Progress",
    icon: <FaBarsProgress className="text-blue-500 size-5" />,
  },
  2: {
    label: "Completed",
    icon: <MdTaskAlt className="text-green-500 size-5" />,
  },
}

const TaskState = ({ state }: { state: number }) => {
  return (
    <div className="flex items-center gap-x-4">
      {taskState[state as keyof typeof taskState].icon}
      <span>{taskState[state as keyof typeof taskState].label}</span>
    </div>
  )
}

export default TaskState

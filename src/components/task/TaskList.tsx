import TaskCard from "./TaskCard"

const task = {
  title: "Create project",
  description: "Deploy your new project in one-click.",
  state: 2
}

const TaskList = () => {
  return (
    <div>
      <TaskCard task={task}/>
    </div>
  )
}

export default TaskList
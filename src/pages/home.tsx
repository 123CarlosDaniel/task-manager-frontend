import { Button } from "@/components/ui/button"
import { MdOutlineTaskAlt } from "react-icons/md"
import { Link } from "react-router"
import { MdOutlineStart } from "react-icons/md"

function HomePage() {
  return (
    <div className="flex flex-col sm:px-16 gap-y-4">
      <div className="flex items-center pt-4 mx-auto gap-x-2 w-fit">
        <h1 className="flex flex-col items-center text-lg sm:text-xl sm:items-baseline gap-x-2 sm:flex-row">
          Welcome to
          <span className="flex items-center text-xl font-semibold sm:text-2xl gap-x-2">
            Task Manager <MdOutlineTaskAlt className="text-green-500 size-6" />
          </span>
        </h1>
      </div>
      <div className="flex flex-col gap-y-2 sm:text-lg">
        <h3 className="font-semibold">What is Task Manager?</h3>
        <p>This is a simple app to manage your tasks.</p>
      </div>
      <div className="sm:text-lg">
        <h3 className="font-semibold">How to use Task Manager?</h3>
        <p>
          To use Task Manager, you need to create an account. Once you have an
          account, you can create and manage your tasks.
        </p>
      </div>
      <div className="flex flex-col gap-y-2 sm:text-lg">
        <h3 className="font-semibold">Features</h3>
        <p className="text-base">Task Manager has the following features:</p>
        <ul className="text-sm list-disc list-inside sm:text-base">
          <li>Task Creation, Update, and Deletion</li>
          <li>Supabase Authentication integration</li>
          <li>Api Integration</li>
          <li>Management state with React Redux Toolkit</li>
          <li>Management routes with React Router</li>
          <li>
            Type checking and validation with Zod, Typescript and React Hook
            Form
          </li>
          <li>Custom hooks and custom components</li>
        </ul>
      </div>
      <div className="flex items-center sm:items-baseline gap-x-6">
        <h3 className="font-medium sm:text-lg">Start using Task Manager</h3>
        <Link to="/tasks">
          <Button variant="outlineGreen">
            <MdOutlineStart className="mr-2 font-semibold text-orange-500 size-6" />
            Go to tasks
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default HomePage

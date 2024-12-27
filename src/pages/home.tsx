import { Button } from "@/components/ui/button"
import { MdOutlineTaskAlt } from "react-icons/md"
import { Link } from "react-router"
import { MdOutlineStart } from "react-icons/md"

function HomePage() {
  return (
    <div className="flex flex-col px-16 gap-y-4">
      <div className="flex items-center pt-4 mx-auto gap-x-2 w-fit">
        <h1 className="flex items-baseline text-xl gap-x-2">
          Welcome to
          <span className="text-2xl font-semibold">Task Manager</span>
        </h1>
        <MdOutlineTaskAlt className="text-green-500 size-6" />
      </div>
      <div className="flex flex-col gap-y-2">
        <h3 className="text-lg font-semibold">What is Task Manager?</h3>
        <p>This is a simple app to manage your tasks.</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold">How to use Task Manager?</h3>
        <p>
          To use Task Manager, you need to create an account. Once you have an
          account, you can create and manage your tasks.
        </p>
      </div>
      <div className="flex flex-col gap-y-2">
        <h3 className="text-lg font-semibold">Features</h3>
        <p>Task Manager has the following features:</p>
        <ul className="list-disc list-inside">
          <li>Task Creation, Update, and Deletion</li>
          <li>Supabase Authentication integration</li>
          <li>Api Integration</li>
          <li>Management state with React Redux Toolkit</li>
          <li>Management routes with React Router</li>
          <li>Type checking and validation with Zod, Typescript and React Hook Form</li>
          <li>Custom hooks and custom components</li>
        </ul>
      </div>
      <div className="flex items-baseline gap-x-6">
        <h3 className="text-lg font-medium">Start using Task Manager</h3>
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

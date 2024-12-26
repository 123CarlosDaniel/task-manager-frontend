import { getTasks } from "@/services/taskService"
import { Task } from "@/types/task"
import { useEffect, useState } from "react"

const useTasks = (access_token?: string, refresh_token?: string) => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true)
      setError(null)
      try {
        const tasksData = await getTasks(access_token, refresh_token)
        setTasks(tasksData)
      } catch (error: any) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchTasks()
  }, [access_token, refresh_token])
  return {
    tasks,
    loading,
    error,
  }
}

export default useTasks

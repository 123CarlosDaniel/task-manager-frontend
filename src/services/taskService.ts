import apiClient from "@/services/apiClient"
import { Task } from "@/types/task"

export const getTasksService = async (
  access_token?: string,
  refresh_token?: string
): Promise<Task[]> => {
  try {
    const response = await apiClient.get("/tasks", {
      headers: {
        Authorization: `Bearer ${access_token}`,
        "x-refresh-token": `${refresh_token}`,
      },
    })
    return response.data
  } catch (error: any) {
    if (error.response) {
      const { status, data } = error.response
      console.error(`Error ${status}: ${data.error || data}`)
      throw new Error(data.error || "An error ocurred while fetching tasks.")
    }
    console.log("Network error:", error.message)
    throw new Error("Failed to connect to the server. Please try again later.")
  }
}

export const updateTaskService = async (
  id: string,
  taskData: Partial<Task>,
  accessToken?: string,
  refreshToken?: string
): Promise<Task> => {
  try {
    const response = await apiClient.put("/tasks/" + id, taskData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "x-refresh-token": `${refreshToken}`,
      },
    })
    return response.data[0]
  } catch (error: any) {
    if (error.response) {
      const { status, data } = error.response
      console.error(`Error ${status}: ${data.error || data}`)
      throw new Error(data.error || "An error ocurred while updating task.")
    }
    console.log("Network error:", error.message)
    throw new Error("Failed to connect to the server. Please try again later.")
  }
}

export const deleteTaskService = async (
  id: string,
  accessToken?: string,
  refreshToken?: string
): Promise<Partial<Task>> => {
  try {
    const response = await apiClient.delete("/tasks/" + id, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "x-refresh-token": `${refreshToken}`,
      },
    })
    return response.data
  } catch (error: any) {
    if (error.response) {
      const { status, data } = error.response
      console.error(`Error ${status}: ${data.error || data}`)
      throw new Error(data.error || "An error ocurred while deleting task.")
    }
    console.log("Network error:", error.message)
    throw new Error("Failed to connect to the server. Please try again later.")
  }
}

export const createTaskService = async (
  taskData: Partial<Task>,
  accessToken?: string,
  refreshToken?: string
): Promise<Task> => {
  try {
    const response = await apiClient.post("/tasks", taskData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "x-refresh-token": `${refreshToken}`,
      },
    })
    return response.data[0]
  } catch (error: any) {
    if (error.response) {
      const { status, data } = error.response
      console.error(`Error ${status}: ${data.error || data}`)
      throw new Error(data.error || "An error ocurred while creating task.")
    }
    console.log("Network error:", error.message)
    throw new Error("Failed to connect to the server. Please try again later.")
  }
}

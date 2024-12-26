import apiClient from "@/services/apiClient"
import { Task } from "@/types/task"

export const getTasks = async (access_token?: string, refresh_token?: string): Promise<Task[]> => {
  try{
    const response = await apiClient.get("/tasks", {
      headers: {
        "Authorization": `Bearer ${access_token}`,
        "x-refresh-token": `${refresh_token}`
      }
    })
    return response.data
  } catch(error: any) {
    if(error.response) {
      const {status, data} = error.response
      console.error(`Error ${status}: ${data.error || data}`)
      throw new Error(data.error || "An error ocurred while fetching tasks.")
    }
    console.log("Network error:" , error.message)
    throw new Error("Failed to connect to the server. Please try again later.")
  }
}
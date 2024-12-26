import { getTasksService, updateTaskService } from "@/services/taskService"
import { Task } from "@/types/task";
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchTasks = createAsyncThunk(
  "tasks/fetchTasks",
  async (
    {
      accessToken,
      refreshToken,
    }: { accessToken: string; refreshToken: string },
    thunkApi
  ) => {
    try {
      return await getTasksService(accessToken, refreshToken)
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
)

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async (
    {
      id,
      taskData,
      accessToken,
      refreshToken,
    }: {
      id: string
      taskData: Partial<Task>
      accessToken?: string
      refreshToken?: string
    },
    thunkApi
  ) => {
    try {
      return await updateTaskService(id, taskData, accessToken, refreshToken)
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
)
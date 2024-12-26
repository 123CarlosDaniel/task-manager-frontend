import { getTasks } from "@/services/taskService"
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
      return await getTasks(accessToken, refreshToken)
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
)

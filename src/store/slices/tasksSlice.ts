import { Task } from "@/types/task"
import { createSlice } from "@reduxjs/toolkit"
import { createTaskThunk, deleteTaskThunk, fetchTasks, updateTaskThunk } from "@/store/thunks/tasksThunks"

interface TasksState {
  tasks: Task[]
  loading: boolean
  error: string | null
}

const initialState: TasksState = {
  tasks: [],
  loading: false,
  error: null,
}

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    clearTasks(state) {
      state.tasks = []
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        ;(state.loading = true), (state.error = null)
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        ;(state.loading = false), (state.tasks = action.payload)
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        ;(state.loading = false), (state.error = action.payload as string)
      })
      .addCase(updateTaskThunk.fulfilled, (state, action) => {
        state.loading = false
        const updatedTask = action.payload
        const index = state.tasks.findIndex(
          (task) => task.id === updatedTask.id
        )
        if (index !== -1) {
          state.tasks[index] = updatedTask
        }
      })
      .addCase(updateTaskThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
      .addCase(deleteTaskThunk.fulfilled, (state, action) => {
        state.loading = false
        const deletedTaskId = action.payload.id!
        state.tasks = state.tasks.filter((task) => task.id != deletedTaskId)
      })
      .addCase(deleteTaskThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
      .addCase(createTaskThunk.fulfilled, (state, action) => {
        state.loading = false
        const createdTask = action.payload
        state.tasks.push(createdTask)
      })
      .addCase(createTaskThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export const { clearTasks } = tasksSlice.actions
export default tasksSlice.reducer

import { toast } from "@/hooks/useToast"
import { AppDispatch } from "@/store"
import { Task } from "@/types/task"
import { createTaskThunk, updateTaskThunk } from "@/store/thunks/tasksThunks"

export const handleUpdateTask = async (
  dispatch: AppDispatch,
  session: { access_token: string; refresh_token: string },
  task: Partial<Task>,
  taskData: Partial<Task>
) => {
  try {
    await dispatch(
      updateTaskThunk({
        id: task.id!,
        accessToken: session.access_token,
        refreshToken: session.refresh_token,
        taskData,
      })
    ).unwrap()
    toast({
      title: "Task updated",
      description: "Task updated successfully",
      variant: "success",
    })
  } catch (error: any) {
    toast({
      title: "Task update failed",
      description: error,
      variant: "destructive",
    })
  }
}

export const handleCreateTask = async (
  dispatch: AppDispatch,
  session: { access_token: string; refresh_token: string },
  taskData: Partial<Task>
) => {
  try{
    await dispatch(
      createTaskThunk({
      taskData,
      accessToken: session.access_token,
      refreshToken: session.refresh_token,
    })).unwrap()
    toast({
      title: "Task created",
      description: "Task created successfully",
      variant: "success",
    })
  } catch(error: any) {
    toast({
      title: "Task create failed",
      description: error,
      variant: "destructive",
    })
  }
}
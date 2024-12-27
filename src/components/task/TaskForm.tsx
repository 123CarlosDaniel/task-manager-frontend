import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { taskSchema } from "@/lib/zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Task } from "@/types/task"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import TaskState from "./TaskState"
import { DialogClose } from "@/components/ui/dialog"
import { useAppDispatch, useAppSelector } from "@/hooks/redux"
import { handleCreateTask, handleUpdateTask } from "@/store/handlers/taskFormHandler"

interface TaskFormProps {
  task?: Partial<Task>,
  mode?: "create" | "update" 
}

const TaskForm = ({ task = {}, mode = "update" }: TaskFormProps) => {
  const dispatch = useAppDispatch()
  const { session } = useAppSelector((state) => state.auth)

  const onSubmit = (data: z.infer<typeof taskSchema>) => {
    if(mode === "update") {
      handleUpdateTask(dispatch, session!, task, data)
    } else if(mode === "create") {
      handleCreateTask(dispatch, session!, data)
    }
  }

  const taskForm = useForm<z.infer<typeof taskSchema>>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: task.title || "",
      description: task.description || "",
      state: task.state || 0,
    },
  })

  return (
    <Form {...taskForm}>
      <form
        onSubmit={taskForm.handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <FormField
          control={taskForm.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex items-center gap-x-4">
              <FormLabel className="font-semibold">Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={taskForm.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">Description</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={taskForm.control}
          name="state"
          render={({ field }) => (
            <FormItem className="flex items-center gap-x-8">
              <FormLabel className="font-semibold">State</FormLabel>
              <FormControl>
                <Select
                  onValueChange={(v) => {
                    taskForm.setValue("state", Number(v))
                  }}
                  defaultValue={String(field.value)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value={"0"}>
                        <TaskState state={0} />
                      </SelectItem>
                      <SelectItem value={"1"}>
                        <TaskState state={1} />
                      </SelectItem>
                      <SelectItem value={"2"}>
                        <TaskState state={2} />
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-around">
          <Button type="submit" variant={"purple"}>Submit</Button>
          <DialogClose asChild>
            <Button variant={"destructive"} type="button">
              Cancel
            </Button>
          </DialogClose>
        </div>
      </form>
    </Form>
  )
}

export default TaskForm

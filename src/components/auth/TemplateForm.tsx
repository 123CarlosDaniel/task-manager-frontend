import { authSchema } from "@/lib/zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { Link } from "react-router"
import { IoEyeSharp } from "react-icons/io5";
import { HiMiniEyeSlash } from "react-icons/hi2";
import { useState } from "react"

const TemplateForm = ({
  onSubmit,
  loginWithProvider,
  label,
}: {
  onSubmit: (data: z.infer<typeof authSchema>) => void
  loginWithProvider: (provider: "google" | "github") => Promise<void>
  label: string
}) => {
  const [showPassword, setShowPassword] = useState(false)

  const loginForm = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  return (
    <div className="max-w-4xl">
      <Form {...loginForm}>
        <form
          onSubmit={loginForm.handleSubmit(onSubmit)}
          className="space-y-8 flex flex-col max-w-full sm:w-[500px] shadow-lg shadow-gray-300 p-4 rounded-md"
        >
          <h1 className="text-lg font-medium text-center">{label}</h1>
          <FormField
            control={loginForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={loginForm.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password </FormLabel>
                <FormControl>
                  <div className="flex w-full gap-x-2">
                    <Input placeholder="Enter your password" type={showPassword ? "text" : "password"} {...field} />
                    <Button variant={"outline"} size={"icon"}
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <HiMiniEyeSlash/> : <IoEyeSharp />}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="self-center w-fit"
            disabled={
              loginForm.formState.isSubmitting || !loginForm.formState.isValid
            }
          >
            Submit
          </Button>
          <div className="flex items-center w-full gap-x-2">
            <Button
              className="w-full"
              size={"lg"}
              variant={"outline"}
              onClick={() => loginWithProvider("google")}
              type="button"
            >
              <FcGoogle className="w-5 h-5" />
            </Button>
            <Button
              className="w-full"
              size={"lg"}
              variant={"outline"}
              onClick={() => loginWithProvider("github")}
              type="button"
            >
              <FaGithub className="w-5 h-5" />
            </Button>
          </div>
          <span className="text-base text-center">
            {label === "Login" ? "Don't have" : "Already have"} an account?{" "}
            <Link
              to={`/auth/${label === "Login" ? "register" : "login"}`}
              className="text-blue-500 underline"
            >
              {label === "Login" ? "Register" : "Login"} here!
            </Link>
          </span>
        </form>
      </Form>
    </div>
  )
}

export default TemplateForm

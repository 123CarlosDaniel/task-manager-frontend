import { useToast } from "@/hooks/useToast"
import {
  signInWithEmail,
  signInWithProvider,
  signUpWithEmail,
} from "@/services/auth"
import { useNavigate } from "react-router"

export const useAuth = () => {
  const { toast } = useToast()
  const navigate = useNavigate()

  const login = async ({
    email,
    password,
  }: {
    email: string
    password: string
  }) => {
    const { error } = await signInWithEmail(email, password)
    if (error) {
      toast({
        title: "Login Failed",
        description: error.message,
        variant: "destructive",
        duration: 3000,
      })
      return
    }
    toast({
      title: "Login Success",
      description: "You have been logged in successfully",
      variant: "success",
      duration: 3000,
    })
    await new Promise((res: any) => {
      setTimeout(() => {
        navigate("/")
        res(null)
      }, 1000)
    })
  }

  const register = async ({
    email,
    password,
  }: {
    email: string
    password: string
  }) => {
    const { error } = await signUpWithEmail(email, password)
    if (error) {
      toast({
        title: "Register Failed",
        description: error.message,
        variant: "destructive",
        duration: 3000,
      })
      return
    }
    toast({
      title: "Register Success",
      description: "You have been registered successfully",
      variant: "success",
      duration: 3000,
    })
    await new Promise((res: any) => {
      setTimeout(() => {
        navigate("/")
        res(null)
      }, 1000)
    })
  }

  const loginWithProvider = async (provider: "google" | "github") => {
    const { error } = await signInWithProvider(provider)
    if (error) {
      toast({
        title: "Login Failed",
        description: error.message,
        variant: "destructive",
        duration: 3000,
      })
    }
  }
  return { login, register, loginWithProvider }
}

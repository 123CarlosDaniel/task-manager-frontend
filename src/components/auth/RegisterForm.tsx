import { useAuth } from "@/hooks/useAuth"
import TemplateForm from "./TemplateForm"

const RegisterForm = () => {
  const { register, loginWithProvider } = useAuth()
  return (
    <TemplateForm
      label="Register"
      onSubmit={register}
      loginWithProvider={loginWithProvider}
    />
  )
}

export default RegisterForm

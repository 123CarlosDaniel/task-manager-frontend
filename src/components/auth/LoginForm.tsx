import { useAuth } from "@/hooks/useAuth"
import TemplateForm from "./TemplateForm"

const LoginForm = () => {
  const { login, loginWithProvider } = useAuth()
  return (
    <TemplateForm
      label="Login"
      onSubmit={login}
      loginWithProvider={loginWithProvider}
    />
  )
}

export default LoginForm

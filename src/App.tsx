import { Route, Routes } from "react-router"
import "./App.css"
import HomePage from "@/pages/home"
import LoginPage from "@/pages/login"
import TasksPage from "@/pages/tasks"
import AuthLayout from "@/layouts/AuthLayout"
import SignUpPage from "@/pages/signup"
import HomeLayout from "@/layouts/HomeLayout"
import PrivateRoute from "@/layouts/PrivateRoute"

function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route index element={<HomePage />} />
        <Route path="tasks" element={<PrivateRoute />}>
          <Route index element={<TasksPage />} />
        </Route>
      </Route>
      <Route path="auth" element={<AuthLayout />}>
        <Route index path="login" element={<LoginPage />} />
        <Route path="register" element={<SignUpPage />} />
      </Route>
    </Routes>
  )
}

export default App

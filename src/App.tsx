import { Route, Routes } from "react-router"
import "./App.css"
import HomePage from "@/pages/home"
import AuthLayout from "@/layouts/AuthLayout"
import HomeLayout from "@/layouts/HomeLayout"
import PrivateRoute from "@/layouts/PrivateRoute"
import React from "react"

const LoginPage = React.lazy(() => import("@/pages/login"))
const SignUpPage = React.lazy(() => import("@/pages/signup"))
const TasksPage = React.lazy(() => import("@/pages/tasks"))

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

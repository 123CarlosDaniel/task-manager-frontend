import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { BrowserRouter } from "react-router"
import { Toaster } from "@/components/ui/toaster"
import store from "@/store/index.ts"
import { initializeAuth } from "@/store/thunks/authThunks.ts"
import { Provider } from "react-redux"

store.dispatch(initializeAuth())

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </Provider>
  </StrictMode>
)

import { API_URL } from "@/lib/vars"
import axios from "axios"

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  }
})

export default apiClient
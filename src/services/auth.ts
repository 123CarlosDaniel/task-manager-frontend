import { supabase } from "@/supabase/client"

export const signInWithEmail = async (email: string, password: string) => {
  return await supabase.auth.signInWithPassword({ email, password })
}

export const signInWithProvider = async (provider: "google" | "github") => {
  return await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: "/tasks",
    },
  })
}

export const signUpWithEmail = async (email: string, password: string) => {
  return await supabase.auth.signUp({ email, password })
}

export const logOut = async () => {
  return await supabase.auth.signOut()
}

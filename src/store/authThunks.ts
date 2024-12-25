import { AppDispatch } from "@/store/store"
import { setLoading, setSession } from "@/store/authSlice"
import { supabase } from "@/supabase/client"

export const initializeAuth = () => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true))

  const {
    data: { session },
  } = await supabase.auth.getSession()

  dispatch(setSession(session))

  supabase.auth.onAuthStateChange((_event, session) => {
    dispatch(setSession(session))
    dispatch(setLoading(false))
  })

  dispatch(setLoading(false))
}

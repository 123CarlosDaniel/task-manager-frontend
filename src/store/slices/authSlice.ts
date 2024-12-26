import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { Session } from "@supabase/supabase-js";

interface AuthState {
  loading: boolean;
  session: Session | null;
}

const initialState: AuthState = {
  loading: true,
  session: null
}

const authSlice = createSlice({
  name: "auth", 
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setSession: (state, action: PayloadAction<Session | null>) => {
      state.session = action.payload
    }
  }
})

export const {setLoading, setSession} = authSlice.actions

export default authSlice.reducer
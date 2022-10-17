import { configureStore } from "@reduxjs/toolkit"
import userSlice from './auth/auth.reducer'

export const store = configureStore({
  reducer: {
    userRepository: userSlice.reducer
  }
})
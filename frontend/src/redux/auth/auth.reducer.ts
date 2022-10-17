import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthModel, UserModel } from "./auth.model";

const initialTodoState: AuthModel = {
  user: {
    "id": "",
    "username": "",
    "role": ""
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialTodoState,
  reducers: {
    setUser(state, action: PayloadAction<UserModel>) {
      console.log(action.payload, 'action.payload');
      state.user = action.payload;
    },
  }
})
export default authSlice;
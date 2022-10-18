import { fetchUser } from "@/services";
import { IResponseGetUser } from "@/types/response";
import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../appStore.type";
import userSlice from './auth.reducer'

export const userActions = userSlice.actions

export const getUserAction = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    console.log(getState().userRepository.user, " getState()");
    const response: IResponseGetUser = await fetchUser();
    dispatch(userActions.setUser(response.data.user))

  }

}
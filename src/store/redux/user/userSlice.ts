import { createAppSlice } from "store/createAppSlice"
import { UserData, UserSliceState } from "./types"
import { create } from "domain"
import { PayloadAction } from "@reduxjs/toolkit"

const userInitialState: UserSliceState = {
  users: [],
}

export const userSlice = createAppSlice({
  name: `USER`,
  initialState: userInitialState,
  reducers: create => ({
    addUser: create.reducer(
        //добавляется action потому, что нужно забрать данные из формы
      (state: UserSliceState, action: PayloadAction<UserData>) => {
        state.users = [...state.users, action.payload]
      },
    ),
  }),
  selectors: {
    users: (state: UserSliceState) => state.users,
  },
})

export const usersActions = userSlice.actions
export const userSelectors = userSlice.selectors

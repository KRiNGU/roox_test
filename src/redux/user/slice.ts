import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserInformation } from '../../models/models';

export interface UserState {
  users: IUserInformation[];
}

const initialState: UserState = {
  users: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<IUserInformation[]>) => {
      state.users = action.payload;
    },
  },
});

export const { setUsers } = userSlice.actions;

export default userSlice.reducer;

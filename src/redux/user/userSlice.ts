import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
  list: Array<object>;
}

const initialState: UserState = {
  list: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;

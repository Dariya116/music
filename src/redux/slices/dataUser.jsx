import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dataUser: '',
};

const dataUser = createSlice({
  name: 'dataUser',
  initialState,
  reducers: {
    setDataUser(state, action) {
      state.dataUser = action.payload;
    },
  },
});
export const { setDataUser } = dataUser.actions;
export default dataUser.reducer;

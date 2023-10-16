import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nameTrack: {},
};
const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    setNameTrack(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.nameTrack = action.payload;
    },
  },
});
export const { setNameTrack } = songSlice.actions;
export default songSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nameTrack: {},
  requestResponse: [],
  urlTrack: '',
};
const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    setNameTrack(state, action) {
      state.nameTrack = action.payload;
    },
    setRequestResponse(state, action) {
      state.requestResponse = action.payload;
    },
    setUrlTrack(state, action) {
      state.urlTrack = '';
      state.urlTrack = action.payload;
    },
  },
});
export const { setNameTrack, setRequestResponse, setUrlTrack } = songSlice.actions;
export default songSlice.reducer;

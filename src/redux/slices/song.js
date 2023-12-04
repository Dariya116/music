/* eslint-disable no-param-reassign */
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
      // eslint-disable-next-line no-param-reassign
      state.nameTrack = action.payload;
    },
    setRequestResponse(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.requestResponse = action.payload;
    },
    setUrlTrack(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.urlTrack = '';

      state.urlTrack = action.payload;
    },
  },
});
export const { setNameTrack, setRequestResponse, setUrlTrack } = songSlice.actions;
export default songSlice.reducer;

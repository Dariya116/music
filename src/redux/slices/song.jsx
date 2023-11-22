import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nameTrack: {},
  requestResponse: [],
  urlTrack: '',
  indexTrack: 0,
  icon: false,
  pulse:false,
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

    setIndexTrack(state, action) {
      state.indexTrack = action.payload;
    },
    setIcon(state, action) {
      state.icon = action.payload;
    },
    setPulse(state, action) {
      state.pulse = action.payload;
    },
  },
});
export const { setNameTrack, setRequestResponse, setUrlTrack, setIndexTrack, setIcon, setPulse } = songSlice.actions;
export default songSlice.reducer;

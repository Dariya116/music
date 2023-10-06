
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    nameTrack: "",
    authorTrack:""
   

}
const songSlice = createSlice ({
name: "song",
initialState,
reducers: {
    setNameTrack(state, action) {
     
       // eslint-disable-next-line no-param-reassign
       state.nameTrack = action.payload;

    },
    setAuthorTrack(state, action) {
       
        // eslint-disable-next-line no-param-reassign
        state.authorTrack = action.payload;
 
     }
}
})
export const { setNameTrack, setAuthorTrack } = songSlice.actions;
export default songSlice.reducer;
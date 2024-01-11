import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:"update",
    initialState:{
        value :{}
    },
    reducers:{
        updateRecp:(state,action)=>{
            state.value = action.payload
        },
    }
})
export const {updateRecp}=slice.actions;
export default slice.reducer
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:"reception",
    initialState:{
        value :[]
    },
    reducers:{
        receptions:(state,action)=>{
            state.value = action.payload
        },
        deletelist:(state,action)=>{
            state.value = action.payload
        },
    }
})
export const {receptions,deletelist}=slice.actions;
export default slice.reducer
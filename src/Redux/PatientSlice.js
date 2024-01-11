import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:"patient",
    initialState:{
        value :[]
    },
    reducers:{
        patientList:(state,action)=>{
            state.value = action.payload
        }
    }
})
export const {patientList}=slice.actions;
export default slice.reducer
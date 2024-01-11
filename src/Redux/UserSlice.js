import { createSlice } from "@reduxjs/toolkit";

const localvalues = JSON.parse(localStorage.getItem("userInfo")) 
const initialState = {
    value: localvalues || {token:undefined,isLogin:false,type:undefined,name:undefined}
}

const slice = createSlice({
    name:"user",
    initialState,
    reducers:{
        userReducer:(state,action)=>{
            state.value = action.payload
            localStorage.setItem("userInfo",JSON.stringify(action.payload))
        }
    }
})
export const {userReducer}=slice.actions;
export default slice.reducer
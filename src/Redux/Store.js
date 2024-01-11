import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import ReceptionReducer from "./ReceptionSlice";
import  patient  from "./PatientSlice";
import update from "./UpdateSlice"
const store = configureStore({
    reducer:{
        userInfo:userReducer,
        receptionInfo:ReceptionReducer,
        pateintinfo:patient,
        updateInfo:update,
    }
})
export default store;
import axios from "axios"

class WebAPI{
    PostAPI(url,data){
        return axios.post(url,data)
    }
    PostWithHeader(url,data,token){
        return axios.post(url,data,{
            headers:{
                Authorization: 'Bearer '+token
            }
        })
    }
    GetApiCall(url,token){
        return axios.get(url,{
            headers:{
                Authorization: 'Bearer '+token
            }
        })
    }
    PutApiCall(url,data,token){
        return axios.put(url,data,{
            headers:{
                Authorization: 'Bearer '+token
            }
        })
    }
}

const SERVER = "http://apps.codebetter.in:8082/clinic"

export const urls={
    DOCTOR_REGISTER : `${SERVER}/auth/doctor/save`,
    LOGIN : `${SERVER}/auth/login`,
    RECEPTION : `${SERVER}/api/reception/save`,
    RECEPTION_List : `${SERVER}/api/reception/lists`,
    RECEPTION_DELETE : `${SERVER}/api/reception/delete/`,
    RECEPTION_UPDATE : `${SERVER}/api/reception/updateReception/`,    
    PATIENT_LIST:`${SERVER}/api/patient/list`,
}

export default new WebAPI()
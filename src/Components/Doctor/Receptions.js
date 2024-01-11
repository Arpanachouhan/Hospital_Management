import { useDispatch, useSelector } from "react-redux"
import WebAPI, { urls } from "../../WebServices/WebAPI"
import { useEffect, useState } from "react"
import { deletelist, receptions } from "../../Redux/ReceptionSlice";
import { useNavigate } from "react-router-dom";
import { updateRecp } from "../../Redux/UpdateSlice";

export default function Receptions(){
    const doctor = useSelector(state=>state.userInfo.value)
    const reclist = useSelector(state=>state.receptionInfo.value)
    const [msg,setmsg]=useState();
    console.log(reclist);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const receptionList = async () =>{
        const response = await WebAPI.GetApiCall(urls.RECEPTION_List,doctor.token)
        console.log(response);
        if(response.data.status)
        {
            const res = dispatch(receptions(response.data.data))
            console.log(res);
        }
    }

    const deleteR = async(id)=>{
          const confirmm = window.confirm("Are you sure to delete this !")
          if(confirmm)
          {
            const URL = urls.RECEPTION_DELETE + id
            const response = await WebAPI.PutApiCall(URL,null,doctor.token)
            console.log(response);
            if(response.status)
            {
              const listt = reclist.filter(obj => obj.id != id)
              dispatch(deletelist(listt))
              setmsg(response.data.msg)
            }
            
          }
    }

    const EditRes = async (obj) =>{
      dispatch(updateRecp(obj))
      navigate("/updatereception")
    }

    useEffect(()=>{
        receptionList()
    },[])
    return<>
        <section className="contact_section layout_padding-bottom">
    <div className="container">
      <div className="heading_container">
        <h2>
            Receptions
        </h2>
        <br></br>
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Sr. No</th>
                    <th>Name</th>
                    <th>Reception Address</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Password</th>
                    <th>status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {reclist.map((obj,index)=>{
                    return<tr>
                        <td>{index+1}</td>
                        <td>{obj.name}</td>
                        <td>{obj.raddress}</td>
                        <td>{obj.email}</td>
                        <td>{obj.phoneNumber}</td>
                        <td>{obj.password}</td>
                        <td>{obj.activeStatus ? <input type="checkbox" checked></input>:<input type="checkbox"></input>}</td>
                        <td><button className="btn btn-success btn-sm" onClick={()=>EditRes(obj)}>Edit</button>
                        &nbsp;
                        <button className="btn btn-danger btn-sm" onClick={()=>deleteR(obj.id)}>Delete</button></td>
                    </tr>
                })}
            </tbody>
        </table>
      </div>
      <div className="row">
        <div className="col-md-7">
          <div className="form_container">
            
          </div>
        </div>
        <div className="col-md-5">
          {/* <div className="img-box">
            <img src="images/contact-img.jpg" alt=""/>
          </div> */}
        </div>
        &nbsp;&nbsp;
        <b className="text-success">{msg}</b>
      </div>
    </div>
  </section>
    </>
}
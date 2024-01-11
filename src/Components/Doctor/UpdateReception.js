import { useRef, useState } from "react"
import { useSelector } from "react-redux"
import WebAPI, { urls } from "../../WebServices/WebAPI"

export default function UpdateReception(){
    const [msg,setmsg] = useState("")
    const doctor = useSelector(state=> state.userInfo.value)

    const rec = useSelector(state=>state.updateInfo.value)
    const nameBox = useRef()
    const phoneBox = useRef()
    const passBox = useRef()

    const rupdate = async (event)=>{
        event.preventDefault();
        var name = nameBox.current.value
        var phone = phoneBox.current.value
        var oldpassword = passBox.current.value

        var obj = { name:name, phoneNumber:phone,password:oldpassword}
        const URL = urls.RECEPTION_UPDATE + rec.id
        const response = await WebAPI.PutApiCall(URL,obj,doctor.token)
        console.log(response);
        if(response.status)
        {
            setmsg(response.data.msg)
            event.target.reset()
        }

    }

    return<>
        <section className="contact_section layout_padding-bottom">
    <div className="container">
      <div className="heading_container">
        <h2>
            Save New Receptions
        </h2>
      </div>
      <div className="row">
        <div className="col-md-7">
          <div className="form_container">
            <form onSubmit={rupdate}>
              <div>
                <input type="text" placeholder="Full Name" defaultValue={rec.name} ref={nameBox} />
              </div>
              <div>
                <input type="text" placeholder="Phone Number" defaultValue={rec.phoneNumber} ref={phoneBox} />
              </div>
              <div>
                <input type="password" placeholder="Enter Password" defaultValue={rec.password} ref={passBox} />
              </div>
              <div className="btn_box">
                <button>
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-5">
          <div className="img-box">
            <img src="images/contact-img.jpg" alt=""/>
          </div>
        </div>
        &nbsp;&nbsp;
        <b className="text-success">{msg}</b>
      </div>
    </div>
  </section>
    </>
}
import { useRef, useState } from "react"
import { urls } from "../WebServices/WebAPI"
import WebAPI from "../WebServices/WebAPI"

export default function Register(){

    const [msg,setmsg] = useState("")

    const nameBox = useRef()
    const phoneBox = useRef()
    const emailBox = useRef()
    const passBox = useRef()

    const register = async(event)=>{
        event.preventDefault();
        var obj ={
            name: nameBox.current.value,
            phoneNumber: phoneBox.current.value,
            email:emailBox.current.value,
            password:passBox.current.value
        }
        const response = await WebAPI.PostAPI(urls.DOCTOR_REGISTER,obj)
        console.log(response);
        if(response.data.status)
        {
            setmsg(response.data.msg)
        }
    }

    return<>
    <section className="contact_section layout_padding-bottom">
    <div className="container">
      <div className="heading_container">
        <h2>
            Register Here
        </h2>
      </div>
      <div className="row">
        <div className="col-md-7">
          <div className="form_container">
            <form onSubmit={register}>
              <div>
                <input type="text" placeholder="Full Name" ref={nameBox} />
              </div>
              <div>
                <input type="text" placeholder="Phone Number" ref={phoneBox} />
              </div>
              <div>
                <input type="email" placeholder="Email" ref={emailBox} />
              </div>
              <div>
                <input type="password" placeholder="Enter Password" ref={passBox} />
              </div>
              <div className="btn_box">
                <button>
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-5">
          <div className="img-box">
            <img src="images/DOCTOR.png" alt=""/>
          </div>
        </div>
        &nbsp;&nbsp;
        <b className="text-success">{msg}</b>
      </div>
    </div>
  </section>
    </>
}
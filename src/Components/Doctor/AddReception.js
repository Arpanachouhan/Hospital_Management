import { useRef, useState } from "react"
import WebAPI, { urls } from "../../WebServices/WebAPI"
import { useSelector } from "react-redux"

export default function AddReception(){

    const [msg,setmsg] = useState("")
    const doctor = useSelector(state=> state.userInfo.value)
    const nameBox = useRef()
    const phoneBox = useRef()
    const emailBox = useRef()
    const passBox = useRef()
    const addBox = useRef()

    const rsave = async (event)=>{
        event.preventDefault();
        var name = nameBox.current.value
        var phone = phoneBox.current.value
        var mail = emailBox.current.value
        var password = passBox.current.value
        var address = addBox.current.value

        var obj = { name:name, phoneNumber:phone,email:mail,password:password,raddress:address}

        const response = await WebAPI.PostWithHeader(urls.RECEPTION,obj,doctor.token)
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
            <form onSubmit={rsave}>
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
              <div>
                <input type="text" placeholder="Enter Address" ref={addBox} />
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
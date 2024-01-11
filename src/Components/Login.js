import { useRef } from "react"
import WebAPI, { urls } from "../WebServices/WebAPI"
import { useDispatch } from "react-redux"
import { userReducer } from "../Redux/UserSlice"
import { useNavigate } from "react-router-dom"

export default function Login(){

    const emailBox = useRef()
    const passwordBox = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const login = async (event)=>{
      event.preventDefault()
      var obj = {
        email:emailBox.current.value,
        password:passwordBox.current.value
      }

      const response = await WebAPI.PostAPI(urls.LOGIN,obj)
      console.log(response);
      if(response.status)
      {
        if(response.data.type=="doctor")
        {  
            const data = dispatch(userReducer({token:response.data.msg, isLogin:true, type:response.data.type, name:response.data.data.name}))
            console.log(data);
            navigate("/doctor")
        }
        if(response.data.type=="reception")
        {  
            const data = dispatch(userReducer({token:response.data.msg, isLogin:true, type:response.data.type, name:response.data.data.name}))
            console.log(data);
            navigate("/reception")
        }
    }
  }

    return<>
    <section className="contact_section layout_padding-bottom">
    <div className="container">
      <div className="heading_container">
        <h2>
          Login Here
        </h2>
      </div>
      <div className="row">
        <div className="col-md-7">
          <div className="form_container">
            <form onSubmit={login}>
              <div>
                <input type="email" placeholder="Enter Email" ref={emailBox}/>
              </div>
              <div>
                <input type="password" placeholder="Enter Password" ref={passwordBox} />
              </div>
              <div className="btn_box">
                <button>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-5">
          <div className="img-box">
            <img src="images/REGISTER.webp" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
}
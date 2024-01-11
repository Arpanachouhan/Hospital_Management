import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { userReducer } from '../Redux/UserSlice';

export default function Nav() {

  const user = useSelector(state => state.userInfo.value)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = ()=>{
    dispatch(userReducer({value:{token:undefined,isLogin:false,type:undefined,name:undefined}}))
    navigate("/")
  }
  return (
    <div>
      <header className="header_section">
        <div className="header_top">
          <div className="container">
            <div className="contact_nav">
              {/* <a href="/">
            </a> */}
              {/* <a href="/">
            </a>
            <a href="/">
            </a> */}
            </div>
          </div>
        </div>
        <div className="header_bottom">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <a className="navbar-brand" href="index.html">
                <img src="images/logo.png" alt="" />
              </a>


              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className=""> </span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="d-flex mr-auto flex-column flex-lg-row align-items-center">
                  <ul className="navbar-nav  ">
                    {user.isLogin ?
                      <>
                        {user.type == "doctor" ?
                          <>
                            <li className="nav-item active">
                              <Link className="nav-link" to="addreception">Add Reception <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link" to="/receptions">Reception Details</Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link" to="/appointments">Patient Details</Link>
                            </li>
                            {/* <b style={{cursor:"pointer",color:"white"}}>{logout}</b> */}
                            <button onClick={logout}>Logout</button>
                          </> : ""}
                        {user.type == "reception" ? <>
                          <li className="nav-item active">
                            <Link className="nav-link" to="/addpatients">Add Patients <span className="sr-only">(current)</span></Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="/patient">Patient Details</Link>
                          </li>

                          {/* <b style={{cursor:"pointer",color:"white"}}>{logout}</b> */}
                          <button onClick={logout}>Logout</button>
                        </> : ""}
                      </> :
                      <>
                        <li className="nav-item active">
                          <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="about"> About</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="treatment">Treatment</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="testimonial">Testimonial</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="contact">Contact Us</Link>
                        </li>
                      </>}
                  </ul>
                </div>
                <div className="quote_btn-container">
                  <Link to="login">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <span>
                      Login
                    </span>
                  </Link>
                  <Link to="register">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <span>
                      Register
                    </span>
                  </Link>
                  <form className="form-inline">
                    <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

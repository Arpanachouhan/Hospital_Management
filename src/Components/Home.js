import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div>
          <section className="slider_section ">
      <div className="dot_design">
        <img src="images/dots.png" alt=""/>
      </div>
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container ">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    {/* <div className="play_btn">
                      <button>
                        <i className="fa fa-play" aria-hidden="true"></i>
                      </button>
                    </div> */}
                    <h1>
                      Mico <br/>
                      <span>
                        Hospital
                      </span>
                    </h1>
                    <p>
                      when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                    </p>
                    <a href="/">
                      Contact Us
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="images/slider-img.jpg" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <div className="play_btn">
                      <button>
                        <i className="fa fa-play" aria-hidden="true"></i>
                      </button>
                    </div>
                    <h1>
                      Mico <br/>
                      <span>
                        Hospital
                      </span>
                    </h1>
                    <p>
                      when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                    </p>
                    <a href="/">
                      Contact Us
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="images/slider-img.jpg" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <div className="play_btn">
                      <button>
                        <i className="fa fa-play" aria-hidden="true"></i>
                      </button>
                    </div>
                    <h1>
                      Mico <br/>
                      <span>
                        Hospital
                      </span>
                    </h1>
                    <p>
                      when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                    </p>
                    <a href="/">
                      Contact Us
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="images/slider-img.jpg" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel_btn-box">
          <a className="carousel-control-prev" href="#customCarousel1" role="button" data-slide="prev">
            <img src="images/prev.png" alt=""/>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#customCarousel1" role="button" data-slide="next">
            <img src="images/next.png" alt=""/>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>

    <section className="book_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col">
          <form>
            <h4>
              BOOK <span>APPOINTMENT</span>
            </h4>
            <div className="form-row ">
              <div className="form-group col-lg-4">
                <label for="inputPatientName">Patient Name </label>
                <input type="text" className="form-control" id="inputPatientName" placeholder=""/>
              </div>
              <div className="form-group col-lg-4">
                <label for="inputDoctorName">Doctor's Name</label>
                <select name="" className="form-control wide" id="inputDoctorName">
                  <option value="Normal distribution ">Normal distribution </option>
                  <option value="Normal distribution ">Normal distribution </option>
                  <option value="Normal distribution ">Normal distribution </option>
                </select>
              </div>
              <div className="form-group col-lg-4">
                <label for="inputDepartmentName">Department's Name</label>
                <select name="" className="form-control wide" id="inputDepartmentName">
                  <option value="Normal distribution ">Normal distribution </option>
                  <option value="Normal distribution ">Normal distribution </option>
                  <option value="Normal distribution ">Normal distribution </option>
                </select>
              </div>
            </div>
            <div className="form-row ">
              <div className="form-group col-lg-4">
                <label for="inputPhone">Phone Number</label>
                <input type="number" className="form-control" id="inputPhone" placeholder="XXXXXXXXXX"/>
              </div>
              <div className="form-group col-lg-4">
                <label for="inputSymptoms">Symptoms</label>
                <input type="text" className="form-control" id="inputSymptoms" placeholder=""/>
              </div>
              <div className="form-group col-lg-4">
                <label for="inputDate">Choose Date </label>
                <div className="input-group date" id="inputDate" data-date-format="mm-dd-yyyy">
                  <input type="text" className="form-control" readonly/>
                  <span className="input-group-addon date_icon">
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="btn-box">
              <button type="submit" className="btn ">Submit Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
      </div>
    );
  }
}

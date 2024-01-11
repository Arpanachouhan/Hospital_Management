import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import WebAPI, { urls } from "../../WebServices/WebAPI";
import { patientList } from "../../Redux/PatientSlice";

export default function ViewAppointments() {
  const doctor = useSelector(state => state.userInfo.value)
  const patlist = useSelector(state => state.pateintinfo.value)
  console.log(patlist);

  const dispatch = useDispatch();

  const patients = async () => {
    const response = await WebAPI.GetApiCall(urls.PATIENT_LIST, doctor.token)
    console.log(response);
    if (response.data.status) {
      const res = dispatch(patientList(response.data.data))
      console.log(res);
    }
  }
  useEffect(() => {
    patients()
  }, [])
  return <>
    <section className="contact_section layout_padding-bottom">
      <div className="container">
        <div className="heading_container">
          <h2>
            Appointments
          </h2>
          <br></br>

          <div className="row mb-5 mt-3">
            <div className="col-md-4">
              <button className="btn btn-primary btn-sm">Active patients</button>
              {/* &nbsp;&nbsp; */}
            </div>
            <div className="col-md-4">
              <input className="form-control" placeholder="Search"></input>
              {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
            </div>
            {/* &nbsp;&nbsp;&nbsp;&nbsp; */}
            <div className="col-md-4">
              <button className="btn btn-secondary btn-sm">Inactive patients</button>
            </div>
          </div>

          <table className="table table-bordered table-striped table-hover">
            <thead>
              <tr>
                <th>Sr. No</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Mobile</th>
                <th>Diagonosis</th>
                <th>Appointment Date</th>
                <th>Appointment Time</th>
                <th>Reception Address</th>
                <th>status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {patlist.map((obj, index) => {
                return <tr>
                  <td>{index + 1}</td>
                  <td>{obj.name}</td>
                  <td>{obj.sex}</td>
                  <td>{obj.age}</td>
                  <td>{obj.phoneNumber}</td>
                  <td>{obj.daignosis}</td>
                  <td>{obj.appointmentdate}</td>
                  <td>{obj.time}</td>
                  <td>{obj.address.raddress}</td>
                  <td>{obj.activeStatus ? <input type="checkbox" checked></input> : <input type="checkbox"></input>}</td>
                  <td><button className="btn btn-success btn-sm">Edit</button>
                    &nbsp;
                    <button className="btn btn-danger btn-sm">Delete</button></td>
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
          <b className="text-success">{""}</b>
        </div>
      </div>
    </section>
  </>
}
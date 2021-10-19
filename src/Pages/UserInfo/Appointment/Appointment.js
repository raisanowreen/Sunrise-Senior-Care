import React from 'react';
import { Link } from 'react-router-dom';

const Appointment = () => {
    return (
        <div className="m-5 bg-primary p-5">
                        <h3 className="text-dark fw-bold text-center mt-5 mb-5" id="services">Please Fill up the Form</h3>  

            <div class="row g-2 d-block w-50 mx-auto">
  <div class="col-md">
    <div class="form-floating">
      <input type="text" class="form-control" id="floatingInputGrid"/>
      <label for="floatingInputGrid">Patient Name</label>
    </div>
  </div>
  <div class="col-md">
    <div class="form-floating">
      <input type="number" class="form-control" id="floatingInputGrid"/>
      <label for="floatingInputGrid">Phone Number</label>
    </div>
  </div>
  <div class="col-md">
    <div class="form-floating">
      <input type="text" class="form-control" id="floatingInputGrid"/>
      <label for="floatingInputGrid">Patient's age</label>
    </div>
  </div>
  <div class="col-md">
    <div class="form-floating">
      <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
        <option selected>Dr. Joshi</option>
        <option value="1">Dr. Rehana</option>
        <option value="2">Dr. Steve</option>
        <option value="3">Dr. Melani</option>
      </select>
      <label for="floatingSelectGrid">Select Doctor</label>
    </div>
  </div>
  <div class="col-md">
    <div class="form-floating">
      <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
        <option selected>This is my first time</option>
        <option value="1">I have already came here.</option>
      </select>
      <label for="floatingSelectGrid">Select Options</label>
    </div>
  </div>
  <div class="col-md">
    <div class="form-floating">
      <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
        <option selected>First Week</option>
        <option value="1">Second Week</option>
        <option value="2">Third Week</option>
        <option value="3">Fourth Week</option>
      </select>
      <label for="floatingSelectGrid">Select Week</label>
    </div>
  </div>
</div>
<div className="d-flex justify-content-center mt-4">
<Link to="/confirm"><button type="button" class="btn btn-warning">Confirm Appointment</button></Link>

</div>
        </div>
    );
};

export default Appointment;
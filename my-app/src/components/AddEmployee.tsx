import React, { useEffect, useState } from 'react';
import AddButton from "./Button";
import TextInput from "./TextInput";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/Store";
import { addEmployee, fetchEmployees, getOldEmployee } from "../redux/employeeSlice";

interface EmployeeDetails {
    employeeId: string;
    firstName: string;
    lastName: string;
    dob: string;
    language: string;
    email: string;
    phone: string;
    address: string;
    dateOfJoining: string;
    jobTitle: string;
    department: string;
  }

const obj = {
  color: "#fff",
  font: "50px",
  class: "btn btn-warning me-5",
};

const AddEmployee: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [imagePath, setImagePath] = useState<File | null>(null);
    const [employeeDetails, setEmployeeDetails] = useState<EmployeeDetails>({
        employeeId: "",
        firstName: "",
        lastName: "",
        dob: "",
        language: "",
        email: "",
        phone: "",
        address: "",
        dateOfJoining: "",
        jobTitle: "",
        department: "",
      });
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log(file.name, "filename");
      setImagePath(file);
    }
  };
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
        let response =  await dispatch(addEmployee({ employeeDetails, imagePath })).unwrap();
           const offcanvasElement = document.getElementById('offcanvasRight');
           if (offcanvasElement) {
             const offcanvas = (window as any).bootstrap.Offcanvas.getInstance(offcanvasElement);
             if (offcanvas) {
               offcanvas.hide();
             }
           }
           console.log(response)
         } catch (error) {
           console.error("Error adding employee:", error);
         }
  }

  return (
    <div
    className="offcanvas offcanvas-end"
    style={{ width: "70%" }}
    tabIndex={-1}
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div className="offcanvas-header">
      <h5 id="offcanvasRightLabel">Add New Employee</h5>
      <button
        type="button"
        className="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div className="offcanvas-body">
      <div className="ps-4">
        <div>
          <h6>General Information</h6>
        </div>
        <div className="pt-2">
          <img src={''} alt="" />
          <label className="btn btn-warning">
            Upload Photo
            <input
              type="file"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
          </label>
        </div>
        <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3 mt-3 pe-5">
          <div className="col">
            <TextInput
              type="text"
              label="Employee ID"
              id="employeeId"
              value={employeeDetails.employeeId}
              onChange={(e) =>
                setEmployeeDetails({
                  ...employeeDetails,
                  employeeId: e.target.value,
                })
              }
            />
          </div>
          <div className="col">
            <TextInput
              type="text"
              label="First Name"
              id="firstName"
              value={employeeDetails.firstName}
              onChange={(e) =>
                setEmployeeDetails({
                  ...employeeDetails,
                  firstName: e.target.value,
                })
              }
            />
          </div>
          <div className="col">
            <TextInput
              type="text"
              label="Last Name"
              id="lastName"
              value={employeeDetails.lastName}
              onChange={(e) =>
                setEmployeeDetails({
                  ...employeeDetails,
                  lastName: e.target.value,
                })
              }
            />
          </div>
          <div className="col">
            <TextInput
              type="text"
              label="Date Of Birth"
              id="dob"
              value={employeeDetails.dob}
              onChange={(e) =>
                setEmployeeDetails({
                  ...employeeDetails,
                  dob: e.target.value,
                })
              }
            />
          </div>
          <div className="col">
            <label htmlFor="language">Language</label>
            <select
              className="mt-2 form-control"
              name="language"
              id="language"
              value={employeeDetails.language}
              onChange={(e) =>
                setEmployeeDetails({
                  ...employeeDetails,
                  language: e.target.value,
                })
              }
            >
              <option value="">Select Language</option>
              <option value="1">Language 1</option>
              <option value="2">Language 2</option>
              <option value="3">Language 3</option>
              <option value="4">Language 4</option>
              <option value="5">Language 5</option>
            </select>
          </div>
          <div className="col">
            <TextInput
              type="text"
              label="Email"
              id="email"
              value={employeeDetails.email}
              onChange={(e) =>
                setEmployeeDetails({
                  ...employeeDetails,
                  email: e.target.value,
                })
              }
            />
          </div>
          <div>
            <h6>Contact Information</h6>
          </div>
        </div>
        <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-2 mt-3">
          <div className="col-lg-6 col-md-5 col">
            <TextInput
              type="text"
              label="Address"
              id="address"
              value={employeeDetails.address}
              onChange={(e) =>
                setEmployeeDetails({
                  ...employeeDetails,
                  address: e.target.value,
                })
              }
            />
          </div>
          <div className="col-lg-4 col-md-4 col">
            <TextInput
              type="text"
              label="Phone"
              id="phone"
              value={employeeDetails.phone}
              onChange={(e) =>
                setEmployeeDetails({
                  ...employeeDetails,
                  phone: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="mt-3">
          <h6>Employee Information</h6>
        </div>
        <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3 mt-3 pe-5">
          <div className="col">
            <TextInput
              type="text"
              label="Date Of Joining"
              id="dateOfJoining"
              value={employeeDetails.dateOfJoining}
              onChange={(e) =>
                setEmployeeDetails({
                  ...employeeDetails,
                  dateOfJoining: e.target.value,
                })
              }
            />
          </div>
          <div className="col">
            <TextInput
              type="text"
              label="Job Title"
              id="jobTitle"
              value={employeeDetails.jobTitle}
              onChange={(e) =>
                setEmployeeDetails({
                  ...employeeDetails,
                  jobTitle: e.target.value,
                })
              }
            />
          </div>
          <div className="col">
            <TextInput
              type="text"
              label="Department"
              id="department"
              value={employeeDetails.department}
              onChange={(e) =>
                setEmployeeDetails({
                  ...employeeDetails,
                  department: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-outline-warning me-2">
            Cencel
          </button>
          <AddButton
            onClick={handleSubmit}
            type="button"
            label={"+ Add New"}
            obj={obj}
          />
        </div>
      </div>
    </div>
  </div>
  );
};

export default AddEmployee;

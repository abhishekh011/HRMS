import React, { useEffect, useState } from 'react';
import AddButton from "./Button";
import TextInput from "./TextInput";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/Store";
import { fetchEmployees, getOldEmployee, updateDetails } from "../redux/employeeSlice";

interface SelectedEmployee {
  eid: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  dor?: string;
  jobTitle?: string;
  image: string;
}

interface EditEmployeeProps {
  selectedEmployee2: SelectedEmployee;
}

const obj = {
  color: "#fff",
  font: "50px",
  class: "btn btn-warning me-5",
};

const EditEmployee: React.FC<EditEmployeeProps> = ({ selectedEmployee2}) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [imagePath, setImagePath] = useState<File | null>(null);
  const [selectedEmployee, setSelectedEmployee] = useState<any>({});
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log(file.name, "filename");
      setImagePath(file);
    }
  };


   useEffect(()=>{
    setSelectedEmployee(selectedEmployee2)
   },[selectedEmployee2])


  const handleAditEmployeeDetails = async (event: React.FormEvent) => {
    event.preventDefault();
  
    try {
   let response =  await dispatch(updateDetails({ selectedEmployee, imagePath })).unwrap();
      const offcanvasElement = document.getElementById('offcanvasRight2');
      if (offcanvasElement) {
        const offcanvas = (window as any).bootstrap.Offcanvas.getInstance(offcanvasElement);
        if (offcanvas) {
          offcanvas.hide();
          navigate('/EmployeeRecords');
        }
      }
      console.log(response)
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  return (
    <div
      className="offcanvas offcanvas-end"
      style={{ width: "70%" }}
      tabIndex={-1}
      id="offcanvasRight2"
      aria-labelledby="offcanvasRightLabel"
    >
      <div className="offcanvas-header">
        <h5 id="offcanvasRightLabel">Edit Employee Details</h5>
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
            <img
              style={{ height: '100px', width: '100px', borderRadius: '50%' }}
              src={selectedEmployee.image || '/path/to/default/image.png'}
              alt="Profile"
            />
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
                value={selectedEmployee.eid || ""}
                onChange={() => alert("eid not change")}
              />
            </div>
            <div className="col">
              <TextInput
                type="text"
                label="First Name"
                id="firstName"
                value={selectedEmployee.firstName || ''}
                onChange={(e) =>
                  setSelectedEmployee({
                    ...selectedEmployee,
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
                value={selectedEmployee.lastName || ''}
                onChange={(e) =>
                  setSelectedEmployee({
                    ...selectedEmployee,
                    lastName: e.target.value,
                  })
                }
              />
            </div>
            <div className="col">
              <TextInput
                type="text"
                label="Email"
                id="email"
                value={selectedEmployee.email || ''}
                onChange={(e) =>
                  setSelectedEmployee({
                    ...selectedEmployee,
                    email: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div>
            <h6>Contact Information</h6>
          </div>
          <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-2 mt-3">
            <div className="col-lg-4 col-md-4 col">
              <TextInput
                type="text"
                label="Phone"
                id="phone"
                value={selectedEmployee.phone || ''}
                onChange={(e) =>
                  setSelectedEmployee({
                    ...selectedEmployee,
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
                value={selectedEmployee.dor || ''}
                onChange={(e) =>
                  setSelectedEmployee({
                    ...selectedEmployee,
                    dor: e.target.value,
                  })
                }
              />
            </div>
            <div className="col">
              <TextInput
                type="text"
                label="Job Title"
                id="jobTitle"
                value={selectedEmployee.jobTitle || ''}
                onChange={(e) =>
                  setSelectedEmployee({
                    ...selectedEmployee,
                    jobTitle: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <AddButton
              onClick={handleAditEmployeeDetails}
              type="button"
              label="Save"
              obj={obj}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEmployee;

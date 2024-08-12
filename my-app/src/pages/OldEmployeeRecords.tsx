import "../App.css";
import "../assets/style/OldEmployeeRecords.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import AddButton from "../components/Button";
import { GetImage } from "../assets/image";
import TextInput from "../components/TextInput";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
interface oldEmployeeRecordsProps {
  isSidebarClosed: boolean;
  handleSidebarToggle: () => void;
  HeaderLavel: string;
}
const obj = {
  color: "#fff",
  font: "50px",
  class: "btn btn-warning me-5",
};
const obj2 = {
  color: "#fff",
  font: "50px",
  class: "btn btn-warning ms-3",
};

const OldEmployeeRecords: React.FC<oldEmployeeRecordsProps> = ({
  isSidebarClosed,
  handleSidebarToggle,
  HeaderLavel,
}) => {
  const navigate = useNavigate();
  const [oldEmployees , setOldEmployees] = useState<any>();
  const [employeeId, setEmployeeId] = useState<any>('');
  const [firstName, setFirstName] = useState<string>("");
  const [LastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>();
  const [dataOfResigning, setDateOfResigning] = useState<string>("");
  const [jobTitle, setJobTitle] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };
  useEffect(() => {
    const getOldEmployee = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3002/employee/getOldEmployee"
        );
        setOldEmployees(response.data.employees);
      } catch (error) {
        console.log("Error fetching employees:", error);
      }
    };

    getOldEmployee();
  }, []);
  console.log(oldEmployees);
  
  return (
    <>
      <div className="d-flex">
        <Sidebar isSidebarClosed={isSidebarClosed} />
        <div className={`appDiv ${isSidebarClosed ? "close" : ""}`}>
          <Header
            handleSidebarToggle={handleSidebarToggle}
            HeaderLevel={HeaderLavel}
          />
          <div className="d-flex justify-content-end mt-4">
            <div
              className="offcanvas offcanvas-end"
              style={{ width: "70%" }}
              tabIndex={-1}
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div className="offcanvas-header">
                <h5 id="offcanvasRightLabel">Add Old Employee Records</h5>
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
                    <img src={GetImage.Profile} alt="" />
                    <AddButton
                      onClick={handleSubmit}
                      type="button"
                      label={"Upload Photo"}
                      obj={obj2}
                    />
                  </div>
                  <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3 mt-3 pe-5">
                    <div className="col">
                      <TextInput
                        type="text"
                        label="Employeeid"
                        id="name"
                        value={employeeId}
                        onChange={(e) => setEmployeeId(e.target.value)}
                      />
                    </div>
                    <div className="col">
                      <TextInput
                        type="text"
                        label="First Name"
                        id="name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div className="col">
                      <TextInput
                        type="text"
                        label="Last Name"
                        id="name"
                        value={LastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                    <div className="col">
                      <TextInput
                        type="text"
                        label="Email"
                        id="name"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mt-3">
                    <h6>Contact Information</h6>
                  </div>
                  <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-2 mt-3">
                    <div className="col-lg-4 col-md-4 col">
                      <TextInput
                        type="text"
                        label="Phone"
                        id="name"
                        value={email}
                        onChange={(e) => setPhone(e.target.value)}
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
                        label="Date Of Resigning"
                        id="dateOfResigning"
                        value={dataOfResigning}
                        onChange={(e) => setDateOfResigning(e.target.value)}
                      />
                    </div>
                    <div className="col">
                      <TextInput
                        type="text"
                        label="Job Title"
                        id="jobTitle"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-end mt-2">
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
            <div
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <AddButton
                onClick={handleSubmit}
                type="button"
                label={"+ Add New"}
                obj={obj}
              />
            </div>
          </div>
          <div className="mt-5 px-5">
            <table className="table  table-light table-hover">
              <thead className="table-td1">
                <tr>
                  <th className="ps-4">Name</th>
                  <th>Position</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Date Of Resing</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="table-td2">
                {oldEmployees?.map((user?:any, index?:any) => {
                  const collapseId = `collapse${index}`;
                  return (
                    <>
                      <tr  key={index}>
                        <td>
                          <img style={{height:'50px',width:'50px',borderRadius:'50%'}} src={user.image} alt="" />
                          {user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1)}
                        </td>
                        <td>{user.jobTitle}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.dor}</td>
                        <td className="dropdown">
                          <span
                            className=""
                            id="dropdownMenuLink"
                            data-bs-toggle="dropdown"
                            style={{ cursor: "pointer" }}
                          >
                            ...
                          </span>
                          <ul
                            className="dropdown-menu edit-remove"
                            aria-labelledby="dropdownMenuLink"
                          >
                            <li>
                              <a className="dropdown-item"  onClick={()=>navigate('/FullEmployeeProfile', { state: { user } })}><i className="fa fa-pen"></i>
                                edit
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Remove
                              </a>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default OldEmployeeRecords;

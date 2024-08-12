import "react-circular-progressbar/dist/styles.css";
import "../App.css";
import { GetImage } from "../assets/image";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import AddButton from "../components/Button";
import { useEffect, useState } from "react";
import TextInput from "../components/TextInput";
import axios from "axios";
interface DashboardProps {
  isSidebarClosed: boolean;
  handleSidebarToggle: () => void;
  HeaderLavel: string;
}
interface SalaryEmployee {
  eid: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  status: string;
  salary: string;
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
const SalarySheet: React.FC<DashboardProps> = ({
  isSidebarClosed,
  handleSidebarToggle,
  HeaderLavel,
}) => {
  const [salaryEmployees, setSalaryEmployees] = useState<any>([]);
  const [addSalaryEmployee, setAddSalaryEmployee] = useState<SalaryEmployee>({
    eid: "",
    firstName: "",
    lastName: "",
    jobTitle: "",
    status: "",
    salary: "",
  });
  const [imagePath, setImagePath] = useState<File | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    Object.keys(addSalaryEmployee).forEach((key) => {
      const typedKey = key as keyof SalaryEmployee;
      formData.append(typedKey, addSalaryEmployee[typedKey]);
    });
    if (imagePath) {
      formData.append("image", imagePath);
    }
    try {
      const response = await axios.post(
        "http://localhost:3002/employee/addSalaryDetails",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      const offcanvasElement = document.getElementById('offcanvasRight');
      if (offcanvasElement) {
        const offcanvas = (window as any).bootstrap.Offcanvas.getInstance(offcanvasElement);
        if (offcanvas) {
          offcanvas.hide();
        }
        getSalaryEmployee();
      }
      console.log("Employee added:", response.data);
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log(file.name, "filename");
      setImagePath(file);
    }
  };

  const getSalaryEmployee = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3002/employee/getSalaryEmployee"
      );
      setSalaryEmployees(response.data.employees);
    } catch (error) {
      console.log("Error fetching employees:", error);
    }
  };

  useEffect(() => {
    getSalaryEmployee();
  }, []);

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
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <AddButton
                onClick={()=>''}
                type="button"
                label={"+ Add New"}
                obj={obj}
              />
            </div>
          </div>
          <div
            className="offcanvas offcanvas-end"
            style={{ width: "70%" }}
            tabIndex={-1}
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header">
              <h5 id="offcanvasRightLabel">Add Salery</h5>
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
                      label="Employeeid"
                      id="name"
                      value={addSalaryEmployee.eid}
                      onChange={(e) =>
                        setAddSalaryEmployee({
                          ...addSalaryEmployee,
                          eid: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col">
                    <TextInput
                      type="text"
                      label="First Name"
                      id="name"
                      value={addSalaryEmployee.firstName}
                      onChange={(e) =>
                        setAddSalaryEmployee({
                          ...addSalaryEmployee,
                          firstName: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col">
                    <TextInput
                      type="text"
                      label="Last Name"
                      id="name"
                      value={addSalaryEmployee.lastName}
                      onChange={(e) =>
                        setAddSalaryEmployee({
                          ...addSalaryEmployee,
                          lastName: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div>
                  <h6>Employee Information</h6>
                </div>
                <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3 mt-3 pe-5">
                  <div className="col">
                    <label htmlFor="">Job Title</label>
                    <select
                      className="mt-2 form-control"
                      onChange={(e) =>
                        setAddSalaryEmployee({
                          ...addSalaryEmployee,
                          jobTitle: e.target.value,
                        })
                      }
                    >
                      <option value=""></option>
                      <option value="MERN">MERN</option>
                      <option value="MEAN">MEAN</option>
                      <option value="JAVA">JAVA</option>
                      <option value="ROR">ROR</option>
                      <option value="PHP">PHP</option>
                    </select>
                  </div>

                  <div className="col">
                    <label htmlFor="">Status</label>
                    <select
                      className="mt-2 form-control"
                      onChange={(e) =>
                        setAddSalaryEmployee({
                          ...addSalaryEmployee,
                          status: e.target.value,
                        })
                      }
                    >
                      <option value="Trainee">Trainee</option>
                      <option value="WEB Dev">WEB Dev</option>
                      <option value="Sr.WEB Dev">Sr.WEB Dev</option>
                      <option value="Intern">Intern</option>
                      <option value="1">1</option>
                    </select>
                  </div>
                </div>
                <div className="mt-3">
                  <h6>Salery Information</h6>
                </div>
                <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3 mt-3 pe-5">
                  <div className="col">
                    <TextInput
                      type="text"
                      label="Salery"
                      id="salery"
                      value={addSalaryEmployee.salary}
                      onChange={(e) =>
                        setAddSalaryEmployee({
                          ...addSalaryEmployee,
                          salary: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col">
                    <TextInput
                      type="text"
                      label="Annual Salery"
                      id="annualSalery"
                      value={addSalaryEmployee.salary}
                      onChange={(e) =>''}
                    />
                  </div>
                </div>
                {/* <div className="mt-3 ms-4">
                  <AddButton
                    onClick={handleSubmit}
                    type="button"
                    label={"+ Upload"}
                    obj={obj}
                  />
                </div> */}
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
          <div className="mt-5 px-5">
            <table className="table  table-light table-hover">
              <thead className="table-td1">
                <tr>
                  <th className="ps-4">Name</th>
                  <th>Eid</th>
                  <th>Position</th>
                  <th>Status</th>
                  <th>Salery</th>
                  <th>Annual Pay</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="table-td2">
                {salaryEmployees?.map((user?: any, index?: any) => {
                  return (
                    <>
                      <tr key={index}>
                        <td className="me-1">
                          <img
                            style={{
                              height: "50px",
                              width: "50px",
                              borderRadius: "50%",
                            }}
                            src={user.image}
                            alt=""
                            className="me-3"
                          />
                          {user.firstName.charAt(0).toUpperCase() +
                            user.firstName.slice(1)}
                        </td>
                        <td>{user.eid}</td>
                        <td>{user.jobTitle}</td>
                        <td>{user.status}</td>
                        <td>{user.salary}</td>
                        <td>{user.salary * 12}</td>
                        <td>
                          <span
                            className="bi bi-three-dots"
                            style={{ cursor: "pointer" }}
                          >
                            ...
                          </span>
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
export default SalarySheet;

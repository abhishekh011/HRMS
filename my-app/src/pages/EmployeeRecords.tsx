import "react-circular-progressbar/dist/styles.css";
import "../App.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import AddButton from "../components/Button";
import { useEffect, useState } from "react";
import EditEmployee from "../components/EditEmployee";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/Store";
import { fetchEmployees} from "../redux/employeeSlice";
import AddEmployee from "../components/AddEmployee";
interface DashboardProps {
  isSidebarClosed: boolean;
  handleSidebarToggle: () => void;
  HeaderLavel: string;
}
interface SelectedEmployee {
  eid: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  doj?: string;
  jobTitle?: string;
  image:string;
}
const obj = {
  color: "#fff",
  font: "50px",
  class: "btn btn-warning me-5",
};
const EmployeeRecords: React.FC<DashboardProps> = ({
  isSidebarClosed,
  handleSidebarToggle,
  HeaderLavel,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const {employee , error} = useSelector((state:RootState) => state.employee);
  const [selectedEmployee , setSelectedEmployee] = useState<SelectedEmployee>({
    eid: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',         
    doj: '',  
    jobTitle: '',
    image:'',
  });
  useEffect(() => {
    dispatch(fetchEmployees());
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
          {/* Table Start======================================== */}
          <div className="mt-5 px-5">
            <table className="table  table-light table-hover">
              <thead className="table-td1">
                <tr>
                  <th className="ps-4">Name</th>
                  <th>Eid</th>
                  <th>Position</th>
                  <th>Date Of Joining</th>
                  <th>Salery</th>
                  <th>Email Id</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="table-td2">
                {employee?.map((user?: any, index?: any) => {
                  const collapseId = `collapse${index}`;
                  return (
                    <>
                      <tr key={index}>
                        <td>
                          <img
                            style={{
                              height: "50px",
                              width: "50px",
                              borderRadius: "50%",
                            }}
                            src={user.image}
                            alt=""
                          />
                          {user.firstName.charAt(0).toUpperCase() +
                            user.firstName.slice(1)}
                        </td>
                        <td>{user.eid}</td>
                        <td>{user.jobTitle.toUpperCase()}</td>
                        <td>{user.doj}</td>
                        {user.salary < 1 ? (
                          <td>Not Add</td>
                        ) : (
                          <td>{user.salary}</td>
                        )}

                        <td>{user.email}</td>
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
                            <li
                              data-bs-toggle="offcanvas"
                              data-bs-target="#offcanvasRight2"
                              aria-controls="offcanvasRight"
                               
                              onClick={()=>setSelectedEmployee(user)}
                            >
                              <a
                                className="dropdown-item"
                                
                              >
                                <i className="fa fa-pen"></i>
                                edit
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item">Remove</a>
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
          {/* Table End======================================== */}
           <AddEmployee/>
           <EditEmployee selectedEmployee2={selectedEmployee}/>
        </div>
      </div>
    </>
  );
};
export default EmployeeRecords;

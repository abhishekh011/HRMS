import "react-circular-progressbar/dist/styles.css";
import "../App.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import CurrentTime from "../services/Time";
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

const AttendanceSheet: React.FC<oldEmployeeRecordsProps> = ({
  isSidebarClosed,
  handleSidebarToggle,
  HeaderLavel,
}) => {

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert("Submit Button Is Called");
  };
  const users = [
    {
        eid:'1',
      name: "Abhishekh",
      position: "MERN Stack",
      email: "abhi@gmail.com",
      contact: "7879710456",
      dateOfResigning: "09 June 2025",
      action: "Edit/Delete",
    },
    {
      eid:'2',
      name: "Piyush",
      position: "MEAN Stack",
      email: "piyush@gmail.com",
      contact: "908976657",
      dateOfResigning: "23 Sep 2025",
      action: "Edit/Delete",
    },
    {
      eid:'3',
      name: "Mohit Ji",
      position: "FULL Stack",
      email: "Mohit@gmail.com",
      contact: "234543232",
      dateOfResigning: "12 Oct 2024",
      action: "Edit/Delete",
    },
    // {
    //   name: "Divyanshu sir",
    //   position: "IT BALE",
    //   email: "D@gmail.com",
    //   contact: "42422424",
    //   dateOfResigning: "25 Aug 2034",
    //   action: "Edit/Delete",
    // },
    // {
    //   name: "Sachin Ji",
    //   position: "REACT Native",
    //   email: "Sachin@gmail.com",
    //   contact: "48398489",
    //   dateOfResigning: "32 july 2025",
    //   action: "Edit/Delete",
    // },
    // {
    //   name: "Devendra Ji",
    //   position: "ROR",
    //   email: "dev@gmail.com",
    //   contact: "12342342",
    //   dateOfResigning: "12 jan 2012",
    //   action: "Edit/Delete",
    // },
  ];
  return (
    <>
      <div className="d-flex">
        <Sidebar isSidebarClosed={isSidebarClosed} />
        <div className={`appDiv ${isSidebarClosed ? "close" : ""}`}>
          <Header
            handleSidebarToggle={handleSidebarToggle}
            HeaderLevel={HeaderLavel}
          />
          <div className="d-flex justify-content-between px-lg-5 px-md-5 mt-3">
           <h5>{CurrentTime().formattedDate}</h5>
            <span> <i className="fa fa-calendar me-1"></i>Today <i className="fa fa-chevron-down"></i></span>
          </div>
          <div className="mt-1 px-lg-5 px-md-5">
            <table className="table  table-light table-hover">
              <thead className="table-td1">
                <tr>
                  <th className="">Eid</th>
                  <th>Name</th>
                  <th>D.O.B</th>
                  <th colSpan={4}>D.O.J</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="table-td2">
                {users.map((user, index) => {
                  const collapseId = `collapse${index}`;
                  return (
                    <>
                      <tr key={index}>
                        <td>{user.eid}</td>
                        <td>{user.name}</td>
                        <td>21/2/2002</td>
                        <td colSpan={3}>{user.dateOfResigning}</td>
                        <td><button className="btn btn-outline-secondary">Absent</button></td>
                        <td><button className="btn btn-warning">Present</button></td>
                        <td className="dropdown">
                          <span
                            className="fa fa-ellipsis-v"
                            id="dropdownMenuLink"
                            data-bs-toggle="dropdown"
                            style={{ cursor: "pointer" }}
                          >
                          </span>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuLink"
                          >
                            <li><a className="dropdown-item" href="#"><i className="fa fa-bell"></i> Half Day</a></li>
                            <li><a className="dropdown-item" href="#"><i className="fa fa-sun-o"></i> Full Day</a></li>
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
export default AttendanceSheet;

import { useState } from "react";
import { GetImage } from "../assets/image";
import "../assets/style/FullProfile.css";
import { useLocation, useNavigate } from "react-router-dom";
type User = {
  name: string;
  position: string;
  email: string;
  contact: string;
  dateOfResigning: string;
  action: string;
};
const FullEmployeeProfile: React.FC = () => {
  const [isFirstOpen, setIsFirstOpen] = useState<boolean>(true);
  const [isSecondOpen, setIsSecondOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.user;

  const handleFirstToggle = () => {
    setIsFirstOpen(!isFirstOpen);
    setIsSecondOpen(false);
  };

  const handleSecondToggle = () => {
    setIsSecondOpen(!isSecondOpen);
    setIsFirstOpen(false);
  };
  return (
    <>
      <div>
        <div
          className="ps-5 "
          style={{ backgroundColor: "#F7FCFE", height: "70px" }}
        >
          <div className="ps-5 pt-3">
            <h4 onClick={()=>navigate(-1)}><i className="fa fa-chevron-left"></i> Full Employee Profile</h4>
          </div>
        </div>
        <div
          className="mt-4 ps-0 d-flex row"
          style={{ backgroundColor: "#E2F7FE", position: "relative" }}
        >
          <div className="ps-5 col-lg-4 col-md-4 col-sm-5 col-12 text-lg-center">
            <img className="" src={GetImage.fullprofileimage} alt="" />
          </div>
          <div className="pt-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="">
              <table className="">
                <thead>
                  <h3>{user.name}</h3>
                </thead>
                <tbody>
                  <tr>
                    <td className="role">{user.position}</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-td1">Date Of Join:</span>
                    </td>
                    <td className="table-td2">
                      <span>15/07/2024</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-td1">Contact No.:</span>
                    </td>
                    <td className="table-td2">
                      <span>+91 {user.contact}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-td1">Email:</span>
                    </td>
                    <td className="table-td2">
                      <span>{user.email}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <a href="" className="editButton">
            Edit
          </a>
        </div>
        <div className="mt-5 ps-5">
          <p className="d-inline-flex gap-1">
            <p
              className="mx-5 table-td1"
              data-bs-toggle="collapse"
              data-bs-target="#multiCollapseExample1"
              aria-expanded={isFirstOpen}
              aria-controls="multiCollapseExample1"
              onClick={handleFirstToggle}
              style={{cursor:'pointer'}}
            >
              Toggle first element
            </p>
            <p
              className="table-td1"
              data-bs-toggle="collapse"
              aria-controls="multiCollapseExample2"
              data-bs-target="#multiCollapseExample2"
              aria-expanded={isSecondOpen}
              onClick={handleSecondToggle}
              style={{cursor:'pointer'}}
            >
              Toggle second element
            </p>
          </p>
          <div className="">
            {/* First Collepsad */}
            <div className="">
              <div
                className={`collapse multi-collapse ps-5 pe-5 ${
                  isFirstOpen ? "show" : ""
                }`}
                id="multiCollapseExample1"
              >
                <h5>Employee Enformation</h5>
                <div className="row pt-2">
                  <div className="col-6">
                    <table className="table table-fullEmployee">
                      <tbody>
                        <tr>
                          <td className="table-td1">Employeeid</td>
                          <td className="table-td2">1</td>
                          <td className="table-td1">Address</td>
                          <td className="table-td2">Indore</td>
                        </tr>
                        <tr>
                          <td className="table-td1">Name</td>
                          <td className="table-td2">{user.name}</td>
                          <td className="table-td1">Date Of Birth</td>
                          <td className="table-td2">09/06/2003</td>
                        </tr>
                        <tr>
                          <td className="table-td1">position</td>
                          <td className="table-td2">{user.position}</td>
                          <td className="table-td1">Email</td>
                          <td className="table-td2">{user.email}</td>
                        </tr>
                        <tr>
                          <td className="table-td1">Country</td>
                          <td className="table-td2">India</td>
                          <td className="table-td1">Contact</td>
                          <td className="table-td2">{user.contact}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <div className="d-flex justify-content-between">
                    <h3 className="d-inline">Attachment</h3>
                    <button className="btn btn-warning">Upload</button>
                  </div>
                  <div className="row pt-3">
                    <div className="col-3">
                      <div className="card">
                        <img
                          src={GetImage.cardImage}
                          className="card-img-top"
                          alt=""
                        />
                        <div className="card-body">
                          <h5 className="card-title">Experience Letter</h5>
                          <span className="table-td2">Created 02/12/2023</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="card">
                        <img
                          src={GetImage.cardImage}
                          className="card-img-top"
                          alt=""
                        />
                        <div className="card-body">
                          <h5 className="card-title">Employee Letter</h5>
                          <span className="table-td2">Created 02/12/2023</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="card">
                        <img
                          src={GetImage.cardImage}
                          className="card-img-top"
                          alt=""
                        />
                        <div className="card-body">
                          <h5 className="card-title">Offer Letter</h5>
                          <span className="table-td2">Created 02/12/2023</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Second Collepsad */}
            <div className=" ps-5 pe-5">
              <div
                className={`collapse multi-collapse ${
                  isSecondOpen ? "show" : ""
                }`}
                id="multiCollapseExample2"
              >
                 <h5>Bank Details</h5>
                <div className="row pt-2">
                  <div className="col-4">
                    <table className="table table-fullEmployee">
                      <tbody>
                        <tr>
                          <td className="table-td1">A/C No .</td>
                          <td className="table-td2">234897985269</td>
                        </tr>
                        <tr>
                          <td className="table-td1">IFSC Code</td>
                          <td className="table-td2">BOI323321</td>
                        </tr>
                        <tr>
                          <td className="table-td1">Bank Name</td>
                          <td className="table-td2">Bank Of India</td>
                        </tr>
                        <tr>
                          <td className="table-td1">Branch</td>
                          <td className="table-td2">Indore</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <div className="d-flex justify-content-between">
                    <h5 className="d-inline">Salary</h5>
                    <p>January</p>
                  </div>
                  <div>
                     <table className="table mt-2">
                      <thead className="table-td1">
                        <tr>
                          <th>Eid</th>
                          <th>Name</th>
                          <th>Date</th>
                          <th>BasicSalary</th>
                          <th>Addition</th>
                          <th>Deductions</th>
                          <th>Totle</th>
                        </tr>
                      </thead>
                      <tbody className="table-td2">
                        <tr>
                        <td>1</td>
                         <td>abhishekh</td>
                         <td>01/08/2024</td>
                         <td>6000</td>
                         <td>500</td>
                         <td>00</td>
                         <td>5500</td>
                        </tr>
                        <tr> <td>1</td>
                         <td>abhishekh</td>
                         <td>01/08/2024</td>
                         <td>6000</td>
                         <td>500</td>
                         <td>00</td>
                         <td>5500</td></tr>
                      </tbody>
                     </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FullEmployeeProfile;

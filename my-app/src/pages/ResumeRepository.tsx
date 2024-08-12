import "react-circular-progressbar/dist/styles.css";
import "../App.css";
import "../assets/style/ResumeRepository.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { GetImage } from "../assets/image";
import AddButton from "../components/Button";
import React from "react";

interface DashboardProps {
  isSidebarClosed: boolean;
  handleSidebarToggle: () => void;
  HeaderLavel: string;
}

const obj = {
  color: "#fff",
  font: "50px",
  class: "btn btn-warning ",
};

const ResumeRepository: React.FC<DashboardProps> = ({
  isSidebarClosed,
  handleSidebarToggle,
  HeaderLavel,
}) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };
  const users = [
    {
      name: "Abhishekh",
      email: "abhi@gmail.com",
      technology: "MERN Stack",
      educationYear: "2022-2023",
      education:"Master's",
      experience:"3 Year",
      recentEmployed:"CSK",
      portfolio:"www.abc.com",
    },
    {
      name: "Piyush",
      email: "piyush@gmail.com",
      technology: "MEAN Stack",
      educationYear: "2025-2025",
      education:"Bachler's",
      experience:"1 Year",
      recentEmployed:"RCB",
      portfolio:"www.xyz.com",
    },
    {
      name: "Mohit Ji",
      email: "Mohit@gmail.com",
      technology: "FULL Stack",
      educationYear: "2023-2024",
      education:"Bachler's",
      experience:"4 Year",
      recentEmployed:"RCB",
      portfolio:"www.xyz.com",
    },
    {
      name: "Divyanshu sir",
      email: "D@gmail.com",
      technology: "IT BALE",
      educationYear: "2023-2024",
      education:"Bachler's",
      experience:"4 Year",
      recentEmployed:"MI",
      portfolio:"www.MI.com",
    },
    {
      name: "Sachin Ji",
      email: "Sachin@gmail.com",
      technology: "REACT Native",
      educationYear: "2021-2022",
      education:"Bachler's",
      experience:"1 Year",
      recentEmployed:"MI",
      portfolio:"www.Mumbai.com",
    },
    {
      name: "Devendra Ji",
      email: "dev@gmail.com",
      technology: "ROR",
      educationYear: "2020-2021",
      education:"Master's",
      experience:"7 Year",
      recentEmployed:"CSK",
      portfolio:"www.CSK.com",
    },
    {
      name: "Aman Ji",
      email: "aman@gmail.com",
      technology: "ROR",
      educationYear: "2023-2024",
      education:"Bachler's",
      experience:"2 Year",
      recentEmployed:"RR",
      portfolio:"www.RR.com",
    }
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
         
         <div className="mt-5 ps-4">
      <table className="table text-center">
        <thead className="table-td1">
          <tr>
            <th colSpan={2}>Name</th>
            <th>Mail Id</th>
            <th>Technology</th>
            <th>Education Year</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="accordion table-td2" id="accordionExample">
          {users.map((user, index) => {
            const collapseId = `collapse${index}`;
            return (
              <React.Fragment key={index}>
                <tr
                  data-bs-toggle="collapse"
                  data-bs-target={`#${collapseId}`}
                  aria-expanded="false"
                  aria-controls={collapseId}
                >
                  <td className="roted"><span className="bx bxs-chevron-right arrow"></span></td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.technology}</td>
                  <td>{user.educationYear}</td>
                  <td><span className="bi bi-three-dots">...</span></td>
                </tr>
                <tr>
                  <td colSpan={5}>
                    <div
                      id={collapseId}
                      className="accordion-collapse collapse"
                      aria-labelledby={`heading${index}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div
                        className="accordion-body"
                        style={{
                          backgroundColor: 'rgb(220,247,255)',
                          borderRadius: '10px',
                        }}
                      >
                        <div className="d-flex flex-lg-row flex-md-row flex-sm-column flex-column ">
                          <div className="text-center col-lg-4 col-md-4 col-sm-12 col-12">
                            <img
                              src={GetImage.Logo}
                              alt=""
                              style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '50px',
                              }}
                            />
                            <h5>{user.name}</h5>
                            <p>MERN Stack</p>
                          </div>
                          <div className="col-lg-9 col-md-6 col-sm-12 col-12">
                            <div className="pt-2">
                              <table>
                                <tbody className="table-td2">
                                  <tr className="profile-card-section">
                                    <td colSpan={3}>
                                      <h6 className="text-center">Education</h6>
                                    </td>
                                    <td>
                                      <p className="text-center">
                                       {user.education}
                                      </p>
                                    </td>
                                  </tr>
                                  <tr className="profile-card-section">
                                    <td colSpan={3}>
                                      <h6 className="text-center">
                                        Education Year
                                      </h6>
                                    </td>
                                    <td>
                                      <p className="text-center">{user.educationYear}</p>
                                    </td>
                                  </tr>
                                  <tr className="profile-card-section">
                                    <td colSpan={3}>
                                      <h6 className="text-center">Email Id</h6>
                                    </td>
                                    <td>
                                      <p className="text-center">
                                        {user.email}
                                      </p>
                                    </td>
                                  </tr>
                                  <tr className="profile-card-section">
                                    <td colSpan={3}>
                                      <h6 className="text-center">Skills</h6>
                                    </td>
                                    <td>
                                      <p className="text-center">{user.technology}</p>
                                    </td>
                                  </tr>
                                  <tr className="profile-card-section">
                                    <td colSpan={3}>
                                      <h6 className="text-center">Experience</h6>
                                    </td>
                                    <td>
                                      <p className="text-center">{user.experience}</p>
                                    </td>
                                  </tr>
                                  <tr className="profile-card-section">
                                    <td colSpan={3}>
                                      <h6 className="text-center">
                                        Recent Employer
                                      </h6>
                                    </td>
                                    <td>
                                      <p className="text-center">{user.recentEmployed}</p>
                                    </td>
                                  </tr>
                                  <tr className="profile-card-section">
                                    <td colSpan={3}>
                                      <h6 className="text-center">
                                        Portfolio Link
                                      </h6>
                                    </td>
                                    <td>
                                      <p className="text-center">{user.portfolio}</p>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-end pe-5">
                          <AddButton
                            onClick={handleSubmit}
                            type="button"
                            label={"Full Resume"}
                            obj={obj}
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
              {/* <div
                className="accordion ps-2 pe-3 mt-2"
                id="regularAccordionRobots"
              >
                <div className="accordion-item">
                  <div
                    className="inline-texts"
                    data-bs-toggle="collapse"
                    data-bs-target="#regularCollapseFirst"
                    aria-controls="regularCollapseFirst"
                  >
                    <table className="table text-center">
                      <tbody>
                        <tr>
                          <td>
                            <span></span>Abhishekh
                          </td>
                          <td>abhi@gmail.com</td>
                          <td>MERN Stack</td>
                          <td>2022-2023</td>
                          <td>Action</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div
                    id="regularCollapseFirst"
                    className="accordion-collapse collapse show"
                    aria-labelledby="regularHeadingFirst"
                    data-bs-parent="#regularAccordionRobots"
                  >
                    <div
                      className="accordion-body"
                      style={{
                        backgroundColor: "rgb(220,247,255)",
                        borderRadius: "10px",
                      }}
                    >
                      <div className="d-flex">
                        <div className="text-center col-lg-4 col-md-4 col-sm-12 col-12">
                          <img
                            src={GetImage.Logo}
                            alt=""
                            style={{
                              width: "100px",
                              height: "100px",
                              borderRadius: "50px",
                            }}
                          />
                          <h5>Abhishekh Jadam</h5>
                          <p>MERN Stack</p>
                        </div>
                        <div className="col-lg-9 col-md-6 col-sm-12 col-12">
                          <div className="pt-2">
                            <table>
                              <tbody>
                                <tr className="profile-card-section">
                                  <td colSpan={3}>
                                    <h6 className="text-center">Education</h6>
                                  </td>
                                  <td>
                                    <p className="text-center">
                                      Master's Degree
                                    </p>
                                  </td>
                                </tr>
                                <tr className="profile-card-section">
                                  <td colSpan={3}>
                                    <h6 className="text-center">
                                      Education Year
                                    </h6>
                                  </td>
                                  <td>
                                    <p className="text-center">2023-2024</p>
                                  </td>
                                </tr>
                                <tr className="profile-card-section">
                                  <td colSpan={3}>
                                    <h6 className="text-center">Email Id</h6>
                                  </td>
                                  <td>
                                    <p className="text-center">
                                      Abhi@gmail.com
                                    </p>
                                  </td>
                                </tr>
                                <tr className="profile-card-section">
                                  <td colSpan={3}>
                                    <h6 className="text-center">Skills</h6>
                                  </td>
                                  <td>
                                    <p className="text-center">MERN Stack</p>
                                  </td>
                                </tr>
                                <tr className="profile-card-section">
                                  <td colSpan={3}>
                                    <h6 className="text-center">Experience</h6>
                                  </td>
                                  <td>
                                    <p className="text-center">3 Year</p>
                                  </td>
                                </tr>
                                <tr className="profile-card-section">
                                  <td colSpan={3}>
                                    <h6 className="text-center">
                                      Recent Employer
                                    </h6>
                                  </td>
                                  <td>
                                    <p className="text-center">ABC Company</p>
                                  </td>
                                </tr>
                                <tr className="profile-card-section">
                                  <td colSpan={3}>
                                    <h6 className="text-center">
                                      Portfolio Link
                                    </h6>
                                  </td>
                                  <td>
                                    <p className="text-center">WWW.abc.com</p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end pe-5">
                        <AddButton
                          onClick={handleSubmit}
                          type="button"
                          label={"Full Resume"}
                          obj={obj}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>

            {/* <div className="accordion-item">
              <h2 className="accordion-header" id="regularHeadingSecond">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#regularCollapseSecond" aria-expanded="false" aria-controls="regularCollapseSecond">
                  The Social Impact of Collective Artificial Intelligence
                </button>
              </h2>
              <div id="regularCollapseSecond" className="accordion-collapse collapse" aria-labelledby="regularHeadingSecond" data-bs-parent="#regularAccordionRobots">
              <div className="accordion-body"  style={{ backgroundColor: "rgb(220,247,255)", borderRadius: '10px' }}>
                  <div className=" d-flex">
                    <div className="text-center col-lg-4 col-md-4 col-sm-12 col-12">
                      <img src={GetImage.Logo} alt="" style={{ width: '100px', height: '100px', borderRadius: '50px' }} />
                      <h5>Abhishekh Jadam</h5>
                      <p>MERN Stack</p>
                    </div>
                    <div className="col-lg-9 col-md-6 col-sm-12 col-12 ">
                      <div className="pt-2">
                        <table>
                          <tr className="profile-card-section">
                            <td colSpan={3}><h6 className="text-center">Education</h6></td>
                            <td><p className="text-center">Master's Degree </p></td>
                          </tr>
                          <tr className="profile-card-section">
                            <td colSpan={3}><h6 className="text-center">Education Year</h6></td>
                            <td><p className="text-center">2023-2024</p></td>
                          </tr>
                          <tr className="profile-card-section ">
                            <td colSpan={3}><h6 className="text-center">Email Id</h6></td>
                            <td><p className="text-center">Abhi@gmail.com</p></td>
                          </tr>
                          <tr className="profile-card-section">
                            <td colSpan={3}><h6 className="text-center">Skills</h6></td>
                            <td><p className="text-center">MERN Stack</p></td>
                          </tr>
                          <tr className="profile-card-section">
                            <td colSpan={3}><h6 className="text-center">Experience</h6></td>
                            <td><p className="text-center">3 Year</p></td>
                          </tr>
                          <tr className="profile-card-section">
                            <td colSpan={3}><h6 className="text-center">Recent Employer</h6></td>
                            <td><p className="text-center">ABC Company</p></td>
                          </tr>
                          <tr className="profile-card-section">
                            <td colSpan={3}><h6 className="text-center">Portfollo Link</h6></td>
                            <td><p className="text-center">WWW.abc.com</p></td>
                          </tr>
                          <tr className="profile-card-section">
                            <td></td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end pe-5">
                        <AddButton
                          onClick={handleSubmit}
                          type="button"
                          label={"Full Resume"}
                          obj={obj}
                        />
                      </div>
                </div>
              </div>
            </div> 
              bx bxs-chevron-right arrow"*/}
          </div>
    </>
  );
};

export default ResumeRepository;

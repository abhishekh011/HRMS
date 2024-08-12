import React from "react";
import { GetImage } from "../assets/image";
import "../assets/style/Home.css";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <>
      {/* <div className="container-fluid">
        <div className="navbar d-flex justify-content-between">
          <div style={{ marginLeft: "10%" }}>
            <img src={GetImage.Logo} />
          </div>
          <div style={{ marginRight: "10%" }}>
            <button className="btn btn-warning text-light">Login</button>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <div className="w-50">
            <div>
              <h3 className="d-6">Teamwork makes the dream work.</h3>
            </div>
            <div>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "10px",
                  lineHeightStep: "10px",
                }}
              >
                It involves various activities such as job analysis, job
                posting, candidate search, candidate screening, interviewing,
                and onboarding Effective recruitment management is essential for
                organizations to find the right candidates .
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container">
        <header>
          <div>
            <img
              src={GetImage.Logo}
              alt="NewTech Fusion Logo"
              className="logo"
            />
          </div>
          <div>
            <button
              className="btn btn-warning"
              onClick={() => navigate("/Login")}
            >
              Login
            </button>
          </div>
        </header>
      </div>
      <main>
        {/* <section className="hero">
          <div className="container">
            <h1>Teamwork Makes The Dream Work.</h1>
            <p className="aling-items-center">
              It involves various activities such as job analysis, job posting,
              candidate search, candidate screening, interviewing, and
              onboarding. Effective recruitment management is essential for
              organizations to find the right candidates.
            </p>
            <div className="my-5 d-flex justify-content-between">
              <span className="btn btn-warning">Admin</span>
              <span className="btn btn-info">Employee List</span>
            </div>
            <div className="features d-flex justify-content-between">
              <div className="feature">
                <h3>Candidate Screening</h3>
                <p>
                  Reviewing resumes and cover letters to identify qualified
                  candidates and conducting initial phone screens to assess
                  their suitability for the position.
                </p>
              </div>
              <div className="feature">
                <div className="employee-list">
                  <div className="employee">
                    <img src={GetImage.john} alt="John Doe" />
                    <span>John Doe</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mainImage">
              <img
                src={GetImage.GirlLaptop}
                alt="Woman with Laptop"
                className="hero-image"
              />
            </div>
            <div className=" features2 d-flex justify-content-between">
              <div className="feature1">
                <h3>Candidate Screening</h3>
                <p>
                  Reviewing resumes and cover letters to identify qualified
                  candidates and conducting initial phone screens to assess
                  their suitability for the position.
                </p>
              </div>
              <div className="feature2">
                <div className="employee-list">
                  <div className="employee">
                    <img src={GetImage.john} alt="John Doe" />
                    <span>John Doe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="hero">
          <div className="container">
            <h1>Teamwork Makes The Dream Work.</h1>
            <p className="aling-items-center">
              It involves various activities such as job analysis, job posting,
              candidate search, candidate screening, interviewing, and
              onboarding. Effective recruitment management is essential for
              organizations to find the right candidates.
            </p>
            <div className="my-5 d-flex justify-content-between">
              <span
                className="btn btn-warning"
                onClick={() => navigate("/Dashboard")}
              >
                Admin
              </span>
              <span className="btn btn-info">Employee List</span>
            </div>

            <div className="mainImage">
              <div className="features d-flex justify-content-between">
                <div className="feature feature3">
                  <h3>Candidate Screening</h3>
                  <p>
                    Reviewing resumes and cover letters to identify qualified
                    candidates and conducting initial phone screens to assess
                    their suitability for the position.
                  </p>
                </div>
                <div className="feature feature4">
                  <div className="employee-list">
                    <div className="employee">
                      <img src={GetImage.john} alt="John Doe" />
                      <span>John Doe</span>
                    </div>
                    <div className="employee">
                      <img src={GetImage.john} alt="John Doe" />
                      <span>John Doe</span>
                    </div>
                    <div className="employee">
                      <img src={GetImage.john} alt="John Doe" />
                      <span>John Doe</span>
                    </div>
                  </div>
                </div>
              </div>

              <img
                src={GetImage.GirlLaptop}
                alt="Woman with Laptop"
                className="hero-image"
              />
              <div className=" features2 d-flex justify-content-between">
                <div className="feature1">
                  <div className="employee">
                    <img src={GetImage.john} alt="John Doe" />
                    <span>John Doe</span>
                  </div>
                  <div className="employee">
                    <img src={GetImage.john} alt="John Doe" />
                    <span>John Doe</span>
                  </div>
                </div>
                <div className="feature2">
                  <div className="employee-list">
                    <div className="">
                      <h3>Salery Sheet</h3>
                      <p>
                        The amount of salary paid to the employee before any
                        deductions or additions.The number of days of leave
                        taken by the employee during the payment period.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
export default Home;

import "react-circular-progressbar/dist/styles.css";
import "../App.css";
import "../assets/style/Dashbaord.css";
import { GetImage } from "../assets/image";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import AddButton from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import { useEffect } from "react";
interface DashboardProps {
  isSidebarClosed: boolean;
  handleSidebarToggle: () => void;
  HeaderLavel: string;
}
const obj = {
  color: "#fff",
  font: "50px",
  class: "btn btn-warning",
};

const Dashboard: React.FC<DashboardProps> = ({
  isSidebarClosed,
  handleSidebarToggle,
  HeaderLavel,
}) => {
  const {currentUser , isLoggedIn} = useSelector((state:RootState) => state.user);
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/Login");
    }
  }, [isLoggedIn]);
  return (
    <>
      <div className="d-flex">
        <Sidebar isSidebarClosed={isSidebarClosed} />
        <div className={`appDiv ${isSidebarClosed ? "close" : ""}`}>
          <Header
            handleSidebarToggle={handleSidebarToggle}
            HeaderLevel={HeaderLavel}
          />
          <div className="d-flex dashbordMaindiv">
            <div className="d-flex flex-column justify-content-center ps-5 text-left">
              <h2 style={{ color: "rgba(0, 195, 255, 1)" }}>Hello Sir/Ma'am</h2>
              <p>
                HR management system is an essential tool that helps
                organizations manage their employees effectively.
              </p>
            </div>
            <div>
              <div>
                <img
                  className="dashbordMaindivimg"
                  src={GetImage.Dashboardimage1}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mt-3 ms-5">
            <h3>You Need To Hire</h3>
          </div>
          <div className="mt-4 ">
            <div>
            <div className="row">
              <div className="hiringDiv ms-lg-5 ms-md-5 ms-0 col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="hiringInnerDiv ms-3 d-flex justify-content-center align-items-center">
                  <div className="">
                    <h3>3</h3>
                  </div>
                  <div className="mx-3">
                    <p className="mb-0">PHP Developers</p>
                    <small className="text-muted mt-0">(5 Candidates)</small>
                  </div>
                  <div className="h-25 w-25">
                    <CircularProgressbar value={60} text={`${60}%`} />
                  </div>
                </div>
              </div>
              <div className="hiringDiv  ms-0 col-lg-5 col-md-5  col-sm-12 col-12">
                <div className="hiringInnerDiv ms-3 d-flex justify-content-center align-items-center">
                  <div className="">
                    <h3>3</h3>
                  </div>
                  <div className="mx-3">
                    <p className="mb-0">Python Developers</p>
                    <small className="text-muted mt-0">(1 Candidates)</small>
                  </div>
                  <div className="h-25 w-25">
                    <CircularProgressbar
                      value={66}
                      text={`${66}%`}
                      styles={buildStyles({
                        pathColor: `rgba(255, 0, 0, ${66 / 100})`,
                        textColor: "red",
                        trailColor: "#d6d6d6",
                      })}
                    />
                  </div>
                </div>
              </div>
              <div className="hiringDiv ms-lg-5 ms-md-5 my-sm-5 ms-0 col-lg-5 col-md-5 col-sm-12 col-12">
                <div className="hiringInnerDiv ms-3 d-flex justify-content-center align-items-center">
                  <div className="">
                    <h3>3</h3>
                  </div>
                  <div className="mx-3">
                    <p className="mb-0">MERN Stack</p>
                    <small className="text-muted mt-0">(2 Candidates)</small>
                  </div>
                  <div className="h-25 w-25">
                    <CircularProgressbar
                      value={97}
                      text={`${97}%`}
                      styles={buildStyles({
                        pathColor: `rgba(255, 105, 180, ${97 / 100})`, // Pink color
                        textColor: "#f88",
                        trailColor: "#d6d6d6",
                        backgroundColor: "#3e98c7",
                      })}
                    />
                  </div>
                </div>
              </div>
              <div className="hiringDiv  ms-0 my-sm-5 col-md-5 col-sm-12 col-12">
                <div className="hiringInnerDiv ms-3 d-flex justify-content-center align-items-center">
                  <div className="">
                    <h3>3</h3>
                  </div>
                  <div className="mx-3">
                    <p className="mb-0">ROR Developers</p>
                    <small className="text-muted mt-0">(3 Candidates)</small>
                  </div>
                  <div className="h-25 w-25">
                    <CircularProgressbar
                      value={30}
                      text={`${30}%`}
                      styles={buildStyles({
                        pathColor: `rgba(255, 255, 0, ${30 / 100})`, // Yellow color
                        textColor: "#f88",
                        trailColor: "#d6d6d6",
                        backgroundColor: "#3e98c7",
                      })}
                    />
                  </div>
                </div>
              </div>
              </div>
                 {/*  */}
            </div>
          </div>
          <div className="d-flex justify-content-between my-3 ms-5 me-5">
            <h3>Recruitment Progress</h3>
            <AddButton
              onClick={handleSubmit}
              type="button"
              label={"See All"}
              obj={obj}
            />
          </div>
          <table
            className="table ms-5 table-striped"
            style={{ position: "relative", width: "80%" }}
          >
            <thead>
              <tr>
                <th>FullName</th>
                <th>Position</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>Jacob</td>
                <td>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Dashboard;

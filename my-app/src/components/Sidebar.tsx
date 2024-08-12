import "./Sidebar.css";
import { GetImage } from "../assets/image";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/Store";
import { signOut } from "../redux/UserSlice";
interface SidebarProps {
  isSidebarClosed: boolean;
}
const Sidebar: React.FC<SidebarProps> = ({ isSidebarClosed }) => {
  const dispatch = useDispatch<AppDispatch>();
 const {currentUser,isLoggedIn} = useSelector((state:RootState)=>state.user);
     const handelLogout = ()=>{
           dispatch(signOut(currentUser));
     }
  const handleArrowClick = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {

    const target = event.currentTarget;
    const arrowParent = target.parentElement?.parentElement as HTMLElement;

    if (arrowParent) {
      arrowParent.classList.toggle("showMenu");
    }
  };

  return (
    <div className={`sidebar ${isSidebarClosed ? "close" : ""} `}>
      <div className="mt-3 ms-3">
        {isSidebarClosed ? (
          <img className="logo2" src={GetImage.logo2} alt="" />
        ) : (
          <img className="logo" src={GetImage.Logo} />
        )}
      </div>
      <ul className="nav-links">
        <li>
          <div className="iocn-link">
            <a href="#">
              <i className="">
                <img src={GetImage.Deshboard} alt="" />
              </i>
            <Link to={"/Dashboard"}>  <span className="link_name">Dashboard</span></Link>
            </a>
          </div>
        </li>
        <li>
          <div className="iocn-link">
            <a href="#">
              <i>
                <img src={GetImage.employee} alt="" />
              </i>
              <span className="link_name" onClick={handleArrowClick}>
                Employees
              </span>
            </a>
            <i
              className="bx bxs-chevron-down arrow"
              onClick={handleArrowClick}
            ></i>
          </div>
          <ul className="sub-menu">
            <li>
              <a className="link_name" href="#">
                Employees
              </a>
            </li>
            <li>
            <Link to={'/Employeerecords'}>    <a href="#">NewEmployees</a></Link>
            </li>
            <li>
            <Link to={'/OldEmployeeRecords'}><a href="#">OldEmployees</a></Link>
            </li>
          </ul>
        </li>
        <li>
          <div className="iocn-link">
            <a href="#">
              <i>
                <img src={GetImage.recruiter} alt="" />
              </i>
              <span className="link_name">Recruiter</span>
            </a>
            <i
              className="bx bxs-chevron-down arrow"
              onClick={handleArrowClick}
            ></i>
          </div>
          <ul className="sub-menu">
            <li>
              <a className="link_name" href="#">
                Recruiter
              </a>
            </li>
            <li>
            <Link to={"/ResumeRepository"}><a href="#">Repository</a></Link>
            </li>
            <li>
              <Link to={'/JobDescription'}><a href="#">Description</a></Link>
            </li>
          </ul>
        </li>
        <li>
          <div className="iocn-link">
            <a href="#">
              <i>
                <img src={GetImage.payroll} alt="" />
              </i>
              <span className="link_name">Payroll</span>
            </a>
            <i
              className="bx bxs-chevron-down arrow"
              onClick={handleArrowClick}
            ></i>
          </div>
          <ul className="sub-menu">
            <li>
              <a className="link_name" href="#">
                Payroll
              </a>
            </li>
            <li>
              <Link to={"/SalarySheet"}><a href="#">Salery</a></Link>
            </li>
            <li>
              <a href="#">Cash Sheet</a>
            </li>
          </ul>
        </li>
        <li>
          <div className="iocn-link">
            <a href="#">
              <i>
                <img src={GetImage.attendence} alt="" />
              </i>
              <span className="link_name">Attendence</span>
            </a>
            <i
              className="bx bxs-chevron-down arrow"
              onClick={handleArrowClick}
            ></i>
          </div>
          <ul className="sub-menu">
            <li>
              <a className="link_name" href="#">
                Attendence
              </a>
            </li>
            <li>
              <a href="#">In-Out Sheet</a>
            </li>
            <li>
           <Link to={'/AttendanceSheet'}><a href="#">Attendence</a></Link>
            </li>
            <li>
            <Link to={'/Leaves'}><a href="#">Leaves</a></Link>
            </li>
          </ul>
        </li>
        <li>
          <div className="profile-details">
            <div className="profile-content">
              <img src="image/profile.jpg" alt="profileImg" />
            </div>
            <div className="name-job">
              <div className="profile_name"></div>
              <div className="job">Web Designer</div>
            </div>
            <i className="bx bx-log-out" onClick={()=>handelLogout()}></i>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;

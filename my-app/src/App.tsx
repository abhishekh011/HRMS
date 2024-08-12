import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashbord.";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import EmployeeRecords from "./pages/EmployeeRecords";
import SalarySheet from "./pages/SalarySheet";
import ResumeRepository from "./pages/ResumeRepository";
import OldEmployeeRecords from "./pages/OldEmployeeRecords";
import AttendanceSheet from "./pages/AttendanceSheet";
import FullEmployeeProfile from "./pages/FullEmployeeProfile";
import JobDescription from "./pages/JobDescription";
import Leaves from "./pages/Leaves";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import Demo from "./pages/Demo";

const App: React.FC = () => {
  const [isSidebarClosed, setSidebarClosed] = useState<boolean>(false);

  const handleSidebarToggle = () => {
    setSidebarClosed(!isSidebarClosed);
  };

  return (
    <div className="App">
       <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Signup" element={<SignUp />} />
        <Route
          path="Dashboard"
          element={
            <Dashboard
              isSidebarClosed={isSidebarClosed}
              handleSidebarToggle={handleSidebarToggle}
              HeaderLavel={'Dashboard'}
            />

          }
        />
        <Route path="Employeerecords" element={<EmployeeRecords isSidebarClosed={isSidebarClosed}
          handleSidebarToggle={handleSidebarToggle}
          HeaderLavel={'Employees Records'} />} />
           <Route path="OldEmployeeRecords" element={<OldEmployeeRecords isSidebarClosed={isSidebarClosed}
          handleSidebarToggle={handleSidebarToggle}
          HeaderLavel={' Old Employees Records'} />} />
          <Route path="SalarySheet" element={<SalarySheet isSidebarClosed={isSidebarClosed}
          handleSidebarToggle={handleSidebarToggle}
          HeaderLavel={'Salary Sheet'} />} />
           <Route path="ResumeRepository" element={<ResumeRepository isSidebarClosed={isSidebarClosed}
          handleSidebarToggle={handleSidebarToggle}
          HeaderLavel={'Resume Repository'} />} />
              <Route path="AttendanceSheet" element={<AttendanceSheet isSidebarClosed={isSidebarClosed}
          handleSidebarToggle={handleSidebarToggle}
          HeaderLavel={'Attendance Sheet'} />} />
            <Route path="FullEmployeeProfile" element={<FullEmployeeProfile/>} />
            <Route path="JobDescription" element={<JobDescription isSidebarClosed={isSidebarClosed}
          handleSidebarToggle={handleSidebarToggle}
          HeaderLavel={'Job Description'} />} />
          <Route path="Leaves" element={<Leaves isSidebarClosed={isSidebarClosed}
          handleSidebarToggle={handleSidebarToggle}
          HeaderLavel={'Leaves'} />} />
      </Routes>
      </Provider>
    </div>
  );
};

export default App;

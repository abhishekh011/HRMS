import React, { useEffect, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import "../App.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { GetImage } from "../assets/image";
import axios from "axios";

interface DashboardProps {
  isSidebarClosed: boolean;
  handleSidebarToggle: () => void;
  HeaderLavel: string;
}

interface Holiday {
  date: {
    iso: string;
  };
  name: string;
}

const Leaves: React.FC<DashboardProps> = ({
  isSidebarClosed,
  handleSidebarToggle,
  HeaderLavel,
}) => {
  const [holidays, setHolidays] = useState<Holiday[]>([]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        const response = await axios.get(
          "https://calendarific.com/api/v2/holidays",
          {
            params: {
              api_key: "opAfUq933yTtjzFUeuI3spDTGKByC67g",
              country: "IN",
              year: 2024,
            },
          }
        );
        setHolidays(response.data.response.holidays);
      } catch (error) {
        console.log(error);
      }
    };

    fetchHolidays();
  }, []);

  return (
    <div className="d-flex">
      <Sidebar isSidebarClosed={isSidebarClosed} />
      <div className={`appDiv ${isSidebarClosed ? "close" : ""}`}>
        <Header
          handleSidebarToggle={handleSidebarToggle}
          HeaderLevel={HeaderLavel}
        />
        <div className="row row-cols-2 mt-5 mx-5">
          <div className="col-7">
            <div className="row row-cols-lg-3 row-cols-md-3 row-cols-1 mt-3 ">
              <div className="text-center">
                <CircularProgressbar
                  value={30}
                  text={`${30}%`}
                  strokeWidth={8}
                  styles={buildStyles({
                    pathColor: `rgba(100, 218, 255, 1)`,
                    textColor: "#f88",
                    trailColor: "#d6d6d6",
                    backgroundColor: "#3e98c7",
                  })}
                />
                <h6>Total Leaves</h6>
              </div>
              <div className="text-center">
                <CircularProgressbar
                  value={80}
                  text={`${80}%`}
                  strokeWidth={8}
                  styles={buildStyles({
                    pathColor: `rgba(256, 166, 51, 1)`,
                    textColor: "#f88",
                    trailColor: "#d6d6d6",
                    backgroundColor: "#3e98c7",
                  })}
                />
                <h6>Half Days</h6>
              </div>
              <div className="text-center">
                <CircularProgressbar
                  value={66}
                  text={`${66}%`}
                  strokeWidth={8}
                  styles={buildStyles({
                    pathColor: `rgba(163, 206, 143, 1)`,
                    textColor: "#f88",
                    trailColor: "#d6d6d6",
                    backgroundColor: "#3e98c7",
                  })}
                />
                <h6>Early Leaves</h6>
              </div>
            </div>
            <div className="mt-2">
              <div className="d-flex justify-content-between my-3">
                <h6>Calendar</h6>
                <div>
                  <span>
                    Eid 403 <i className="fa fa-chevron-down"></i>
                  </span>
                  <span className="mx-5">
                    Dec-Jan 2023 <i className="fa fa-chevron-down"></i>
                  </span>
                </div>
              </div>
              <div>
                <img src={GetImage.calendar} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-5">
            <div style={{ height: "700px", overflowY: "scroll" }}>
              <h6>Upcoming Public Holidays</h6>
              <table className="table table-hover">
                <tbody className="table-td2">
                  {holidays.map((holiday, index) => (
                    <tr className="d-flex justify-content-between" key={index}>
                      <td>
                        {holiday.date.iso} <br />
                        <small>{holiday.name}</small>
                      </td>
                      <td>{holiday.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaves;



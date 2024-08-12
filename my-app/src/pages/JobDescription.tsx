import React from 'react';
import "../App.css";
import '../assets/style/JobDescription.css';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { GetImage } from "../assets/image";

interface DashboardProps {
  isSidebarClosed: boolean;
  handleSidebarToggle: () => void;
  HeaderLavel: string; // Consider renaming to `HeaderLabel` for clarity
}

const JobDescription: React.FC<DashboardProps> = ({
  isSidebarClosed,
  handleSidebarToggle,
  HeaderLavel,
}) => {
  return (
    <div className="d-flex">
      <Sidebar isSidebarClosed={isSidebarClosed} />
      <div className={`appDiv ${isSidebarClosed ? "close" : ""}`}>
        <Header
          handleSidebarToggle={handleSidebarToggle}
          HeaderLevel={HeaderLavel} // Ensure `Header` component expects `HeaderLevel` prop
        />
        <div className="p-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
            {[
              { img: GetImage.descriptionImg1, title: 'UI/UX Designer' },
              { img: GetImage.descriptionImg2, title: 'React Native Developer' },
              { img: GetImage.descriptionImg3, title: 'Node Developer' },
              { img: GetImage.descriptionImg4, title: 'WordPress Developer' },
              { img: GetImage.descriptionImg5, title: 'PHP Developer' },
              { img: GetImage.descriptionImg6, title: 'Drupal Developer' },
            ].map(({ img, title }, index) => (
              <div className="col" key={index}>
                <div className="card">
                  <div className="text-center descriptionImg">
                    <img
                      src={img}
                      className="card-img-top w-75 h-50"
                      alt={title}
                    />
                  </div>
                  <div className="card-body">
                    <p className="card-title">{title}</p>
                    <p className="card-text">
                      Investigation user experience design requirement for our suite of digital assets. Knowledge of colors, typography, and design.
                    </p>
                    <p className='viewMore'>View More</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;

import React from "react";
import './Header.css';
import { GetImage } from "../assets/image";
interface handleSidebarToggle {
  handleSidebarToggle: any;
  HeaderLevel : string;
}

const Header: React.FC<handleSidebarToggle> = ({ handleSidebarToggle,HeaderLevel }) => {
  return (
    <div className="home-content d-flex justify-content-between align-items-center">
    <div className=''>
      <i className='bx bx-menu threeToggel ' onClick={handleSidebarToggle} ></i>
      <h2 className=" d-inline ms-3 " style={{position:'absolute'}}>{HeaderLevel}</h2>
    </div>

    <div className='d-flex pe-4'>
      <span className='pe-3 mt-2 d-lg-block d-md-block d-sm-block d-none'><i className="fa fa-search"></i></span>
      <img className="profileiImage" src={GetImage.Profile}  alt="Profile" />
    </div>
  </div>

  );
};

export default Header;

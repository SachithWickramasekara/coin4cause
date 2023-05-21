import React, { useState, useEffect } from "react";
import {Link, useNavigate} from "react-router-dom";
import { routePaths } from "../routes/routes";
import jwt_decode from "jwt-decode";

interface NavbarProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

function Navbar(props: NavbarProps) {
  const [userEmail, setUserEmail] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleAvatarClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/");
  };

  const handleSettingsClick = () => {
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  

  useEffect(() => {
    const token:any = localStorage.getItem("token");
    if (token) {
      // You need to decode the token to extract the user email
      // You can use a library like jwt-decode for decoding the token
      // Here's an example assuming the token contains a field called "email"
      const decodedToken:any = jwt_decode(token);
      const email = decodedToken.email;
      setUserEmail(email);
    }
  }, []);

  if (window.innerWidth > 820) {
    return (
      <header className="text-white  body-font bg-[#08415C]">
        <div className="container mx-auto flex flex-wrap px-20 py-5 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Link to={routePaths.home}>
              {/* <span className="ml-3 text-xl text-white">Coin4Cause</span> */}
              <img src="assets/icons/Logo.png" alt="logo" />
            </Link>
          </div>
          <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link to={routePaths.about} className="mr-5 hover:text-gray-100">
              About
            </Link>
            <Link
              to={routePaths.campaings}
              className="mr-5 hover:text-gray-100"
            >
              Campaings
            </Link>
            <Link
              to={routePaths.contactUS}
              className="mr-5 hover:text-gray-100"
            >
              Contact
            </Link>
          </div>
          {props.isLoggedIn ? (
            
            <div className="avatar-circle">
              <img src="assets/icons/avatar.png" alt="logo" width={"50%"} height={"50%"} 
              onClick={handleAvatarClick}
              /> {userEmail}

            {isDropdownOpen && (
              <div className="dropdown">
              <button onClick={handleProfileClick}>Profile</button>
              <button onClick={handleSettingsClick}>Settings</button>
              <button onClick={props.onLogout}>Log Out</button>
              </div>
          )}

            </div>
          ) : (
            <Link to={routePaths.login}>
            <button className="inline-flex items-center bg-transparent border border-[#00B5D5] text-[#00B5D5] p-3 focus:outline-none hover:bg-white hover:text-[#00B5D5] rounded text-sm font-bold mt-4 md:mt-0">
              Join the Community
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
          )}

        </div>
      </header>
    );
  } else {
    return (
      <header className="text-gray-600 body-font bg-[#08415C]">
        <div className="container mx-auto flex flex-wrap p-5 flex-row justify-between md:flex-row items-center">
          <div className="flex title-font font-medium items-center md:mb-0">
            <Link to={routePaths.home}>
              {/* <span className="ml-3 text-xl text-white">Coin4Cause</span> */}
              <img src="assets/icons/Logo.png" alt="logo" />
            </Link>
          </div>
          <button
            className="inline-flex items-center text-white border-0 py-1 px-3 focus:outline-none  rounded text-base md:mt-0"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
        <nav
          className={`flex flex-col px-8 pb-8 text-white gap-4 transition duration-300 ${
            isMenuOpen ? "flex" : "hidden"
          } `}
        >
          <Link to={routePaths.about} className="mr-5 hover:text-gray-900">
            About
          </Link>
          <Link to={routePaths.campaings} className="mr-5 hover:text-gray-900">
            Campaigns
          </Link>
          <Link to={routePaths.contactUS} className="mr-5 hover:text-gray-900">
            Contact
          </Link>
          <Link to={routePaths.login}>
            <button className="inline-flex items-center bg-transparent border border-[#00B5D5] text-[#00B5D5] p-3 focus:outline-none hover:bg-white hover:text-[#00B5D5] rounded text-sm font-bold mt-4 md:mt-0">
              Join the Community
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </nav>
      </header>
    );
  }
}
//delete this line

export default Navbar;

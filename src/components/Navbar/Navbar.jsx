import React from "react";
import "./Navbar.scss";
import { FaBars } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ toggle, setToggle }) => {
  return (
    <>
      <div id="navbar">
        <div className="container">
          <div className="logo">
            <div className="icon">
              <FaBars className="bars" onClick={() => setToggle(!toggle)} />
            </div>
            <Link to="/">
              <h2>
                YT<span>Shorts</span>
              </h2>
            </Link>
          </div>
          <div className="nav-search">
            <input placeholder="Search" type="Search" />
            <button>
              <CiSearch className="search-btn" />
            </button>
          </div>
          <div className="user-icons">
            <div className="icon">
              <AiOutlineVideoCameraAdd className="create" />
            </div>
            <div className="icon">
              <IoIosNotificationsOutline className=" notify" />
            </div>
            <div className="icon">
              <FaRegUserCircle className="user" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React from "react";
import "./Sidebar.scss";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { BiSolidUserRectangle } from "react-icons/bi";
import { LuHistory } from "react-icons/lu";
import { MdOndemandVideo } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdVideoLibrary } from "react-icons/md";

import { Link } from "react-router-dom";

const Sidebar = ({ toggle }) => {
  return (
    <>
      <div className={toggle ? "toggleSidebar" : "sidebar"}>
        <div className="side-container">
          <div className="side-link">
            <div className="link">
              <GoHome className="link-icon" />
              <Link to="/home">
                <h3>Home</h3>
              </Link>
            </div>
            <div className="link active">
              <SiYoutubeshorts className="link-icon " />
              <Link to="/">
                <h3>Shorts</h3>
              </Link>
            </div>
            <div className="link">
              <MdSubscriptions className="link-icon" />
              <Link to="/subscription">
                <h3>Subscription</h3>
              </Link>
            </div>
          </div>

          <div className="side-link">
            <div className="link">
              <MdVideoLibrary className="lybrary" />
              <h5>You</h5>
              <IoIosArrowForward className="link-icon forwArrow hide" />
            </div>

            <div className="link hide">
              <BiSolidUserRectangle className="link-icon" />
              <Link to="/your-channel">
                <h3>your channel</h3>
              </Link>
            </div>

            <div className="link hide">
              <LuHistory className="link-icon" />
              <Link to="/history">
                <h3>history</h3>
              </Link>
            </div>

            <div className="link hide">
              <MdOndemandVideo className="link-icon" />
              <Link to="/your-videos">
                <h3>your videos</h3>
              </Link>
            </div>

            <div className="link hide">
              <MdOutlineWatchLater className="link-icon" />
              <Link to="/watch-later">
                <h3>watch later</h3>
              </Link>
            </div>
          </div>

          <div className=""></div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

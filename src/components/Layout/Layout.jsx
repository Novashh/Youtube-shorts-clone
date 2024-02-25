import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Shorts from "../Shorts/Shorts";
import "./Layout.scss";

const Layout = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div id="layout">
        <section className="layout-header">
          <Navbar toggle={toggle} setToggle={setToggle} />
        </section>
        <section className="layout-section">
          <div className="layout-sidebar">
            <Sidebar toggle={toggle} />
          </div>
          <div className="layout-shorts">
            <Shorts />
          </div>
        </section>
      </div>
    </>
  );
};

export default Layout;

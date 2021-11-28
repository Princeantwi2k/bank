import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Nav.css";
import { Sidebar } from "../Page/Sidebar";
import { IconContext } from "react-icons";
import img from "../../Image/me.jpg";

const Nav = () => {
  const [sidebar, setsidebar] = useState(false);
  const showsidebar = () => setsidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "red" }}>
        <div className="navbar">
          <img src={img} alt="profile" className="profile" />

          <Link to="#" className="menu-bar">
            <i className="bx bx-menu" onClick={showsidebar} />
          </Link>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showsidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <i class="bx bx-window-close"></i>
                </Link>
              </li>
              {Sidebar.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Nav;

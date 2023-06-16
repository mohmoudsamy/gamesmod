import React, { useRef, useState } from "react";

// Logo Image
import logo from "../assets/images/logo.svg";

/* Font Icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faBorderAll } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faTowerBroadcast } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

const home = <FontAwesomeIcon icon={faHome} />;
const store = <FontAwesomeIcon icon={faFire} />;
const library = <FontAwesomeIcon icon={faBorderAll} />;
const friends = <FontAwesomeIcon icon={faUserGroup} />;
const live = <FontAwesomeIcon icon={faTowerBroadcast} />;
const downloads = <FontAwesomeIcon icon={faDownload} />;
const settings = <FontAwesomeIcon icon={faGear} />;
const user = <FontAwesomeIcon icon={faUser} />;

const expand = <FontAwesomeIcon icon={faChevronCircleRight} />;

const Sidebar = () => {
  const links = [
    "Home",
    "Store",
    "Library",
    "Friends",
    "Live",
    "Downloads",
    "Settings",
    "User",
  ];
  const renderLinks = () => {
    return links.map((link, i) => {
      return (
        <li className="app__sidebar-links_item" key={i}>
          <a href="/" className="">
            <span>{eval(link.toLowerCase())}</span>
            {link}
          </a>
        </li>
      );
    });
  };

  // Set Collapsed Sidebar Function
  const sidebarRef = useRef(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleCollapsedSidebar = () => {
    console.log(isCollapsed);
  };

  return (
    <div className="app__sidebar border-r-2 pr-3 h-full relative">
      <div className="app__sidebar-logo">
        <img src={logo} alt="Logo" className="cursor-pointer" />
      </div>
      <ul className="app__sidebar-links text-base mt-14 pr-4" ref={sidebarRef}>
        {renderLinks()}
      </ul>
      <span
        className="app__sidebar-expand absolute top-1/3 right-0 z-10 cursor-pointer"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {expand}
      </span>
    </div>
  );
};
export default Sidebar;

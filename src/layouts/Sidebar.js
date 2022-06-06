import React from "react";

// Logo Image
import logo from "../assets/images/logo.svg";

/* Font Icons */
// Upper Sidebar Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faBorderAll } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faTowerBroadcast } from "@fortawesome/free-solid-svg-icons";

// Lower Sidebar Icons
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const home = <FontAwesomeIcon icon={faHome} />;
const store = <FontAwesomeIcon icon={faFire} />;
const library = <FontAwesomeIcon icon={faBorderAll} />;
const friends = <FontAwesomeIcon icon={faUserGroup} />;
const live = <FontAwesomeIcon icon={faTowerBroadcast} />;

const downloads = <FontAwesomeIcon icon={faDownload} />;
const settings = <FontAwesomeIcon icon={faGear} />;
const user = <FontAwesomeIcon icon={faUser} />;

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

  return (
    <div className="app__sidebar border-r-2 pr-3">
      <div className="app__sidebar-logo">
        <img src={logo} alt="Logo" className="cursor-pointer" />
      </div>
      <ul className="app__sidebar-links text-base mt-14">{renderLinks()}</ul>
    </div>
  );
};
export default Sidebar;

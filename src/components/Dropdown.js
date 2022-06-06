import React from "react";

// Font Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const cart = <FontAwesomeIcon icon={faCartShopping} />;
const message = <FontAwesomeIcon icon={faEnvelope} />;

const Dropdown = ({ open }) => {
  return (
    <div
      className={`app__dropdown absolute top-12 p-5 rounded w-80 cursor-default ${
        open ? "notification_open" : ""
      }`}
    >
      <ul className="app__dropdown_list">
        <li className="app__dropdown_list-item flex items-center text-left rounded p-2">
          <div className="w-3/12 app__dropdown_list-item_icon flex justify-center">
            <span className="rounded-full text-center">{cart}</span>
          </div>
          <div className="w-9/12 app__dropdown_list-item_info pl-3">
            <h3>Ordered Processed</h3>
            <h5>21 Minutes ago</h5>
          </div>
        </li>
        <hr className="mt-3 mb-3" />
        <li className="app__dropdown_list-item flex items-center text-left rounded p-2">
          <div className="w-3/12 app__dropdown_list-item_icon flex justify-center">
            <span className="rounded-full text-center">{message}</span>
          </div>
          <div className="w-9/12 app__dropdown_list-item_info pl-3">
            <h3>New Message</h3>
            <h5>1 day ago</h5>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;

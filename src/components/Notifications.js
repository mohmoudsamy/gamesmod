import React, { useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
const bell = <FontAwesomeIcon icon={faBell} />;
const message = <FontAwesomeIcon icon={faEnvelope} />;
const cart = <FontAwesomeIcon icon={faCartShopping} />;
const truck = <FontAwesomeIcon icon={faTruck} />;

const Notifications = ({ notifications }) => {
  // Set State to open the notification list
  const [open, setOpen] = useState(false);
  // Loop over notifications
  const icons = [message, cart, truck];
  const renderNotifications = () => {
    return notifications.map((notification, i) => {
      return (
        <li
          className="dropdown__notifications-list_item flex items-center cursor-pointer p-3"
          key={i}
        >
          <div className="dropdown__notifications-list_item-icon w-1/6 mr-4">
            {icons[i]}
          </div>
          <div className="dropdown__notifications-list_item-text w-5/6">
            {notification}
          </div>
        </li>
      );
    });
  };

  // Close the notification on body click
  const notificationRef = useRef(null);
  document.body.addEventListener("click", (e) => {
    if (
      notificationRef.current &&
      !notificationRef.current.contains(e.target)
    ) {
      setOpen(false);
    }
  });

  // Set List Reference

  return (
    <div
      className="dropdown__notifications relative w-fit"
      ref={notificationRef}
    >
      <div
        className="dropdown__notifications-icon cursor-pointer relative z-10 w-fit ml-3"
        onClick={() => setOpen(!open)}
      >
        {bell}
      </div>
      <ul
        className={`dropdown__notifications-list absolute w-52 left-0 py-6 px-3 rounded top-16 z-[-1] ${
          open ? " block" : " hidden"
        } `}
      >
        {renderNotifications()}
      </ul>
    </div>
  );
};

export default Notifications;

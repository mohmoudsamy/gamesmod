import React, { useEffect, useRef } from "react";
import Notifications from "../components/Notifications";

// Font Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const search = <FontAwesomeIcon icon={faSearch} />;

const Header = () => {
  // Set Active Link Class On The Load
  const linkRef = useRef(null);
  useEffect(() => {
    linkRef.current.children[0].firstElementChild.classList.add("active_link");
  }, []);

  // Trigger On Click Action To Active Link
  const links = ["Discover", "Browse", "Wishlist"];
  const activeLink = (e) => {
    e.preventDefault();
    e.target.parentElement.parentElement.children[0].firstElementChild.classList.add(
      "active_link"
    );
    Array.from(e.target.parentElement.parentElement.children).forEach((ele) => {
      let theLinkClass = ele.firstElementChild.classList;
      ele.textContent === e.target.textContent
        ? theLinkClass.add("active_link")
        : theLinkClass.remove("active_link");
    });
  };

  const notifications = [
    "New Message!",
    "Item Purchased",
    "Your package is shipped",
  ];

  return (
    <header className="app__header flex justify-between pl-6 pb-6">
      {/* Header Navbar */}
      <ul className="app__header-navbar flex w-3/6 pt-2" ref={linkRef}>
        {links.map((link, i) => {
          return (
            <React.Fragment key={i}>
              <li className="mr-8">
                <a href="/" onClick={activeLink}>
                  {link}
                </a>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
      {/* Header Search and Notifications */}
      <div className="app__header-search_notification flex justify-between w-3/6">
        <div className="app__header-notification flex flex-col z-40">
          <Notifications notifications={notifications} />
        </div>
        <div className="app__header-search relative w-5/6">
          <span className="absolute top-2.5 left-3">{search}</span>
          <input
            type="search"
            placeholder="Search"
            className="outline-none indent-8 w-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

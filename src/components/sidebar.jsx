import React, { useState } from "react";
import { FaHome, FaBox, FaShoppingCart, FaUsers, FaCog, FaBars } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <h2 className="sidebar-title">{isOpen ? "Sidebar" : "S"}</h2>
      <ul>
        <li>
          <FaHome /> {isOpen && "Home"}
        </li>
        <li>
          <FaBox /> {isOpen && "Dashboard"}
        </li>
        <li>
          <FaShoppingCart /> {isOpen && "Orders"}
        </li>
        <li>
          <FaUsers /> {isOpen && "Customers"}
        </li>
        <li>
          <FaCog /> {isOpen && "Settings"}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

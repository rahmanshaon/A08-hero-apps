import React from "react";
import { NavLink } from "react-router";

const NavLinkLists = () => {
  // custom css
  const activeLinkStyle = {
    background: "linear-gradient(125deg, #632EE3 5.68%, #9F62F2 88.38%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    borderImage: "linear-gradient(125deg, #632EE3 5.68%, #9F62F2 88.38%) 1",
    borderBottom: "2px solid",
    paddingBottom: "4px",
    fontWeight: 600,
  };

  return (
    <>
      <li className="font-medium">
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
        >
          Home
        </NavLink>
      </li>
      <li className="font-medium">
        <NavLink
          to="/apps"
          style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
        >
          Apps
        </NavLink>
      </li>
      <li className="font-medium">
        <NavLink
          to="/installation"
          style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
        >
          Installation
        </NavLink>
      </li>
    </>
  );
};

export default NavLinkLists;

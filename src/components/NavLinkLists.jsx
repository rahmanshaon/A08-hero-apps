import React from "react";
import { NavLink } from "react-router";

const NavLinkLists = ({ variant = "gradient" }) => {
  // Gradient active link
  const gradientActiveStyle = {
    background: "linear-gradient(125deg, #632EE3 5.68%, #9F62F2 88.38%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    borderImage: "linear-gradient(125deg, #632EE3 5.68%, #9F62F2 88.38%) 1",
    borderBottom: "2px solid",
    paddingBottom: "4px",
    fontWeight: 600,
  };

  // White active link
  const whiteActiveStyle = {
    color: "#ffffff",
    borderBottom: "2px solid #ffffff",
    paddingBottom: "4px",
    borderRadius: 0,
    fontWeight: 600,
  };

  // Choose which one to use
  const activeLinkStyle =
    variant === "white" ? whiteActiveStyle : gradientActiveStyle;

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
      <li className="font-medium">
        <NavLink
          to="/error"
          style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
        >
          Error Test
        </NavLink>
      </li>
    </>
  );
};

export default NavLinkLists;

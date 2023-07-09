import React from "react";
import { FcAbout } from "react-icons/fc";
import { FaBars } from "react-icons/fa";
import { BiSolidDashboard, BiCommentDots } from "react-icons/bi";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { PiUserListFill } from "react-icons/pi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import "./../Style/sidebar.css";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function Sidebar({ children }) {
  const [isOpen, setIsOpen] = React.useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    {
      path: "/",
      name: "Dashboard",
      icon: <BiSolidDashboard />,
    },
    {
      path: "/about",
      name: "About",
      icon: <FcAbout />,
    },
    {
      path: "/analytic",
      name: "Analytic",
      icon: <TbDeviceDesktopAnalytics />,
    },
    {
      path: "/comment",
      name: "Comment",
      icon: <BiCommentDots />,
    },
    {
      path: "/userlist",
      name: "UserList",
      icon: <PiUserListFill />,
    },
    {
      path: "/userview",
      name: "Userview",
      icon: <AiOutlineUsergroupAdd />,
    },
  ];

  return (
    <div className="container">
      <div style={{width:isOpen ? "230px": "50px"}} className="sidebar">
        <div className="top-section"> 
          <h1 style={{display:isOpen ? "block": "none"}}className="logo">Lasfasfao</h1>
          <div style={{marginLeft   :isOpen ? "50px": "0px"}} className="bar">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItems.map((item, index) => (
          <NavLink to={item.path} key={index} className="link">
            <div className="icon">{item.icon}</div>
            <div style={{display:isOpen ? "block": "none"}} className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
}

Sidebar.propTypes = {
  children: PropTypes.node,
};

export default Sidebar;

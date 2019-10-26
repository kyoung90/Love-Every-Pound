import React from "react";
import { Menu, Image } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const NavbarDesktop = ({
  leftItems,
  rightItems,
  loggedInRightItems,
  handleLogOut
}) => {
  const generateRightItems = () => {
    if (localStorage.getItem("token")) {
      let menuItems = loggedInRightItems.map(item => (
        <Menu.Item onClick={handleLogOut} {...item} />
      ));
      return <Menu.Menu position="right">{menuItems}</Menu.Menu>;
    } else {
      let menuItems = rightItems.map(item => (
        <Menu.Item as={NavLink} {...item} />
      ));
      return <Menu.Menu position="right">{menuItems}</Menu.Menu>;
    }
  };

  return (
    <Menu fixed="top" className="info" inverted>
      <Menu.Item>
        <Image
          as={NavLink}
          to="/"
          size="mini"
          src="https://react.semantic-ui.com/logo.png"
        />
      </Menu.Item>
      {leftItems.map(item => (
        <Menu.Item as={NavLink} {...item} />
      ))}

      {generateRightItems()}
    </Menu>
  );
};

export default NavbarDesktop;

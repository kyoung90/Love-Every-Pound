import React from "react";
import { Menu, Image } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const NavbarDesktop = ({ leftItems, rightItems }) => {
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
      {localStorage.getItem("token") ? (
        <div></div>
      ) : (
        <Menu.Menu position="right">
          {rightItems.map(item => (
            <Menu.Item as={NavLink} {...item} />
          ))}
        </Menu.Menu>
      )}
    </Menu>
  );
};

export default NavbarDesktop;

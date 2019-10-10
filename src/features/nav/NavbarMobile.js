import React from "react";
import { Sidebar, Menu, Image, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const NavbarMobile = ({
  children,
  leftItems,
  onPusherClick,
  onToggle,
  rightItems,
  visible
}) => {
  return (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        className="info"
        inverted
        vertical
        visible={visible}
      >
        {leftItems.map(item => {
          return <Menu.Item as={NavLink} {...item} />;
        })}
      </Sidebar>
      <Sidebar.Pusher
        dimmed={visible}
        onClick={onPusherClick}
        style={{ minHeight: "100vh" }}
      >
        <Menu fixed="top" className="info" inverted>
          <Menu.Item>
            <Image
              as={NavLink}
              to="/"
              size="mini"
              src="https://react.semantic-ui.com/logo.png"
            />
          </Menu.Item>
          <Menu.Item onClick={onToggle}>
            <Icon name="sidebar" />
          </Menu.Item>
          <Menu.Menu position="right">
            {rightItems.map(item => (
              <Menu.Item as={NavLink} {...item} />
            ))}
          </Menu.Menu>
        </Menu>
        {children}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default NavbarMobile;

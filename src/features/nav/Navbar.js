import React from "react";
import { Menu, Container, Button, Image, Dropdown } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    // <Menu fixed="top" inverted>
    //   <Container>
    //     <Menu.Item header as={NavLink} to="/">
    //       {/* <img
    //         src="/assets/logo.png"
    //         alt="logo"
    //         style={{ marginRight: "10px" }}
    //       /> */}
    //       Love Every Pound
    //     </Menu.Item>
    //     {/* <Menu.Item name="Weight Tracker" as={NavLink} to="/weight" /> */}

    //     {false ? (
    //       <Menu.Item position="right">
    //         <Image
    //           avatar
    //           spaced="right"
    //           src={
    //             "https://react.semantic-ui.com/images/avatar/large/matthew.png"
    //           }
    //         />
    //         <Dropdown pointing="top left" text="User Email">
    //           <Dropdown.Menu>
    //             <Dropdown.Item
    //               as={Link}
    //               to={`/profile/username`}
    //               text="My profile"
    //               icon="user"
    //             />
    //             <Dropdown.Item
    //               onClick={() => alert("Logged out")}
    //               text="Logout"
    //               icon="power"
    //             />
    //           </Dropdown.Menu>
    //         </Dropdown>
    //       </Menu.Item>
    //     ) : (
    //       <div>
    //         {" "}
    //         <Menu.Item position="right">
    //           <Menu.Item>
    //             <NavLink exact activeClassName="active_navlink" to="/login">
    //               Login
    //             </NavLink>
    //           </Menu.Item>
    //           <Menu.Item>
    //             <NavLink exact activeClassName="active_navlink" to="/signup">
    //               Sign Up
    //             </NavLink>
    //           </Menu.Item>
    //         </Menu.Item>
    //       </div>
    //     )}
    //   </Container>
    // </Menu>

    <Container textAlign='center'>
      <NavLink exact activeClassName="active-navbar" to="/">
        <h1>Love Every Pound</h1>
      </NavLink>
      <NavLink exact activeClassName="active-navbar" to="/about">
        About
      </NavLink>
      <br />
      <NavLink exact activeClassName="active-navbar" to="/quote">
        Quote Of The Day!
      </NavLink>
      <br />
      <NavLink exact activeClassName="active-navbar" to="/weights">
        Progress
      </NavLink>
      <br />
      <NavLink exact activeClassName="active-navbar" to="/login">
        Login
      </NavLink>
      <br />
      <NavLink exact activeClassName="active-navbar" to="/signup">
        Signup
      </NavLink>
    </Container>
  );
};

export default Navbar;

import React, { useState } from "react";
import {
  Menu,
  Container,
  Image,
  Sidebar,
  Icon,
  Responsive
} from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
// import { leftItems, rightItems } from "../../commons/lists";

const NavBarChildren = ({ children }) => (
  <Container style={{ marginTop: "5em" }}>{children}</Container>
);

const Navbar = props => {
  const [visible, setVisible] = useState(false);

  const handlePusher = () => {
    if (visible) setVisible(false);
  };

  const handleToggle = () => setVisible(!visible);

  const { children, leftItems, rightItems, loggedInRightItems } = props;

  const handleLogOut = () => {
    props.logout()
    props.history.push("/login")
  }

  return (
    <div>
      <Responsive {...Responsive.onlyMobile}>
        <NavbarMobile
          leftItems={leftItems}
          onPusherClick={handlePusher}
          onToggle={handleToggle}
          rightItems={rightItems}
          visible={visible}
        >
          <NavBarChildren>{children}</NavBarChildren>
        </NavbarMobile>
      </Responsive>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <NavbarDesktop leftItems={leftItems} rightItems={rightItems} loggedInRightItems={loggedInRightItems} handleLogOut={handleLogOut}/>
        <NavBarChildren>{children}</NavBarChildren>
      </Responsive>
    </div>
  );
};

// const Navbar = () => {
//   return (
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

{
  /* <Container textAlign='center'>
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
</Container> */
}
//   );
// };

let mapStateToProps = state => {
  return {
    current_user: state.users.current_user
  }
}

let mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch({type: "LOGOUT_USER"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));

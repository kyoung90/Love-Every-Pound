import React, { useState } from "react";
import { Container, Responsive } from "semantic-ui-react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
// import { leftItems, rightItems } from "../../commons/lists";
import { logoutAction } from "../../actions/userActions";

const NavBarChildren = ({ children }) => (
  <div style={{ marginTop: "1em" }}>{children}</div>
);

const Navbar = props => {
  const [visible, setVisible] = useState(false);

  const handlePusher = () => {
    if (visible) setVisible(false);
  };

  const handleToggle = () => setVisible(!visible);

  const { children, leftItems, rightItems, loggedInRightItems } = props;

  const handleLogOut = () => {
    props.logout().then(() => {
      props.history.push("/login");
    });
  };

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
        <NavbarDesktop
          leftItems={leftItems}
          rightItems={rightItems}
          loggedInRightItems={loggedInRightItems}
          handleLogOut={handleLogOut}
        />
        <NavBarChildren>{children}</NavBarChildren>
      </Responsive>
    </div>
  );
};

let mapStateToProps = state => {
  return {
    current_user: state.users.current_user
  };
};

let mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logoutAction())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Navbar));

import React, { useState } from "react";
import {
  Form,
  Grid,
  Button,
  Header,
  Segment,
  Message
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { loginAction } from "../../../actions/userActions";
import { connect } from "react-redux";

const Login = props => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = () => {
    props.login({ user }).then(() => {
      props.history.push("/quote");
    });
  };

  return (
    <Grid textAlign="center" style={{ height: "50vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" textAlign="center">
          Log-in to your account
        </Header>
        <Form onSubmit={handleSubmit} size="large" className="info">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              onChange={handleChange}
              name="email"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={handleChange}
              name="password"
            />

            <Button
              className="success"
              inverted
              animated="fade"
              fluid
              size="large"
            >
              <Button.Content visible> Login </Button.Content>
              <Button.Content hidden> Love Yourself </Button.Content>
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <Link to="/signup">Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

let mapStateToProps = state => {
  return { current_user: state.users.current_user };
};

let mapDispatchToProps = dispatch => {
  return {
    login: formData => dispatch(loginAction(formData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

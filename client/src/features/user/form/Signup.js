import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  Grid,
  Segment,
  Message,
  Header,
  Select
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPreferences } from "../../../actions/preferenceActions";
import { signupAction, loginAction } from "../../../actions/userActions";

// const options = [
//   { key: "f", id="1", text: "Fitness", value: "fitness" },
//   { key: "s", id="2", text: "Self Love", value: "self love" },
//   { key: "p", id="3", text: "Positive Affirmation", value: "positive affirmation" },
//   { key: "i", id="4", text: "Inspirational", value: "inspirational" }
// ];

const weights = [
  { key: "l", text: "Lbs", value: "lb" },
  { key: "k", text: "Kgs", value: "kg" }
];

const Signup = props => {
  //   const { value } = this.state;
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    weight_unit: "",
    preference_ids: []
  });

  useEffect(() => {
    props.fetchPreferences();
  }, [props]);

  const options = props.preferences.map(preference => {
    return { key: preference.id, text: preference.name, value: preference.id };
  });

  const handleChange = (event, data) => {
    setUser({
      ...user,
      [data.name]: data.value
    });
  };

  const handleSubmit = () => {
    props.signup({ user }).then(() => {
      props.login({ user }).then(() => {
        props.history.push("/quote");
      });
    });
  };

  return (
    <Grid textAlign="center" style={{ height: "70vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" className="info-text" textAlign="center">
          Create an account
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="users"
              iconPosition="left"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              name="email"
              onChange={handleChange}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              name="password"
              onChange={handleChange}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Confirm Password"
              type="password"
              name="confirm_password"
              onChange={handleChange}
            />
            <Form.Field
              label="Preferred Weight Unit"
              control={Select}
              options={weights}
              placeholder="Lbs"
              name="weight_unit"
              onChange={handleChange}
            />
            {/* <Form.Group grouped>
              <label>Weight Unit</label>
              <Form.Group inline>
                <Form.Radio
                  label="Lbs."
                  value="lb"
                  //   checked={value === "lb"}
                  onChange={handleChange}
                />
                <Form.Radio
                  label="Kgs."
                  value="kg"
                  //   checked={value === "kg"}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form.Group> */}

            <Form.Dropdown
              label="Quote Preference"
              placeholder="Inspirational"
              fluid
              multiple
              selection
              options={options}
              name="preference_ids"
              onChange={handleChange}
            />
            <br />

            <Button
              type="submit"
              className="success"
              fluid
              size="large"
              inverted
            >
              Sign Up
            </Button>
          </Segment>
        </Form>
        <Message>
          Already have an account? <Link to="/login">Login</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

let mapStateToProps = state => {
  return {
    preferences: state.preferences.preferences
  };
};

let mapDispatchToProps = dispatch => {
  return {
    fetchPreferences: () => dispatch(fetchPreferences()),
    signup: formData => dispatch(signupAction(formData)),
    login: formData => dispatch(loginAction(formData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);

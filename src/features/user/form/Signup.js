import React, { Component } from "react";
import {
  Form,
  Dropdown,
  Button,
  Grid,
  Segment,
  Message,
  Header,
  Select
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const options = [
  { key: "f", text: "Fitness", value: "fitness" },
  { key: "s", text: "Self Love", value: "self love" },
  { key: "p", text: "Positive Affirmation", value: "positive affirmation" },
  { key: "i", text: "Inspirational", value: "inspirational" }
];

const weights = [
  { key: "l", text: "Lbs", value: "lb" },
  { key: "k", text: "Kgs", value: "kg" }
];

const Signup = () => {
  //   const { value } = this.state;

  const handleChange = event => {};

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="purple" textAlign="center">
          Create your account
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="users"
              iconPosition="left"
              placeholder="Username"
            />
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Confirm Password"
              type="password"
            />
            <Form.Field
              label="Preferred Weight Unit"
              control={Select}
              options={weights}
              placeholder="Lbs"
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

            <Dropdown
              label="Quote Preference"
              placeholder="Inspirational"
              fluid
              multiple
              selection
              options={options}
            />
            <br />

            <Button color="purple" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          Already have an account? <Link to="/login">Login</Link>
        </Message>
      </Grid.Column>
    </Grid>

    // <Grid centered columns="twelve">
    //   <Grid.Row>
    //     <Grid.Column width="four">
    //       <Form>
    //         <Form.Input fluid label="Username" placeholder="Username" />
    //         <Form.Input fluid label="Email" placeholder="Email" />

    //         <Form.Input
    //           fluid
    //           label="Password"
    //           placeholder="Password"
    //           type="password"
    //         />
    // <Form.Input
    //   fluid
    //   label="Confirm Password"
    //   placeholder="Confirm Password"
    //   type="password"
    // />
    // <Form.Group grouped>
    //   <label>Weight Unit</label>
    //   <Form.Group inline>
    //     <Form.Radio
    //       label="Lbs."
    //       value="lb"
    //       //   checked={value === "lb"}
    //       onChange={handleChange}
    //     />
    //     <Form.Radio
    //       label="Kgs."
    //       value="kg"
    //       //   checked={value === "kg"}
    //       onChange={handleChange}
    //     />
    //   </Form.Group>
    // </Form.Group>

    // <Dropdown
    //   placeholder="Quote Preference"
    //   fluid
    //   multiple
    //   selection
    //   options={options}
    // />

    //         <br />
    // <Button animated="fade" color="purple">
    //   <Button.Content visible> Sign Up </Button.Content>
    //   <Button.Content hidden> Love Yourself </Button.Content>
    // </Button>
    //       </Form>
    //     </Grid.Column>
    //   </Grid.Row>
    // </Grid>
  );
};

export default Signup;

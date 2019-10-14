import React from "react";
import {
  Form,
  Grid,
  Button,
  Header,
  Segment,
  Message
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Grid textAlign="center" style={{ height: "50vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" textAlign="center">
          Log-in to your account
        </Header>
        <Form size="large" classname="info">
          <Segment stacked>
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

            
            <Button className="success" inverted animated="fade" fluid size="large">
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

export default Login;

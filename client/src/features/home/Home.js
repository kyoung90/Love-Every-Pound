import React from "react";
import {Button} from "semantic-ui-react"
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div>
      <h1>Welcome!</h1>
      <h3>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source.{" "}
      </h3>
      <Button as={Link} to="/about" >Learn More</Button>
      <Button as={Link} to="/login">Login</Button>
      <Button as={Link} to="/signup">Sign up</Button>
    </div>
  );
};

export default Home;
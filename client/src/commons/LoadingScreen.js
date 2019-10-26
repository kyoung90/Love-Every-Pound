import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

const LoadingScreen = ({ inverted, content }) => {
  return (
    <Dimmer active inverted={inverted}>
      <Loader content={content} />
    </Dimmer>
  );
};

export default LoadingScreen;

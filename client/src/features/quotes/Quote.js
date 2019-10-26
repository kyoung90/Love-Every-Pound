import React from "react";
import { Card, Button, Container } from "semantic-ui-react";
import { Link } from "react-dom";
import WeightForm from "../user/form/WeightForm";

const Quote = props => {
  const quote = props.quote
    ? [
        <br />,
        <h5> {props.quote.content} </h5>,
        <br />,
        <h6> By: {props.quote.author.name} </h6>
      ]
    : [];

  return (
    <Container fluid maxWidth={1000}>
      <Card centered raised className="card">
        <Card.Content className="success" header="Your daily inspiration" />
        <Card.Content description={quote} />
        <Card.Content className="success" extra>
          <Button
            primary
            className="info"
            circular
            as={Link}
            to="/"
            icon="quote right"
          />
          <Button
            primary
            className="info"
            circular
            as={Link}
            to="/weights"
            icon="calendar alternate"
          />
        </Card.Content>
      </Card>
    </Container>
  );
};

export default Quote;

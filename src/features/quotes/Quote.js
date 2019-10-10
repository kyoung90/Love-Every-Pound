import React from 'react'
import { Card, Button, Container } from "semantic-ui-react";
import { Link } from "react-dom";
import WeightForm from '../user/form/WeightForm'

const quote = [
    <br />,
    <h5> "Life is great. You got this!" </h5>,
    <br />,
    <h6> By: Baka </h6>
  ];

const Quote = () => {
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
        <WeightForm />
      </Card.Content>
    </Card>
  </Container>

    )
}

export default Quote

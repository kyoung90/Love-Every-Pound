import React, { useState } from "react";
import WeightCalendar from "./WeightCalendar";
import WeightChart from "./WeightChart";
import { Grid, Card } from "semantic-ui-react";

const WeightDisplay = () => {
  const [date, setDate] = useState(new Date());

  const handleChange = event => {
    console.log(event);
    setDate(event.target.value);
  };

  return (
    <Card fluid>
        <Card.Content>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column width={8}>
            <WeightChart />
          </Grid.Column>
          <Grid.Column width={8}>
            <WeightCalendar onChange={handleChange} value={date} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </Card.Content>
    </Card>
  );
};

export default WeightDisplay;

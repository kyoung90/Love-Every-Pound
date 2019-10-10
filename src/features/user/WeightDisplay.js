import React, { useState } from "react";
import WeightCalendar from "./WeightCalendar";
import WeightChart from "./WeightChart";
import { Grid, Card, Header, Segment, Container } from "semantic-ui-react";

const WeightDisplay = () => {
  const [date, setDate] = useState(new Date());

  const handleChange = event => {
    console.log(event);
    setDate(event.target.value);
  };

  return (
    <Grid columns={2} stackable={true} centered={true} textAlign="center">
      <Grid.Column>
        <Segment className="weight-chart">
          <WeightChart />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment className="weight-chart">
          <WeightCalendar onChange={handleChange} value={date} />
        </Segment>
      </Grid.Column>
    </Grid>

    // <Card.Group stackable={true} centered={true}>
    //   <Card >
    //     <div className="weight-chart">
    //       <WeightChart />
    //     </div>
    //   </Card>

    //   <Card >
    //     <WeightCalendar onChange={handleChange} value={date} />
    //   </Card>
    // </Card.Group>
    // <Card fluid>
    //     <Card.Content>
    //   <Grid columns={2}>
    //     <Grid.Row>
    //       <Grid.Column width={8}>
    //         <div className="weight-chart">
    //         <WeightChart/>
    //         </div>
    //       </Grid.Column>
    //       <Grid.Column width={8}>
    //         <WeightCalendar onChange={handleChange} value={date} />
    //       </Grid.Column>
    //     </Grid.Row>
    //   </Grid>
    //   </Card.Content>
    // </Card>
  );
};

export default WeightDisplay;

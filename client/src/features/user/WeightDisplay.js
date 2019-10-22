import React, { useState, useEffect } from "react";
import WeightCalendar from "./WeightCalendar";
import WeightChart from "./WeightChart";
import { Grid, Segment } from "semantic-ui-react";
import {connect} from "react-redux"
import {fetchUser} from "../../actions/userActions"
// import {createWeight, deleteWeight, updateWeight} from "../../actions/"

const WeightDisplay = (props) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    if (localStorage.getItem("currentUserId")){
      props.fetchUser(parseInt(localStorage.getItem("currentUserId")))
    }
    
  }, [props.fetchUser])

  const handleChange = event => {
    setDate(event.target.value);
  };

  return (
    <Grid columns={2} stackable={true} centered={true} textAlign="center">
      <Grid.Column>
        <Segment className="weight-chart">
          <WeightChart weights={props.currentUser ? props.currentUser.weights : []}/>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment className="weight-chart">
          <WeightCalendar weights={props.currentUser ? props.currentUser.weights : []} onChange={handleChange} value={date} />
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

let mapStateToProps = state => {
  return {
    currentUser : state.users.currentUser
  }
}

let mapDispatchToProps = dispatch => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeightDisplay);

import React, { useState, useEffect } from "react";
import WeightCalendar from "./WeightCalendar";
import WeightChart from "./WeightChart";
import { Grid, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchUser } from "../../actions/userActions";
import LoadingScreen from "../../commons/LoadingScreen";

const WeightDisplay = props => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    if (localStorage.getItem("currentUserId")) {
      props.fetchUser(parseInt(localStorage.getItem("currentUserId")));
    }
  }, [props.fetchUser]);

  const handleChange = event => {
    setDate(event.target.value);
  };
  if (props.loading){
    return (<LoadingScreen content="Retrieving User Data"/>)
  }

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
  );
};

let mapStateToProps = state => {
  return {
    currentUser: state.users.currentUser,
    loading: state.users.loading
  };
};

let mapDispatchToProps = dispatch => {
  return {
    fetchUser: id => dispatch(fetchUser(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeightDisplay);

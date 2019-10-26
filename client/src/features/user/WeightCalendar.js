import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "../../App.css";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";

import { connect } from "react-redux";
import WeightForm from "./form/WeightForm";
import {
  addUserWeight,
  updateUserWeight,
  deleteUserWeight
} from "../../actions/userActions";

const WeightCalendar = props => {
  const calendarComponentRef = React.createRef();
  const [calendarWeekends, setCalendarWeekends] = useState(true);
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const [weight, setWeight] = useState({});

  useEffect(() => {
    if (props.currentUser && props.currentUser.weights) {
      let events = props.currentUser.weights.map(weight => ({
        id: weight.id,
        title: `${weight.weight} ${props.currentUser.weight_unit}`,
        allDay: true,
        date: new Date(weight.created_at)
      }));
      setCalendarEvents(events);
    }
  }, [setCalendarEvents, props.currentUser]);

  const handleChange = event => {
    setWeight({ ...weight, weight: parseInt(event.target.value) });
  };

  const handleDateClick = arg => {
    if (arg.date <= new Date()) {
      setWeight({
        weight: 0,
        date: arg.date.toString()
      });
      setModalOpen(true);
    } else {
      console.log("Can't add weight in the future");
    }
  };

  const handleEventClick = event => {
    setWeight({
      id: event.event.id,
      weight: parseInt(event.event.title.split(" ")[0]),
      date: event.event.start.toString()
    });

    setModalOpen(true);
  };

  const handleSubmit = event => {
    event.preventDefault()
    if (weight.id) {
      props.updateUserWeight(weight.id, weight.weight);
      setModalOpen(false);
    } else {
      props.addUserWeight(weight);
      setModalOpen(false);
    }
  };

  const handleDelete = event => {
    event.preventDefault()
    props.deleteUserWeight(weight.id)
    setModalOpen(false)
  }

  return (
    <>
      <FullCalendar
        selectable={false}
        themeSystem="dark"
        defaultView="dayGridMonth"
        header={{
          left: "prev",
          center: "title",
          right: "next"
        }}
        plugins={[dayGridPlugin, interactionPlugin]}
        ref={calendarComponentRef}
        weekends={calendarWeekends}
        events={calendarEvents}
        eventColor="#FFFFFF"
        displayEventTime={false}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
      />
      <WeightForm
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        weight={weight}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
      />
    </>
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
    addUserWeight: weight => dispatch(addUserWeight(weight)),
    updateUserWeight: (id, weight) => dispatch(updateUserWeight(id, weight)),
    deleteUserWeight: id => dispatch(deleteUserWeight(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeightCalendar);

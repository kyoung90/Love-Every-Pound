import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "../../App.css";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";

import { connect } from "react-redux";
import WeightForm from "./form/WeightForm";

let today = new Date();
let yesterday = new Date();
let tomorrow = new Date();
yesterday.setDate(yesterday.getDate() - 1);
tomorrow.setDate(tomorrow.getDate() + 1);

const WeightCalendar = props => {
  const calendarComponentRef = React.createRef();
  const [calendarWeekends, setCalendarWeekends] = useState(true);
  const [calendarEvents, setCalendarEvents] = useState(
    props.weights
      ? props.weights.map(weight => ({
          id: weight.id,
          title: `${weight.weight} ${props.currentUser.weight_unit}`,
          allDay: true,
          date: new Date(weight.created_at)
        }))
      : [{ id: "11", title: "158 lb", date: tomorrow, allDay: true }]
  );
  const [modalOpen, setModalOpen] = useState(false);

  const [weight, setWeight] = useState({});

  const handleDateClick = arg => {
    // bind with an arrow function
    console.log(arg.date);
    console.log(new Date());
    // arg > new Date()
    if (arg.date <= new Date()) {
      setModalOpen(true);
    } else {
      console.log("Can't add weight in the future")
    }
  };

  // const handleDateClick = arg => {
  //   this.setState({
  //     // add new event data
  //     calendarEvents: calendarEvents.concat({
  //       // creates a new array
  //       title: "160 lb",
  //       start: arg.date,
  //       allDay: arg.allDay
  //     })
  //   });
  // };

  // state = {
  //   calendarWeekends: true,
  //   calendarEvents: [
  //     ,

  //     // initial event data
  //     // { id: "9", title: "159 lb", date: yesterday, allDay: true },
  //     // { id: "10", title: "160 lb", date: today, allDay: true },

  //     { id: "11", title: "158 lb", date: tomorrow, allDay: true }
  //   ]
  // };
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
        eventClick={info => {
          console.log(info)
          setWeight();
          setModalOpen(true);
          // alert("Event: " + info.event.id);
          // let { title, id, start } = info.event;
          // console.log(`${title} - ${id} - ${start} `);
          // console.log(calendarEvents);
          // let events = calendarEvents.filter(event => event.id !== id);
          // events.push({ id: id, title: "160 lb", date: start });
          // setCalendarEvents(events);

          // change the border color just for fun
          //   info.el.style.borderColor = "red";
        }}
      />
      <WeightForm modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  );
};

let mapStateToProps = state => {
  return {
    currentUser: state.users.currentUser
  };
};

let mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeightCalendar);

// import "./styles.css";

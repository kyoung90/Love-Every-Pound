import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "../../App.css"
// import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
let today = new Date();
let yesterday = new Date();
let tomorrow = new Date()
  yesterday.setDate(yesterday.getDate() - 1);
  tomorrow.setDate(tomorrow.getDate() + 1)

class WeightCalendar extends Component {
  calendarComponentRef = React.createRef();
  
  state = {
    calendarWeekends: true,
    calendarEvents: [
      // initial event data
      { id: "9", title: "159 lb", date: yesterday, allDay: true },
      { id: "10", title: "160 lb", date: today, allDay: true },
      
      { id: "11", title: "158 lb", date: tomorrow, allDay: true }
      

    ]
  };

  render() {
    return (
      <div className="demo-app">
        <div className="demo-app-top" />
        <div className="demo-app-calendar">
          <FullCalendar
          themeSystem="dark"
            defaultView="dayGridMonth"
            header={{
              left: "prev",
              center: "title",
              right:"next"
            }}
            plugins={[dayGridPlugin]}
            ref={this.calendarComponentRef}
            weekends={this.state.calendarWeekends}
            events={this.state.calendarEvents}
            eventColor="#FFFFFF"
            displayEventTime={false}
            eventClick={(info) => {
              alert("Event: " + info.event.id);
              let { title, id, start } = info.event;
              console.log(`${title} - ${id} - ${start} `);
              console.log(this.state.calendarEvents)
              let events = this.state.calendarEvents.filter(
                event => event.id !== id
              );
              events.push({ id: id, title: "160 lb", date: start });
              this.setState({ ...this.state, calendarEvents: events });

              // change the border color just for fun
            //   info.el.style.borderColor = "red";
            }}
          />
        </div>
      </div>
    );
  }

  handleDateClick = arg => {
   
      this.setState({
        // add new event data
        calendarEvents: this.state.calendarEvents.concat({
          // creates a new array
          title: "160 lb",
          start: arg.date,
          allDay: arg.allDay
        })
      });
    
  };
}

export default WeightCalendar;

// import "./styles.css";

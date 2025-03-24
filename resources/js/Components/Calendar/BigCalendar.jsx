import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import axios from "axios";
import "react-big-calendar/lib/css/react-big-calendar.css";


// Big Calender, sets out the calender UI.
moment.locale("en-GB");
const localizer = momentLocalizer(moment);

export default function BigCalendar() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('/interview-events')
            .then(response => {
                setEvents(response.data);
                console.log(response);
            })
            .catch(error => {
                console.error("Error fetching events:", error);
            });
    }, []);

    return (
        <div className="App">
            <Calendar
                views={["day", "agenda", "work_week", "month"]}
                localizer={localizer}
                defaultDate={new Date()}
                defaultView="month"
                events={events}
                style={{ height: "100vh" }}
                onSelectEvent={(event) => alert(`Interview at ${event.company}`)}

            />
        </div>
    );
}

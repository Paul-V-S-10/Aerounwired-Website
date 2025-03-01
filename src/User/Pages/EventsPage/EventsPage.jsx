import React from "react";
import "./EventsPage.css";
import events from "./eventsData";

const EventsPage = () => {
  return (
    <div className="events-container">
      <h1 className="page-title">Upcoming Events</h1>
      <div className="events-list">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <img src={event.poster} alt={event.title} className="event-poster" />
            <div className="event-details">
              <h2 className="event-title">{event.title}</h2>
              <p className="event-date">{event.date}</p>
              <p className="event-location">📍 {event.location}</p>
              <p className="event-description">{event.description}</p>
              <a href={event.link} className="event-link" target="_blank" rel="noopener noreferrer">
                More Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;

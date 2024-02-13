// utils/events.js
import eventsData from '../public/events.json';

export const getEvents = () => eventsData.events;

export const addEvent = (events, newEvent) => {
  const updatedEvents = [...events, { ...newEvent, id: events.length + 1 }];
  // Save the new events to the JSON file or your database here if needed
  return updatedEvents;
};

export const removeEvent = (events, eventId) => {
  const updatedEvents = events.filter((event) => event.id !== eventId);
  // Save the updated events to the JSON file or your database here if needed
  return updatedEvents;
};

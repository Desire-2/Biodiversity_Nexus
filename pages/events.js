import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Image from 'next/image';
import styles from './events.module.css'; // Importing CSS module for styling

// Admin credentials
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'password';

// Sample data for events
const eventsData = [
  {
    id: 1,
    title: 'Event 1',
    location: 'Location 1',
    date: '2022-01-01',
    time: '10:00 AM',
    description: 'Description for Event 1',
    image: null,
    completed: false,
  },
  {
    id: 2,
    title: 'Event 2',
    location: 'Location 2',
    date: '2022-02-02',
    time: '2:00 PM',
    description: 'Description for Event 2',
    image: null,
    completed: true,
  },
];

// EventsPage component
const EventsPage = () => {
  // State variables
  const [isAdmin, setIsAdmin] = useState(false); // State for admin status
  const [events, setEvents] = useState(eventsData); // State for events data
  const [newEvent, setNewEvent] = useState({ // State for new event
    title: '',
    location: '',
    date: '',
    time: '',
    description: '',
    image: null,
    completed: false,
  });
  const [editingEventId, setEditingEventId] = useState(null); // State for editing event ID

  // Function to toggle admin panel visibility
  const toggleAdminPanel = () => {
    if (!isAdmin) {
      const username = prompt('Enter admin username:'); // Prompt for username
      const password = prompt('Enter admin password:'); // Prompt for password
      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        setIsAdmin(true); // Set admin status to true if credentials match
      } else {
        alert('Incorrect username or password'); // Alert for incorrect credentials
      }
    } else {
      setIsAdmin(false); // Set admin status to false if already an admin
    }
  };

  // Function to handle event completion
  const handleEventCompletion = (eventId) => {
    const updatedEvents = events.map((event) => {
      if (event.id === eventId) {
        return { ...event, completed: true }; // Mark event as completed
      }
      return event;
    });
    setEvents(updatedEvents); // Update events data
  };

  // Function to handle input change for new event
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  // Function to handle image upload for new event
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setNewEvent((prevEvent) => ({
      ...prevEvent,
      image: file,
    }));
  };

  // Function to add new event
  const addEvent = () => {
    const newEventWithId = {
      ...newEvent,
      id: events.length + 1,
    };
    setEvents((prevEvents) => [...prevEvents, newEventWithId]); // Add new event to events data
    setNewEvent({ // Reset new event form
      title: '',
      location: '',
      date: '',
      time: '',
      description: '',
      image: null,
      completed: false,
    });
  };

  // Function to edit event
  const editEvent = (eventId) => {
    setEditingEventId(eventId); // Set ID of event being edited
    const eventToEdit = events.find((event) => event.id === eventId);
    setNewEvent(eventToEdit); // Set new event data to event being edited
  };

  // Function to save edited event
  const saveEditedEvent = () => {
    const updatedEvents = events.map((event) =>
      event.id === newEvent.id ? newEvent : event
    );
    setEvents(updatedEvents); // Update events data with edited event
    setNewEvent({ // Reset new event form
      title: '',
      location: '',
      date: '',
      time: '',
      description: '',
      image: null,
      completed: false,
    });
    setEditingEventId(null); // Reset editing event ID
  };

  // Function to remove event
  const removeEvent = (eventId) => {
    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents); // Update events data by removing event
  };

  // Get the current date and time
  const currentDate = new Date();

  // JSX for rendering the component
  return (
    <div className={styles.container}>
      <Navigation /> {/* Include the Navigation component */}
      <h1 className={styles.title}>Welcome to Our Events Page</h1>

      {isAdmin && ( // Render admin panel if user is admin
        <div className={styles.adminPanel}>
          <h2>{editingEventId ? 'Edit Event' : 'Add New Event'}</h2>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newEvent.title}
            onChange={handleInputChange}
            className={styles.input}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={newEvent.location}
            onChange={handleInputChange}
            className={styles.input}
          />
          <input
            type="date"
            name="date"
            value={newEvent.date}
            onChange={handleInputChange}
            className={styles.input}
          />
          <input
            type="time"
            name="time"
            value={newEvent.time}
            onChange={handleInputChange}
            className={styles.input}
          />
          <textarea
            name="description"
            placeholder="Description"
            value={newEvent.description}
            onChange={handleInputChange}
            className={styles.textarea}
          />
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageUpload}
            className={styles.input}
          />
          <button onClick={editingEventId ? saveEditedEvent : addEvent}>
            {editingEventId ? 'Save Changes' : 'Add Event'}
          </button>
          {events.map((event) => (
            <div key={event.id} className={styles.event}>
              {currentDate <= new Date(`${event.date} ${event.time}`) && ( // Check if event is upcoming
                <button onClick={() => handleEventCompletion(event.id)}>Mark as Completed</button>
              )}
              <button onClick={() => editEvent(event.id)}>Edit</button>
              <button onClick={() => removeEvent(event.id)}>Remove</button>
              <div>
                <h3>{event.title}</h3>
                <p>{event.location}</p>
                <p>Date: {event.date}</p>
                <p>Time: {event.time}</p>
                <p>{event.description}</p>
              </div>
              {event.image && (
                <Image
                  src={URL.createObjectURL(event.image)} width={250} height={250}
                  alt={event.title}
                  className={styles.eventImage}
                />
              )}
            </div>
          ))}
        </div>
      )}

      <h2>Upcoming Events</h2>
      {events
        .filter((event) => currentDate <= new Date(`${event.date} ${event.time}`)) // Filter upcoming events
        .map((event) => (
          <div key={event.id} className={styles.event}>
            <div>
              <h3>{event.title}</h3>
              <p>{event.location}</p>
              <p>Date: {event.date}</p>
              <p>Time: {event.time}</p>
              <p>{event.description}</p>
              {currentDate <= new Date(`${event.date} ${event.time}`) && ( // Render button to mark event as completed for upcoming events
                <button onClick={() => handleEventCompletion(event.id)}>
                  Mark as Completed
                </button>
              )}
            </div>
            {event.image && ( // Render event image if available
              <Image
                src={URL.createObjectURL(event.image)} width={250} height={250}
                alt={event.title}
                className={styles.eventImage}
              />
            )}
          </div>
        ))}

      <h2>Completed Events</h2>
      {events
        .filter((event) => event.completed) // Filter completed events
        .map((event) => (
          <div key={event.id} className={styles.event}>
            <div>
              <h3>{event.title}</h3>
              <p>{event.location}</p>
              <p>Date: {event.date}</p>
              <p>Time: {event.time}</p>
              <p>{event.description}</p>
            </div>
            {event.image && ( // Render event image if available
              <Image
                src={URL.createObjectURL(event.image)}  width={250} height={250}
                alt={event.title}
                className={styles.eventImage}
              />
            )}
          </div>
        ))}

      <button className={styles.toggleButton} onClick={toggleAdminPanel}>
        {isAdmin ? 'Hide Admin Panel' : 'Show Admin Panel'}
      </button>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default EventsPage;
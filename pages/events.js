import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Image from 'next/image';
import styles from '../styles/events.module.css';

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'password';

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

const EventsPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [events, setEvents] = useState(eventsData);
  const [newEvent, setNewEvent] = useState({
    title: '',
    location: '',
    date: '',
    time: '',
    description: '',
    image: null,
    completed: false,
  });
  const [editingEventId, setEditingEventId] = useState(null);

  const toggleAdminPanel = () => {
    if (!isAdmin) {
      const username = prompt('Enter admin username:');
      const password = prompt('Enter admin password:');
      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        setIsAdmin(true);
      } else {
        alert('Incorrect username or password');
      }
    } else {
      setIsAdmin(false);
    }
  };

  const handleEventCompletion = (eventId) => {
    const updatedEvents = events.map((event) => {
      if (event.id === eventId) {
        return { ...event, completed: true };
      }
      return event;
    });
    setEvents(updatedEvents);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setNewEvent((prevEvent) => ({
      ...prevEvent,
      image: file,
    }));
  };

  const addEvent = () => {
    const newEventWithId = {
      ...newEvent,
      id: events.length + 1,
    };
    setEvents((prevEvents) => [...prevEvents, newEventWithId]);
    setNewEvent({
      title: '',
      location: '',
      date: '',
      time: '',
      description: '',
      image: null,
      completed: false,
    });
  };

  const editEvent = (eventId) => {
    setEditingEventId(eventId);
    const eventToEdit = events.find((event) => event.id === eventId);
    setNewEvent(eventToEdit);
  };

  const saveEditedEvent = () => {
    const updatedEvents = events.map((event) =>
      event.id === newEvent.id ? newEvent : event
    );
    setEvents(updatedEvents);
    setNewEvent({
      title: '',
      location: '',
      date: '',
      time: '',
      description: '',
      image: null,
      completed: false,
    });
    setEditingEventId(null);
  };

  const removeEvent = (eventId) => {
    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents);
  };

  const currentDate = new Date();

  return (
    <div className={styles.container}>
      <Navigation />
      <h1 className={styles.title}>Welcome to Our Events Page</h1>

      {isAdmin && (
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
              {currentDate <= new Date(`${event.date} ${event.time}`) && (
                <button onClick={() => handleEventCompletion(event.id)}>
                  Mark as Completed
                </button>
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
                  src={URL.createObjectURL(event.image)}
                  width={250}
                  height={250}
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
        .filter((event) => currentDate <= new Date(`${event.date} ${event.time}`))
        .map((event) => (
          <div key={event.id} className={styles.event}>
            <div>
              <h3>{event.title}</h3>
              <p>{event.location}</p>
              <p>Date: {event.date}</p>
              <p>Time: {event.time}</p>
              <p>{event.description}</p>
              {currentDate <= new Date(`${event.date} ${event.time}`) && (
                <button onClick={() => handleEventCompletion(event.id)}>
                  Mark as Completed
                </button>
              )}
            </div>
            {event.image && (
              <Image
                src={URL.createObjectURL(event.image)}
                width={250}
                height={250}
                alt={event.title}
                className={styles.eventImage}
              />
            )}
          </div>
        ))}

      <h2>Completed Events</h2>
      {events
        .filter((event) => event.completed)
        .map((event) => (
          <div key={event.id} className={styles.event}>
            <div>
              <h3>{event.title}</h3>
              <p>{event.location}</p>
              <p>Date: {event.date}</p>
              <p>Time: {event.time}</p>
              <p>{event.description}</p>
            </div>
            {event.image && (
              <Image
                src={URL.createObjectURL(event.image)}
                width={250}
                height={250}
                alt={event.title}
                className={styles.eventImage}
              />
            )}
          </div>
        ))}

      <button className={styles.toggleButton} onClick={toggleAdminPanel}>
        {isAdmin ? 'Hide Admin Panel' : 'Show Admin Panel'}
      </button>
      <Footer />
    </div>
  );
};

export default EventsPage;

import React, { Component } from 'react';
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

class EventsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdmin: false,
      events: eventsData,
      newEvent: {
        title: '',
        location: '',
        date: '',
        time: '',
        description: '',
        image: null,
        completed: false,
      },
      editingEventId: null,
    };
  }

  toggleAdminPanel = () => {
    if (!this.state.isAdmin) {
      const username = prompt('Enter admin username:');
      const password = prompt('Enter admin password:');
      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        this.setState({ isAdmin: true });
      } else {
        alert('Incorrect username or password');
      }
    } else {
      this.setState({ isAdmin: false });
    }
  };

  handleEventCompletion = (eventId) => {
    const updatedEvents = this.state.events.map((event) => {
      if (event.id === eventId) {
        return { ...event, completed: true };
      }
      return event;
    });
    this.setState({ events: updatedEvents });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      newEvent: { ...prevState.newEvent, [name]: value },
    }));
  };

  handleImageUpload = (e) => {
    const file = e.target.files[0];
    this.setState((prevState) => ({
      newEvent: { ...prevState.newEvent, image: file },
    }));
  };

  addEvent = () => {
    const newEventWithId = {
      ...this.state.newEvent,
      id: this.state.events.length + 1,
    };
    this.setState((prevState) => ({
      events: [...prevState.events, newEventWithId],
      newEvent: {
        title: '',
        location: '',
        date: '',
        time: '',
        description: '',
        image: null,
        completed: false,
      },
    }));
  };

  editEvent = (eventId) => {
    this.setState({ editingEventId: eventId });
    const eventToEdit = this.state.events.find((event) => event.id === eventId);
    this.setState({ newEvent: eventToEdit });
  };

  saveEditedEvent = () => {
    const updatedEvents = this.state.events.map((event) =>
      event.id === this.state.newEvent.id ? this.state.newEvent : event
    );
    this.setState({
      events: updatedEvents,
      newEvent: {
        title: '',
        location: '',
        date: '',
        time: '',
        description: '',
        image: null,
        completed: false,
      },
      editingEventId: null,
    });
  };

  removeEvent = (eventId) => {
    const updatedEvents = this.state.events.filter((event) => event.id !== eventId);
    this.setState({ events: updatedEvents });
  };

  render() {
    const currentDate = new Date();
    
    const upcomingEvents = this.state.events.filter(
      (event) => currentDate <= new Date(`${event.date} ${event.time}`)
    );
    const completedEvents = this.state.events.filter((event) => event.completed);

    return (
      <div className={styles.container}>
        <Navigation />
        <h1 className={styles.title}>Welcome to Our Events Page</h1>
  
        {this.state.isAdmin && (
          <div className={styles.adminPanel}>
            <h2>{this.state.editingEventId ? 'Edit Event' : 'Add New Event'}</h2>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={this.state.newEvent.title}
              onChange={this.handleInputChange}
              className={styles.input}
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={this.state.newEvent.location}
              onChange={this.handleInputChange}
              className={styles.input}
            />
            <input
              type="date"
              name="date"
              value={this.state.newEvent.date}
              onChange={this.handleInputChange}
              className={styles.input}
            />
            <input
              type="time"
              name="time"
              value={this.state.newEvent.time}
              onChange={this.handleInputChange}
              className={styles.input}
            />
            <textarea
              name="description"
              placeholder="Description"
              value={this.state.newEvent.description}
              onChange={this.handleInputChange}
              className={styles.textarea}
            />
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={this.handleImageUpload}
              className={styles.input}
            />
            <button onClick={this.state.editingEventId ? this.saveEditedEvent : this.addEvent}>
              {this.state.editingEventId ? 'Save Changes' : 'Add Event'}
            </button>
            {this.state.events.map((event) => (
              <div key={event.id} className={styles.event}>
                {currentDate <= new Date(`${event.date} ${event.time}`) && (
                  <button onClick={() => this.handleEventCompletion(event.id)}>
                    Mark as Completed
                  </button>
                )}
                <button onClick={() => this.editEvent(event.id)}>Edit</button>
                <button onClick={() => this.removeEvent(event.id)}>Remove</button>
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
        {upcomingEvents.map((event) => (
            <div key={event.id} className={styles.event}>
              <div>
                <h3>{event.title}</h3>
                <p>{event.location}</p>
                <p>Date: {event.date}</p>
                <p>Time: {event.time}</p>
                <p>{event.description}</p>
                {currentDate <= new Date(`${event.date} ${event.time}`) && (
                  <button onClick={() => this.handleEventCompletion(event.id)}>
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
        {this.state.events
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
  
        <button className={styles.toggleButton} onClick={this.toggleAdminPanel}>
          {this.state.isAdmin ? 'Hide Admin Panel' : 'Show Admin Panel'}
        </button>
        <Footer />
      </div>
    );
  }
}

export default EventsPage;

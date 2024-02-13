// components/EventList.js
const EventList = ({ events }) => {
    return (
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <img src={event.image} alt={event.title} style={{ maxWidth: '100px' }} />
            <h3>{event.title}</h3>
            <p>{event.location}</p>
            <p>{event.date} at {event.time}</p>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
    );
  };
  
  export default EventList;
  
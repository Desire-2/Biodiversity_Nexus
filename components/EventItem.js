// components/EventItem.js

const EventItem = ({ event, onRemoveEvent }) => {
    const { id, title, location, dateTime, description, image, status } = event;
  
    const handleRemoveClick = () => {
      onRemoveEvent(id);
    };
  
    return (
      <div className="event-item">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>Location: {location}</p>
        <p>Date & Time: {dateTime}</p>
        <p>Description: {description}</p>
        <p>Status: {status}</p>
        <button onClick={handleRemoveClick}>Remove Event</button>
      </div>
    );
  };
  
  export default EventItem;
  
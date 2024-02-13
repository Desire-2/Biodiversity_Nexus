import { useState } from 'react';

const EventForm = ({ onAddEvent }) => {
  const [newEvent, setNewEvent] = useState({
    title: '',
    location: '',
    date: '',
    time: '',
    image: null,
    description: '',
    status: 'upcoming',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prevEvent) => ({ ...prevEvent, [name]: value }));
    // Clear error message when user types in the input field
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewEvent((prevEvent) => ({ ...prevEvent, image: file }));
  };

  const validateForm = () => {
    const errors = {};
    if (!newEvent.title.trim()) {
      errors.title = 'Title is required';
    }
    if (!newEvent.location.trim()) {
      errors.location = 'Location is required';
    }
    if (!newEvent.date.trim()) {
      errors.date = 'Date is required';
    }
    if (!newEvent.time.trim()) {
      errors.time = 'Time is required';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onAddEvent(newEvent);
      setNewEvent({
        title: '',
        location: '',
        date: '',
        time: '',
        image: null,
        description: '',
        status: 'upcoming',
      });
    }
  };

  const handleReset = () => {
    setNewEvent({
      title: '',
      location: '',
      date: '',
      time: '',
      image: null,
      description: '',
      status: 'upcoming',
    });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} onReset={handleReset} className="event-form">
      <h2>Add New Event</h2>
      <div className="form-group">
        <label>Title:</label>
        <input type="text" name="title" value={newEvent.title} onChange={handleChange} />
        {errors.title && <span className="error">{errors.title}</span>}
      </div>
      <div className="form-group">
        <label>Location:</label>
        <input type="text" name="location" value={newEvent.location} onChange={handleChange} />
        {errors.location && <span className="error">{errors.location}</span>}
      </div>
      <div className="form-group">
        <label>Date:</label>
        <input type="date" name="date" value={newEvent.date} onChange={handleChange} />
        {errors.date && <span className="error">{errors.date}</span>}
      </div>
      <div className="form-group">
        <label>Time:</label>
        <input type="time" name="time" value={newEvent.time} onChange={handleChange} />
        {errors.time && <span className="error">{errors.time}</span>}
      </div>
      <div className="form-group">
        <label>Image:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {newEvent.image && (
          <img src={URL.createObjectURL(newEvent.image)} alt="Event" className="image-preview" />
        )}
      </div>
      <div className="form-group">
        <label>Description:</label>
        <textarea name="description" value={newEvent.description} onChange={handleChange} />
      </div>
      <div className="form-buttons">
        <button type="submit" className="btn btn-primary">Add Event</button>
        <button type="reset" className="btn btn-secondary">Reset Form</button>
      </div>
    </form>
  );
};

export default EventForm;

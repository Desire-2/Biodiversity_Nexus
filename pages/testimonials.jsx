// pages/testimonials.js

import React, { useState, useRef, useEffect } from 'react';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import styles from '../styles/testimonials.module.css'; // Import the CSS Module

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [newTestimonial, setNewTestimonial] = useState('');
  const [name, setName] = useState('');
  const testimonialsEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [testimonials]);

  const scrollToBottom = () => {
    testimonialsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'testimonial') {
      setNewTestimonial(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '' && newTestimonial.trim() !== '') {
      const testimonial = `${newTestimonial}\n\n${name}`;
      setTestimonials([testimonial, ...testimonials]);
      setNewTestimonial('');
      setName('');
    }
  };

  // Sample testimonial constant
  const sampleTestimonial = `I'm incredibly grateful for the support and opportunities provided by the Biodiversity Nexus Student Association. Being a part of this association has truly enriched my academic and personal growth. The resources, mentorship, and community engagement initiatives have been invaluable in deepening my understanding of biodiversity conservation.\n\nThrough various projects and events organized by the association, I've had the chance to contribute meaningfully to environmental sustainability efforts and connect with like-minded individuals who share my passion for conservation. The hands-on experiences and collaborative environment fostered by the association have been instrumental in shaping my perspective and career aspirations.\n\nI'm inspired by the dedication of the association's members and leadership in promoting biodiversity awareness and fostering a culture of environmental stewardship among students. The opportunities for learning, networking, and advocacy provided by the association have empowered me to make a positive impact in my community and beyond.\n\nI wholeheartedly endorse the Biodiversity Nexus Student Association to anyone passionate about conservation and eager to make a difference in the world. It's an honor to be a part of such a supportive and impactful community dedicated to preserving our planet's rich biodiversity.`;

  return (
    <div className={styles['testimonials-container']}>
      <Navigation />
      <h1>Testimonials</h1>
      <div className={styles['testimonial-card']}>
        <p className={styles['testimonial-text']}>{sampleTestimonial.split('\n\n')[0]}</p>
        <p className={styles['testimonial-author']}>Desire Bikorimana</p>
      </div>
      <div>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles['testimonial-card']}>
            <p className={styles['testimonial-text']}>{testimonial.split('\n\n')[0]}</p>
            <p className={styles['testimonial-author']}>{testimonial.split('\n\n')[1]}</p>
          </div>
        ))}
        <div ref={testimonialsEndRef}></div>
      </div>
      <h2>Submit a Testimonial</h2>
      <form className={styles['testimonial-form']} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleInputChange}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="testimonial">Testimonial:</label>
          <textarea
            id="testimonial"
            name="testimonial"
            value={newTestimonial}
            onChange={handleInputChange}
            placeholder="Enter your testimonial"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <Footer />
    </div>
  );
};

export default Testimonials;

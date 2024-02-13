import { useState } from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmissionError(null);
    try {
      // Basic email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Invalid email format');
      }

      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setSubmissionSuccess(true);
        handleReset();
      } else {
        setSubmissionError('Failed to send email. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmissionError('Failed to send email. Please try again later.');
    }
    setSubmitting(false);
  };

  return (
    <div className={styles.container}>
      <header>
        <Navigation /> {/* Include the Navigation component */}
      </header>
      <h1>Contact Us</h1>
      <p className={styles.description}>If you have any questions or inquiries, please feel free to contact us using the form below or Direct chat with us on Whatsapp.</p>
      {submissionError && <p className={styles.error}>{submissionError}</p>}
      {submissionSuccess && <p className={styles.success}>Your message has been sent successfully!</p>}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className={styles.textarea}
          />
          <p className={styles.characterCount}>Character Count: {formData.message.length}</p>
        </div>
        <div className={styles.buttonGroup}>
          <button type="submit" disabled={submitting} className={styles.submitButton}>Send Message</button>
          <button type="button" onClick={handleReset} className={styles.resetButton}>Reset</button>
        </div>
      </form>
      <div className={styles.whatsappButton}>
        <a
          href="https://wa.me/+250780784924?text=Hello%20there!"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappLink}
        >
            <img
                src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
                alt="WhatsApp Logo"
                className={styles.whatsappLogo}
            />
            <span>Chat with us on WhatsApp</span>
        </a>
      </div>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default Contact;

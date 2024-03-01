import React, { Component } from 'react';
import Image from 'next/image';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import styles from '../styles/Contact.module.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      submitting: false,
      submissionError: null,
      submissionSuccess: false
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }));
  };

  handleReset = () => {
    this.setState({
      formData: {
        name: '',
        email: '',
        message: ''
      }
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ submitting: true, submissionError: null });

    try {
      const { formData } = this.state;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Invalid email format');
      }

      const response = await fetch('/../sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        this.setState({ submissionSuccess: true });
        this.handleReset();
      } else {
        this.setState({ submissionError: 'Failed to send email. Please try again later.' });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      this.setState({ submissionError: 'Failed to send email. Please try again later.' });
    }

    this.setState({ submitting: false });
  };

  render() {
    const { formData, submitting, submissionError, submissionSuccess } = this.state;

    return (
      <div className={styles.container}>
        <header>
          <Navigation />
        </header>
        <h1>Contact Us</h1>
        <p className={styles.description}>If you have any questions or inquiries, please feel free to contact us using the form below, or Direct chat with us on Whatsapp.</p>
        {submissionError && <p className={styles.error}>{submissionError}</p>}
        {submissionSuccess && <p className={styles.success}>Your message has been sent successfully!</p>}
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
              required
              className={styles.textarea}
            />
            <p className={styles.characterCount}>Character Count: {formData.message.length}</p>
          </div>
          <div className={styles.buttonGroup}>
            <button type="submit" disabled={submitting} className={styles.submitButton}>Send Message</button>
            <button type="button" onClick={this.handleReset} className={styles.resetButton}>Reset</button>
          </div>
        </form>
        <div className={styles.whatsappButton}>
          <a
            href="https://wa.me/+250780784924?text=Hello%20there!"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappLink}
          >
            <Image
              src="/Photos/2.png"
              alt="WhatsApp Logo"
              className={styles.whatsappLogo}
              width={48}
              height={48}
            />
            <span>Chat with us on WhatsApp</span>
          </a>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;

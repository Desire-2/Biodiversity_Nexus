import React, { Component } from 'react';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import styles from '../styles/DonatePage.module.css'; // Import CSS file for styles

class DonatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donationAmount: 0
    };
  }

  handleDonationChange = (event) => {
    this.setState({ donationAmount: event.target.value });
  };

  handleDonationSubmit = () => {
    const { donationAmount } = this.state;
    alert(`Thank you for donating $${donationAmount}! Your contribution will make a difference.`);
  };

  render() {
    const { donationAmount } = this.state;

    return (
      <div className={styles.container}>
        <Navigation />
        <h1>Support Biodiversity Nexus Student Association</h1>
        <p className={styles.paragraph}>
          Many organizations across the globe work tirelessly to conserve biodiversity and protect our planet. However, a significant challenge lies in the fact that often these efforts don&apos;t effectively reach non-educated populations. Despite their noble intentions, these organizations fail to engage and educate those who are not formally schooled. This gap in outreach can hinder conservation efforts and limit the impact we can collectively make.
        </p>
        <p className={styles.paragraph}>
          At Biodiversity Nexus Student Association, we recognize the importance of inclusive conservation efforts. We believe that everyone, regardless of educational background, should have access to knowledge about biodiversity and the environment. By donating to our cause, you are not only supporting our conservation projects but also helping us bridge this gap by reaching out to non-educated communities and empowering them with knowledge and resources to protect our planet.
        </p>
        <div className={styles.donationContainer}>
          <h2>Donate Now</h2>
          <p>Enter your donation amount:</p>
          <input
            type="number"
            value={donationAmount}
            onChange={this.handleDonationChange}
            className={styles.input}
          />
          <button onClick={this.handleDonationSubmit} className={styles.button}>Donate</button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default DonatePage;

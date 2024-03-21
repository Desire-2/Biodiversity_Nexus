import React, { Component } from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import styles from '../styles/DonatePage.module.css'; // Import CSS file for styles

class DonatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donationAmount: 0,
      donationGoal: 1000, // Set the donation goal
      donatedAmount: 500, // Set initial donated amount for demonstration
      donationHistory: [],
      donationSubmitted: false
    };
  }

  // Function to handle donation amount change
  handleDonationChange = (event) => {
    this.setState({ donationAmount: event.target.value });
  };

  // Function to handle donation submission
  handleDonationSubmit = () => {
    const { donationAmount, donatedAmount, donationHistory } = this.state;
    const newDonatedAmount = donatedAmount + parseInt(donationAmount);
    const newDonation = {
      amount: donationAmount,
      date: new Date().toLocaleString()
    };
    this.setState({
      donatedAmount: newDonatedAmount,
      donationSubmitted: true,
      donationHistory: [newDonation, ...donationHistory]
    });
  };

  renderShareButtons() {
    if (typeof window !== 'undefined') {
      // Render social media sharing buttons only if window is defined
      return (
        <div className={styles.shareButtons}>
          {/* Social media sharing buttons */}
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.shareButton}
          >
            Facebook
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.shareButton}
          >
            Twitter
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(window.location.href)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.shareButton}
          >
            LinkedIn
          </a>
        </div>
      );
    }
    return null;
  }

  render() {
    const { donationAmount, donationGoal, donatedAmount, donationHistory, donationSubmitted } = this.state;
    const donationPercentage = Math.min((donatedAmount / donationGoal) * 100, 100);
    const totalDonors = donationHistory.length;
    const recentDonations = donationHistory.slice(0, 5);

    return (
      <div>
        <Navigation />
        <div className={styles.container}>
          <div className={styles.content}>
            {/* Title and introduction */}
            <h1 className={styles.title}>Support Biodiversity Nexus Student Association</h1>
            {/* Remaining content */}
            {/* ... */}
            {this.renderShareButtons()}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default DonatePage;

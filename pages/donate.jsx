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
            <p className={styles.paragraph}>
              Many organizations across the globe work tirelessly to conserve biodiversity and protect our planet. However, a significant challenge lies in the fact that often these efforts don't effectively reach non-educated populations. Despite their noble intentions, these organizations fail to engage and educate those who are not formally schooled. This gap in outreach can hinder conservation efforts and limit the impact we can collectively make.
            </p>
            <p className={styles.paragraph}>
              At Biodiversity Nexus Student Association, we recognize the importance of inclusive conservation efforts. We believe that everyone, regardless of educational background, should have access to knowledge about biodiversity and the environment. By donating to our cause, you are not only supporting our conservation projects but also helping us bridge this gap by reaching out to non-educated communities and empowering them with knowledge and resources to protect our planet.
            </p>

            {/* Donation Container */}
            <div className={styles.donationContainer}>
              <h2 className={styles.donationTitle}>Donate Now</h2>
              {donationSubmitted ? (
                <div className={styles.thankYouMessage}>
                  <p>Thank you for your donation!</p>
                </div>
              ) : (
                <>
                  {/* Donation form */}
                  <p className={styles.donationText}>Enter your donation amount:</p>
                  <input
                    type="number"
                    value={donationAmount}
                    onChange={this.handleDonationChange}
                    className={styles.input}
                  />
                  <button onClick={this.handleDonationSubmit} className={styles.button}>Donate</button>
                </>
              )}
              {/* Donation Progress */}
              <div className={styles.progressContainer}>
                <div className={styles.progressBar} style={{ width: `${donationPercentage}%` }}></div>
                <p className={styles.progressText}>{`$${donatedAmount} raised of $${donationGoal}`}</p>
              </div>
            </div>

            {/* Donation Details */}
            <div className={styles.donationDetails}>
              <div className={styles.totalDonors}>
                <p>Total Donors: {totalDonors}</p>
              </div>
              <div className={styles.donatedAmount}>
                <p>Amount Raised: ${donatedAmount}</p>
              </div>
            </div>

            {/* Recent Donations */}
            <div className={styles.recentDonations}>
              <h2>Recent Donations</h2>
              <ul className={styles.donationList}>
                {recentDonations.map((donation, index) => (
                  <li key={index} className={styles.donationItem}>{`$${donation.amount} - ${donation.date}`}</li>
                ))}
              </ul>
            </div>

            {/* Donation Tiers */}
            <div className={styles.tiers}>
              <h2>Donation Tiers</h2>
              <div className={styles.tier}>
                <p>$10 - Bronze Tier</p>
                <p>Thank you message</p>
              </div>
              <div className={styles.tier}>
                <p>$25 - Silver Tier</p>
                <p>Thank you letter + Social media shoutout</p>
              </div>
              <div className={styles.tier}>
                <p>$50 - Gold Tier</p>
                <p>Personalized certificate + Name on our website</p>
              </div>
              <div className={styles.tier}>
                <p>$100 - Platinum Tier</p>
                <p>Personalized video message + Exclusive merchandise</p>
              </div>
            </div>

            {/* Share Container */}
            <div className={styles.shareContainer}>
              <h2 className={styles.shareTitle}>Share</h2>
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
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default DonatePage;
// This is the DonatePage component that we created. It's a class component that manages the state of the donation amount, donation goal, donated amount, donation history, and whether the donation has been submitted. The component has a constructor method that initializes the state with the donation amount set to 0, the donation goal set to 1000, the donated amount set to 500, the donation history set to an empty array, and the donationSubmitted set to false.
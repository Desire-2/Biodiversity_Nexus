// components/Footer.js
import styles from './Navigation.module.css';
const Footer = () => {
    return (
      <footer className={styles.footer}>
        <img className={styles.log} src="./../images/Log D.png" alt="Biodiversity Nexus Rwanda Logo" srcset=""></img>
        <div className={styles.contact}>
          <h3>Contact Us</h3>
          <p>Email: biodiversitynexus@yahoo.com</p>
          <p>Phone: +250 780784924</p>
          <p>Address: University of Rwanda, Nyarugenge Campus, Kigali City, Rwanda</p>
        </div>
  
        <div className={styles.socialMedia}>
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://www.facebook.com/profile.php?id=61552413531335" target="_blank" rel="noopener noreferrer"><img src="./../images/linkedin.jpg" alt="Facebook" /></a></li>
            <li><a href="https://x.com/Biodiversi36098?t=c3MO0IgE02xM-k2aEO08Xw&s=09" target="_blank" rel="noopener noreferrer"><img src="./../images/twiter.jpg" alt="Twitter" /></a></li>
            <li><a href="https://instagram.com/biodiversitynexus10?utm_source=qr&igshid=MThlNWY1MzQwNA==" target="_blank" rel="noopener noreferrer"><img src="../images/ins.png" alt="Instagram" /></a></li>
            <li><a href="https://linkedin.com/in/biodirvesisty-nexus-ba13b1295" target="_blank" rel="noopener noreferrer"><img src="./../images/OIP.jpg" alt="LinkedIn" /></a></li>
            <li><a href="https://www.youtube.com/channel/UClzReVQCA-pR9GMQpdtJ8eA" target="_blank" rel="noopener noreferrer"><img src="./../images/youtube.jpg" alt="Youtube" /></a></li>
          </ul>
        </div>
  
        <div className={styles.copy}>
          <p>&copy; 2024 Biodiversity Nexus. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
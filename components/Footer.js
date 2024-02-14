// components/Footer.js
import styles from './Navigation.module.css';
import Image from 'next/image';
const Footer = () => {
    return (
      <footer className={styles.footer}>
    <Image
        className={styles.log}
        src="/images/Log D.png"
        alt="Biodiversity Nexus Rwanda Logo"
        width={200}
        height={100}
    />
    <div className={styles.contact}>
        <h3>Contact Us</h3>
        <p>Email: biodiversitynexus@yahoo.com</p>
        <p>Phone: +250 780784924</p>
        <p>Address: University of Rwanda, Nyarugenge Campus, Kigali City, Rwanda</p>
    </div>

    <div className={styles.socialMedia}>
        <h3>Follow Us</h3>
        <ul>
            <li><a href="https://www.facebook.com/profile.php?id=61552413531335" target="_blank" rel="noopener noreferrer"><Image src="/images/linkedin.jpg" alt="Facebook" width={50} height={50} /></a></li>
            <li><a href="https://x.com/Biodiversi36098?t=c3MO0IgE02xM-k2aEO08Xw&s=09" target="_blank" rel="noopener noreferrer"><Image src="/images/twiter.jpg" alt="Twitter" width={50} height={50} /></a></li>
            <li><a href="https://instagram.com/biodiversitynexus10?utm_source=qr&igshid=MThlNWY1MzQwNA==" target="_blank" rel="noopener noreferrer"><Image src="/images/ins.png" alt="Instagram" width={50} height={50} /></a></li>
            <li><a href="https://linkedin.com/in/biodirvesisty-nexus-ba13b1295" target="_blank" rel="noopener noreferrer"><Image src="/images/OIP.jpg" alt="LinkedIn" width={50} height={50} /></a></li>
            <li><a href="https://www.youtube.com/channel/UClzReVQCA-pR9GMQpdtJ8eA" target="_blank" rel="noopener noreferrer"><Image src="/images/youtube.jpg" alt="Youtube" width={50} height={50} /></a></li>
        </ul>
    </div>

    <div className={styles.copy}>
        <p>&copy; 2024 Biodiversity Nexus. All rights reserved.</p>
    </div>
</footer>
);
};
  export default Footer;
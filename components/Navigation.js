import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Navigation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={`${styles.navbar} ${showMenu ? styles.active : ''}`}>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} className={styles.icon} />
        <span className={styles.menuText}>Menu</span>
      </div>
      <ul className={styles.navList}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/events">Events</Link></li>
        <li><Link href="/gallery">Gallery</Link></li>
        <li><Link href="/opportunities">Opportunities</Link></li>
        <li><Link href="/study">Study</Link></li>
        <li><Link href="/testimonials">Testimonials</Link></li>
        <li><Link href="/donate">Donate</Link></li>
        <li><Link href="/partners">Partners</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;

import React, { useEffect } from 'react';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import partnersData from './data/partners.json';
import styles from '../styles/partners..module.css'; // Adjust the path accordingly
import Image from 'next/image'; // Import the Image component from next/image

const PartnersPage = () => {
  useEffect(() => {
    console.log("Partners page mounted");
  }, []);

  return (
    <div className={styles.container}>
      <Navigation />
      <h1>Partners of Biodiversity Nexus Student Association</h1>
      <ul className={styles['partner-list']}>
        {partnersData.map((partner, index) => (
          <li key={index} className={styles['partner-item']}>
            {/* Replace <img> with <Image> */}
            <div className={styles['partner-logo']}>
              <Image
                src={partner.logo}
                alt={`${partner.name} Logo`}
                width={200} // Adjust width as needed
                height={100} // Adjust height as needed
              />
            </div>
            <div className={styles['partner-info']}>
              <h2 className={styles['partner-name']}>{partner.name}</h2>
              <p className={styles['partner-description']}>{partner.description}</p>
            </div>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default PartnersPage;

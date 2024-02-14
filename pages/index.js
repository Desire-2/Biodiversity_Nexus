// pages/index.js

import Head from 'next/head';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Image from 'next/image'; 
import styles from './index.module.css'; // Import CSS module for styling

export default function Home() {
  return (
    <div>
      <Head>
        <title>Biodiversity Nexus - Home</title>
        <meta name="description" content="Biodiversity Nexus - Empowering youth in conservation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navigation /> {/* Include the Navigation component */}
      </header>

      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Welcome to Biodiversity Nexus</h1>
          <p className={styles.subtitle}>Empowering youth in conservation</p>
          <button className={styles.button}>Get Involved</button> {/* Make "Get Involved" a button */}
        </div>

        <section className={styles.section}>
          <h2>Mission</h2>
          <p>Our mission is to empower youth and communities by fostering a passionate student community dedicated to preserving and celebrating biodiversity through education, awareness, sustainable action, cultivating a deep connection to nature and a dedication to preserving the country&apos;s rich biodiversity.</p>
        </section>

        <section className={styles.section}>
          <h2>Vision</h2>
          <p>We envision a world where students, as environmental stewards, collaborate to safeguard and enhance biodiversity, promoting a harmonious coexistence between humanity and nature.</p>
        </section>
      </main>
      <div className={styles.WhatWeDocontainer}>
      <Head>
        <title>Biodiversity Nexus Student Association - What We Do</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>What We Do</h1>

        <div className={styles.grid}>
          <div className={styles.card}>
          <Image className={styles.Image} src="/images/1.jpg" width={500} height={500}  alt="Education and Awareness" />
          <div className={styles.cardContent}></div>
            <h3>Education and Awareness</h3>
            <p>We provide educational resources and conduct awareness campaigns to inform students and communities about the importance of biodiversity conservation.</p>
          </div>

          <div className={styles.card}>
          <Image src="/images/14.jpg" width={500} height={500} className={styles.Image} alt="Education and Awareness" />
          <div className={styles.cardContent}></div>
            <h3>Sustainable Action</h3>
            <p>We encourage and support sustainable practices and initiatives within our student community and beyond, promoting responsible actions that contribute to biodiversity preservation.</p>
          </div>

          <div className={styles.card}>
          <Image src="/images/16.jpg" width={500} height={500} className={styles.Image} alt="Education and Awareness" />
          <div className={styles.cardContent}></div>
            <h3>Community Engagement</h3>
            <p>We foster a passionate student community dedicated to biodiversity conservation, providing opportunities for collaboration, networking, and collective action.</p>
          </div>

          <div className={styles.card}>
          <Image src="/Photos\2.jpg" width={500} height={500} className={styles.Image} alt="Education and Awareness" />
          <div className={styles.cardContent}></div>
            <h3>Cultivating Connection to Nature</h3>
            <p>We organize nature-based activities, workshops, and events that help students develop a profound appreciation for the natural world and deepen their connection to biodiversity.</p>
          </div>

          <div className={styles.card}>
          <Image src="/images/1.jpg" width={500} height={500} className={styles.Image} alt="Education and Awareness" />
          <div className={styles.cardContent}></div>
            <h3>Preservation Efforts</h3>
            <p>We actively participate in conservation projects and advocacy efforts aimed at preserving the country&apos;s rich biodiversity and addressing environmental challenges.</p>
          </div>

          <div className={styles.card}>
          <Image src="/images/3.1.jpg" width={500} height={500} className={styles.Image} alt="Education and Awareness" />
          <div className={styles.cardContent}></div>
            <h3>Research</h3>
            <p>We facilitate research opportunities for students to explore biodiversity-related topics, conduct studies, and contribute to scientific knowledge in the field of conservation biology.</p>
          </div>

          <div className={styles.card}>
          <Image src="/Photos\1.MP.jpg" width={500} height={500} className={styles.Image} alt="Education and Awareness" />
          <div className={styles.cardContent}></div>
            <h3>Hands-on Experience</h3>
            <p>We provide hands-on learning experiences through field trips and practical projects, allowing students to apply their knowledge and skills in real-world conservation efforts.</p>
          </div>
        </div>
      </main>
    </div>


      <Footer />
    </div>
  );
}

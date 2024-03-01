// pages/study.js
import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import styles from '../styles/study.module.css'; // Import CSS module// Import the TutorialPage components

const Study = () => {
  const exploreCourse = (courseUrl) => {
    window.location.href = courseUrl;
  };

  return (
    <div className={styles.container}>
      <Navigation />
      <section id="home" className={styles.hero}>
        <div className={styles.container}>
          <h1>Welcome to Biodiversity Nexus Data Analysis Learning</h1>
          <p className={styles.subtitle}>Unlock the Power of Data with Excel, SPSS, R, and Python</p>
          <a href="#courses" className={styles.ctaButton}>Explore Courses</a>
        </div>
      </section>
      <section id="about" className={styles.about}>
        <div className={styles.container}>
            <h2>About Us</h2>
            <p>At Biodiversity Nexus, we go beyond biodiversity conservation; we also empower individuals through Data Analysis Learning. We&apos;re not just instructors in data analysis; we&apos;re here to help you become a data superhero. Explore the realm of insights and trends with our expert courses.</p>
        </div>
    </section>

      <section id="courses" className={styles.courses}>
        <div className={styles.container}>
          <h2>Our Courses</h2>
          <div className={styles.course}>
            <h3>Excel for Data Analysis</h3>
            <p className={styles.description}>Master data analysis with Microsoft Excel. From pivot tables to advanced functions, become a data wizard.</p>
            <button onClick={() => exploreCourse('./courses/excel')} className={styles.ctaButton}>Explore</button>
          </div>
          <div className={styles.course}>
            <h3>SPSS Statistics</h3>
            <p className={styles.description}>Uncover the power of SPSS for statistical analysis. From data input to advanced tests, be the statistician.</p>
            <button onClick={() => exploreCourse('courses/spss/index.html')} className={styles.ctaButton}>Explore</button>
          </div>
          <div className={styles.course}>
            <h3>Data Science with R</h3>
            <p className={styles.description}>Dive into data science with R. Data visualization, machine learning, and more. Be the data scientist.</p>
            <button onClick={() => exploreCourse('courses/r/index.html')} className={styles.ctaButton}>Explore</button>
          </div>
          <div className={styles.course}>
            <h3>Data Analysis with Python</h3>
            <p className={styles.description}>Learn data analysis with Python. Pandas, Matplotlib, Scikit-Learn, and more. Be the Python analyst.</p>
            <button onClick={() => exploreCourse('courses/python/index.html')} className={styles.ctaButton}>Explore</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Study;

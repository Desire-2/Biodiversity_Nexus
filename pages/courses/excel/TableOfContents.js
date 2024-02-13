// TableOfContents.js
import React from 'react';
import styles from './TableOfContents.module.css'; // Import CSS module for styling

const TableOfContents = () => {
  return (
    <div className={styles.tableOfContents}>
      <h2>Table of Contents</h2>
      <ol className={styles.list}>
        <li><a href="#introduction">Introduction to Data Analysis with Microsoft Excel</a>
          <ol className={styles.subList}>
            <li><a href="#overview">Overview of the course</a></li>
            <li><a href="#objectives">Course Objectives</a></li>
            <li><a href="#structure">Course Structure</a></li>
            <li><a href="#prerequisites">Prerequisites</a></li>
            <li><a href="#audience">Target Audience</a></li>
            <li><a href="#duration">Course Duration</a></li>
            <li><a href="#start">Let's Get Started!</a></li>
          </ol>
        </li>
      </ol>
    </div>
  );
};

export default TableOfContents;

// Introduction.js
import React from 'react';
import styles from './Content.module.css'; // Import CSS module for styling

const Introduction = () => {
    return (
      <div className={styles.introduction} id="introduction">
        <h2>Introduction to Data Analysis with Microsoft Excel</h2>
        <div>
          <h3>Overview of the Course</h3>
          <p>Welcome to the course on Data Analysis with Microsoft Excel! In this course, we will explore the fundamentals of data analysis using one of the most widely used tools in the industry, Microsoft Excel.</p>
          <h4>Course Objectives:</h4>
          <ul>
            <li><strong>Understand Data Analysis:</strong> Gain a comprehensive understanding of the principles and techniques involved in data analysis.</li>
            <li><strong>Master Microsoft Excel:</strong> Learn how to utilize Microsoft Excel effectively for various data analysis tasks.</li>
            <li><strong>Apply Data Analysis Skills:</strong> Apply your knowledge to real-world scenarios and solve practical problems using Excel.</li>
            <li><strong>Enhance Decision Making:</strong> Learn how data analysis can contribute to informed decision-making processes.</li>
          </ul>
          <h4>Course Structure:</h4>
          <ul>
            <li>Introduction to Excel</li>
            <li>Data Import and Export</li>
            <li>Data Manipulation and Transformation</li>
            <li>Data Visualization Techniques</li>
            <li>Advanced Data Analysis Tools</li>
            <li>Data Cleaning and Quality Assurance</li>
            <li>Case Studies and Practical Examples</li>
            <li>Collaboration and Sharing</li>
            <li>Conclusion and Next Steps</li>
          </ul>
          <h4>Prerequisites:</h4>
          <p>No specific prerequisites are required for this course. Basic computer literacy and familiarity with Microsoft Excel will be beneficial but not mandatory.</p>
          <h4>Target Audience:</h4>
          <p>This course is designed for anyone interested in acquiring data analysis skills using Microsoft Excel. It is suitable for beginners as well as those looking to enhance their existing Excel skills.</p>
          <h4>Course Duration:</h4>
          <p>The course is self-paced and can be completed in approximately 4-6 weeks based on individual learning speed and time commitment.</p>
          <h3>Let's Get Started!</h3>
          <p>We're excited to embark on this journey of exploring data analysis with Microsoft Excel. Let's dive in and unlock the potential of data together!</p>
        </div>
      </div>
    );
  };
  
  export default Introduction;
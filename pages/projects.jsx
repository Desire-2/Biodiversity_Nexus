import React, { useState } from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import styles from '../styles/projects.module.css';
import Image from 'next/image';

const sampleProjects = [
  { id: 1, title: 'Project 1', description: 'Description for Project 1', status: 'ongoing', image: '/../Photos/5.png' },
  { id: 2, title: 'Project 2', description: 'Description for Project 2', status: 'completed', image: '/../Photos/6.jpg' },
];

// Define multiple admin usernames and passwords
const adminCredentials = [
  { username: 'Desire Bikorimana', password: 'Desire' },
  { username: 'admin2', password: 'password2' },
  // Add more admins as needed
];

const Projects = () => {
  const [projects, setProjects] = useState(sampleProjects);
  const [newProjectTitle, setNewProjectTitle] = useState('');
  const [newProjectDescription, setNewProjectDescription] = useState('');
  const [newProjectStatus, setNewProjectStatus] = useState('ongoing');
  const [newProjectImage, setNewProjectImage] = useState(null);
  const [adminAuthenticated, setAdminAuthenticated] = useState(false);
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editProjectId, setEditProjectId] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleAdminLogin = () => {
    // Check if the entered credentials match any of the admin credentials
    const isValidAdmin = adminCredentials.some(
      (admin) => admin.username === adminUsername && admin.password === adminPassword
    );

    if (isValidAdmin) {
      setAdminAuthenticated(true);
      setErrorMessage(''); // Clear error message
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  const handleAdminLogout = () => {
    setAdminAuthenticated(false);
    setAdminUsername('');
    setAdminPassword('');
  }
  const handleSaveProject = () => {
    if (editMode) {
      const updatedProjects = projects.map(project => {
        if (project.id === editProjectId) {
          return {
            ...project,
            title: newProjectTitle,
            description: newProjectDescription,
            status: newProjectStatus,
            image: newProjectImage,
          };
        }
        return project;
      });
      setProjects(updatedProjects);
      setEditMode(false);
    } else {
      const newProject = {
        id: projects.length + 1,
        title: newProjectTitle,
        description: newProjectDescription,
        status: newProjectStatus,
        image: newProjectImage,
      };
      setProjects([...projects, newProject]);
    }
    setNewProjectTitle('');
    setNewProjectDescription('');
    setNewProjectStatus('ongoing');
    setNewProjectImage(null);
  };

  const handleRemoveProject = (projectId) => {
    const updatedProjects = projects.filter(project => project.id !== projectId);
    setProjects(updatedProjects);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setNewProjectImage(URL.createObjectURL(file));
  };

  const handleEditProject = (projectId) => {
    const projectToEdit = projects.find(project => project.id === projectId);
    setNewProjectTitle(projectToEdit.title);
    setNewProjectDescription(projectToEdit.description);
    setNewProjectStatus(projectToEdit.status);
    setNewProjectImage(projectToEdit.image);
    setEditMode(true);
    setEditProjectId(projectId);
  };

  return (
      <div className={styles.container}>
      
      
      <header>
        <Navigation /> {/* Include the Navigation component */}
      </header>
        
      <h1>Explore Our Projects</h1>

      
      {/* Project List */}
      <div className={styles['project-list']}>
        <h2>Our Projects</h2>
        <ul>
          {projects.map(project => (
            <li key={project.id} className={styles['project-item']}>
              <div className={styles['project-info']}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p>Status: {project.status}</p>
              </div>
              {project.image && (
                <div className={styles['project-image-container']}>
                  {/* Use the Image component from next/image for optimization */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    className={styles['project-image']}
                    width={300} // Adjust the width as needed
                    height={200} // Adjust the height as needed
                  />
                </div>
              )}
              
              {adminAuthenticated && (
                <div className={styles['project-actions']}>
                  <button onClick={() => handleEditProject(project.id)}>Edit</button>
                  <button onClick={() => handleRemoveProject(project.id)}>Remove</button>
                </div>
              )}
            </li>
          ))}

              {/* Admin Login Section */}
      {!adminAuthenticated && (
        <div className={styles['login-form']}>
          <h2>Admin Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={adminUsername}
            onChange={(e) => setAdminUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
          />
          <button onClick={handleAdminLogin}>Login</button>
          {errorMessage && <p className={styles['error-message']}>{errorMessage}</p>}
        </div>
      )}

      {/* Admin Logout Section */}
      {adminAuthenticated && (
        <div>
          <h2>Welcome, {adminUsername}!</h2>
          <button className={styles['logout-button']} onClick={handleAdminLogout}>Logout</button>
        </div>
      )}

      {/* Add/Edit Project Form (for admin only) */}
      {adminAuthenticated && (
        <div className={styles['form-container']}>
          <h2>{editMode ? 'Edit Project' : 'Add Project'}</h2>
          <form onSubmit={(e) => { e.preventDefault(); handleSaveProject(); }}>
            <label>
              Title:
              <input
                type="text"
                value={newProjectTitle}
                onChange={(e) => setNewProjectTitle(e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Description:
              <textarea
                value={newProjectDescription}
                onChange={(e) => setNewProjectDescription(e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Status:
              <select
                value={newProjectStatus}
                onChange={(e) => setNewProjectStatus(e.target.value)}
              >
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
              </select>
            </label>
            <br />
            <label>
              Upload Image:
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
              />
            </label>
            <br />
            <button type="submit">{editMode ? 'Save Changes' : 'Add Project'}</button>
          </form>
        </div>
      )}

        </ul>
      </div>
      <Footer />
    </div>
  );
}
export default Projects;
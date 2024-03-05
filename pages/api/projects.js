// pages/api/projects.js

import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function openDB() {
  return open({
    filename: './path/to/your/database.db',
    driver: sqlite3.Database,
  });
}

export default async function handler(req, res) {
  const db = await openDB();

  try {
    switch (req.method) {
      case 'GET':
        // Fetch all projects
        const projects = await db.all('SELECT * FROM projects');
        res.status(200).json(projects);
        break;
      case 'POST':
        // Insert a new project
        const { title, description, status, imageUrl } = req.body;
        if (!title || !description || !status || !imageUrl) {
          res.status(400).json({ error: 'All fields are required' });
          break;
        }

        await db.run(
          'INSERT INTO projects (title, description, status, image) VALUES (?, ?, ?, ?)',
          [title, description, status, imageUrl]
        );
        res.status(201).json({ message: 'Project created successfully' });
        break;
      case 'PUT':
        // Update an existing project
        const { id, newTitle, newDescription, newStatus, newImageUrl } = req.body;
        if (!id || !newTitle || !newDescription || !newStatus || !newImageUrl) {
          res.status(400).json({ error: 'All fields are required' });
          break;
        }

        await db.run(
          'UPDATE projects SET title = ?, description = ?, status = ?, image = ? WHERE id = ?',
          [newTitle, newDescription, newStatus, newImageUrl, id]
        );
        res.status(200).json({ message: 'Project updated successfully' });
        break;
      case 'DELETE':
        // Delete a project
        const { projectId } = req.body;
        if (!projectId) {
          res.status(400).json({ error: 'Project ID is required' });
          break;
        }

        await db.run('DELETE FROM projects WHERE id = ?', [projectId]);
        res.status(200).json({ message: 'Project deleted successfully' });
        break;
      default:
        res.status(405).json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await db.close();
  }
}

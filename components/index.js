// pages/api/events/index.js

import { v4 as uuidv4 } from 'uuid';

// Sample data for events
let events = [
    {
        id: uuidv4(),
        title: 'Event 1',
        location: 'Location 1',
        dateAndTime: '2024-02-09 14:00',
        description: 'Description of Event 1',
        completed: false,
    },
    {
        id: uuidv4(),
        title: 'Event 2',
        location: 'Location 2',
        dateAndTime: '2024-02-15 10:00',
        description: 'Description of Event 2',
        completed: true,
    },
];

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(events);
    } else if (req.method === 'DELETE') {
        const { id } = req.query;
        events = events.filter(event => event.id !== id);
        res.status(200).json({ message: 'Event deleted successfully' });
    } else {
        res.setHeader('Allow', ['GET', 'DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

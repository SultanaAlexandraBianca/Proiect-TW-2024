const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const Tournament = require('./models/Tournament');
const Participant = require('./models/Participant');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/tournaments', async (req, res) => {
    try {
        const tournaments = await Tournament.findAll({ include: Participant });
        res.json(tournaments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tournaments', error });
    }
});

app.post('/tournaments', async (req, res) => {
    try {
        const tournament = await Tournament.create(req.body);
        res.status(201).json(tournament);
    } catch (error) {
        res.status(400).json({ message: 'Error creating tournament', error });
    }
});

app.post('/participants', async (req, res) => {
    try {
        const participant = await Participant.create(req.body);
        res.status(201).json(participant);
    } catch (error) {
        res.status(400).json({ message: 'Error adding participant', error });
    }
});

sequelize.sync().then(() => {
    app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
}).catch(error => {
    console.error('Error syncing database:', error);
});

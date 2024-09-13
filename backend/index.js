const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import the Blog model
const Exhibtion = require('./models/exhibition');
const Industry = require('./models/industry');
const Company = require('./models/company');


const app = express();
app.use(express.json());
app.use(cors());

// Connect to the database
mongoose.connect('mongodb://localhost:27017/Events', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Comapany api 
// GET API company
app.get('/getcompany', async (req, res) => {
  try {
    const data = await Company.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching data' });
  }
});

// POST API company
app.post('/addcompany', async (req, res) => {
  try {
    const data = await Company.create(req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Error creating data' });
  }
});
/////////////////
// Industry api 
// GET API Industry
app.get('/getindustry', async (req, res) => {
  try {
    const data = await Industry.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching data' });
  }
});

// POST API Industry
app.post('/addindustry', async (req, res) => {
  try {
    const data = await Industry.create(req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Error creating data' });
  }
});
/////////////////

// exhibiton apis
// GET API
app.get('/getevents', async (req, res) => {
  try {
    const data = await Exhibtion.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching data' });
  }
});

// POST API
app.post('/addevents', async (req, res) => {
  try {
    const data = await Exhibtion.create(req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Error creating data' });
  }
});
/////////////////

// Start the server
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
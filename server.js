const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items.js');

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

// DB Configuration
const db = require('./config/keys.js').mongoURI;

// Connect to MONGODB
mongoose
  .connect(db)
  .then(() => console.log('You Connected to MongoDB!!!'))
  .catch(err => console.log('An error occured: ' + err));

// Use routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

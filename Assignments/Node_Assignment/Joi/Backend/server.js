const express = require('express');
const UserRoutes = require('./Routes/UserRoutes');
const mongoose = require('mongoose');
const port = 8000;
const requestIp = require('request-ip');

const app = express();
// app.use = express();
app.use(requestIp.mw());
app.use(express.json());

mongoose.connect('mongodb+srv://Anku:Brahman_45@cluster0.krbzesh.mongodb.net/Relinns_Assignments?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));


app.use('/users', UserRoutes);

// Test route
app.get('/test', (req, res) => {
  res.send('Test route is working');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

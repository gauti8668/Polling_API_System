const mongoose = require('mongoose');
mongoose.set("strictQuery", true);
mongoose.connect('mongodb://127.0.0.1:27017/Polling-api');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));

db.once('open', () => {
    console.log('Connected to Database : MongoDB');
});

module.exports = db;
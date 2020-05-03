const connectDB = require('./config/mongodb');
connectDB();

const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;

connectDB();

//express formatting
app.use(express.json({ extended: false }));

// app.use('/hello', require('./routes/api/hello'));
// app.use('/properties', require('./routes/api/properties'));

if (!module.parent) {
  app.listen(PORT, () => {
    console.log(`HTTP - Server started on port  https://localhost:${PORT}`);
  });
}

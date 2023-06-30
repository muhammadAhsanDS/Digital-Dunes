const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');

const user = require('./routes/user');
const product = require('./routes/product');
const cart = require('./routes/cart');
const contact = require('./routes/contact');

const app = express();
const port = 8080;


mongoose.connect('', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Failed to connect to MongoDB', error);
});

  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/uploads', express.static('uploads'));

  user(app);
  product(app);
  cart(app);
  contact(app);

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  

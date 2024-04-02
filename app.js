const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const OrderRoute = require('./routes/OrderRoute');
const mongodb = require('mongodb');

const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', OrderRoute);

// Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/orders', {  });
// const db = mongoose.connection;
 
// db.on('error', (error) => console.error(error));
// db.once('open', () => console.log('Connected to Database'));
 

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
const uri = 'mongodb+srv://korsaalekhya516:6bA91pJwoK0rGY6w@cluster0.wq9diur.mongodb.net/';
mongoose.connect(uri, {

})
.then(() => {
  console.log('Connected to MongoDB Atlas with Mongoose');
}).catch((error) => {
  console.error('Error connecting to MongoDB Atlas with Mongoose:', error);
  console.log(orderId);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


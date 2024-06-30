require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const { mongoDBClient } = require('./mongoClient');
mongoDBClient.connect();
const { userRoutes } = require('./routes/userRoutes')
const { bookRoutes } = require('./routes/bookRoutes')
const port = 3000

app.use(cors());

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

app.use(cookieParser());


app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);


app.listen(port, () => {
  console.log(`App started on port ${port}`)
})

export {}
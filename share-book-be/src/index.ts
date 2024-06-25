require('dotenv').config()
const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const { mongoDBClient } = require('./mongoClient');
mongoDBClient.connect();
const { userRoutes } = require('./routes/userRoutes')
const { petRoutes } = require('./routes/petRoutes')
const port = 3000

app.use(cookieParser());


app.use(userRoutes);
app.use(petRoutes);


app.listen(port, () => {
  console.log(`App started on port ${port}`)
})

export {}
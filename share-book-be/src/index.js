"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var mongoDBClient = require('./mongoClient').mongoDBClient;
mongoDBClient.connect();
var userRoutes = require('./routes/userRoutes').userRoutes;
var bookRoutes = require('./routes/bookRoutes').bookRoutes;
var port = 3000;
app.use(cookieParser());
app.use(userRoutes);
app.use(bookRoutes);
app.listen(port, function () {
    console.log("App started on port ".concat(port));
});

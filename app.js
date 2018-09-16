"use strict";
const express = require('express'),
    app = express(),
    userRouter = require("./routes/users"),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// Routes
app.use('/api/v1/users', userRouter.router());
app.listen(3000);

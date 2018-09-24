"use strict";
const express = require("express"),
    Users     = require("../controllers/users").UsersController,
    usersRouter = express.Router({mergeParams: true});

// Search
usersRouter.route("/search").get((req, res) => {
    const users = new Users();
    const responseData = users.search(req.query);
    res.status(responseData.statusCode).json({error: responseData.value});
});

// Show
usersRouter.route("/:id").get((req, res) => {
    res.status(200).json({aa: req.params.id})
});


exports.router = () => {
    return usersRouter;
};


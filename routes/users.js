"use strict";
const express = require("express"),
    Users     = require("../controllers/users").UsersController,
    usersRouter = express.Router({mergeParams: true});

//TODO userがログインしてるかどうかみたいなチェックをしないとセキュリティ的にまずい

// Search
usersRouter.route("/search").get((req, res) => {
    const users = new Users();
    const responseData = users.search(req.query);
    res.status(responseData.statusCode).json({body: responseData.value});
});

// // Create User
// usersRouter.route("/").post((req, res) => {
//     const users = new Users();
//     const responseData = users.create(req.query);
//     res.status(responseData.statusCode).json({body: responseData.value});
// });
//
// // Update User
// usersRouter.route("/").put((req, res) => {
//     const users = new Users();
//     const responseData = users.update(req.query);
//     res.status(responseData.statusCode).json({body: responseData.value});
// });
//
// // Delete User
// usersRouter.route("/").destroy((req, res) => {
//     const users = new Users();
//     const responseData = users.destroy(req.query);
//     res.status(responseData.statusCode).json({body: responseData.value});
// });

exports.router = () => {
    return usersRouter;
};


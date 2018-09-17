"use strict";
const express = require("express"),
    Validator = require("../validator/user").Validater,
    usersRouter = express.Router({mergeParams: true});

usersRouter.route("/search").get((req, res) => {
    const errors = validate(req.query);
    if (errors !== "") {
        res.status(400).json({error: errors})
    } else {
        res.status(200).json({success: "unko"})
    }
});

usersRouter.route("/:id").get((req, res) => {
    res.status(200).json({aa: req.params.id})
});

const validate = (query) => {
    let errors = "";
    Object.keys(query).forEach((q) => {
        const errorMessage = Validator.isValid(q, query[q]);
        if (errorMessage !== undefined) errors += errorMessage
    });
    return errors;

};

exports.router = () => {
    return usersRouter;
};


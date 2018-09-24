"use strict";
const Validator = require("../validator/user").Validater;

exports.UsersController = class UsersController {
    search(query) {
        const errors = validate(query);
        if (errors !== "") return {statusCode: 400, value: errors};
        return {statusCode: 200, value: undefined};
        // response
    }
};

const validate = query => {
    let errors = "";
    Object.keys(query).forEach((q) => {
        const errorMessage = Validator.isValid(q, query[q]);
        if (errorMessage !== undefined) errors += errorMessage;
    });
    return errors;
};


"use strict";
const Validator = require("../validator/user").Validater;

exports.UsersController = class UsersController {
    search(query) {
        const errors = validate(query);
        return (errors !== "") ?  {statusCode: 400, value: errors} : {statusCode: 200, value: 123};
        // response
    }

    // insert user for database.
    // params query Object
    // return Object
    create(query) {
        const errors = validate(query);
        return (errors !== "") ? {statusCode: 400, value: errors} : {statusCode: 200, value: undefined};
    }

    update() {
        // User Update
    }

    destroy() {
        // User destroy
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


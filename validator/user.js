"use strict";

class Validater {
    static isValid(key, val) {
        const validateList = {
            id: this.isInteger
        };
        const validateFunction = validateList[key];
        return (validateFunction === undefined) ? "not exist key" : validateFunction(val);
    }
    static isInteger(val) {
       if(isNaN(val)) return "id should be integer";
    }
}
exports.default = Validater;

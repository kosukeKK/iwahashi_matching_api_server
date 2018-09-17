"use strict";

class Validater {
    static isValid(key, val) {
        const validateList = {
            id: this.unsignedInteger(key, val)
        };
        return (validateList.hasOwnProperty(key)) ? validateList[key] : "not exist key.";
    }
    static unsignedInteger(key, val) {
       if(isNaN(val) || val.length >= 15) return key + " should be integer and less than or equal to 15.";
    }
}
exports.Validater = Validater;

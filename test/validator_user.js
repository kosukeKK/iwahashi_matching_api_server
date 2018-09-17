const assert = require('assert'),
    Validator = require("../validator/user").Validater;

describe("#isValid", () => {
    const fastList = {
        id: {
            ok: [
                {req: 1, res: undefined}
            ],
            ng: [
                {req: "aaaa", res: "id should be integer and less than or equal to 15."},
                {req: "100000000000000", res: "id should be integer and less than or equal to 15."}
            ]
        }
    };
    Object.keys(fastList).forEach(key => {
        it(key + " should be empty string", () => {
            fastList[key].ok.forEach(ok => {
                assert.equal(Validator.isValid(key, ok.req), ok.res)
            })
        });
        it(key + " should be validate error", () => {
            fastList[key].ng.forEach(ng => {
                assert.equal(Validator.isValid(key, ng.req), ng.res)
            })
        });
    });
    it("none key should be validate error", () => {
        assert.equal(Validator.isValid("none_key", ""), "not exist key.")
    });
});
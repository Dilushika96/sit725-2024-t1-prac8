const { expect } = require("chai");
const request = require("request");
let url = 'http://localhost:8080/api/cards';
let cat = { path: '', title: '' }


describe('test GET api', function () {
    it('returns statusCode of 200', function (done) {
        request(url, function (a, b, c) {
            expect(b.statusCode).to.equal(200);
            c = JSON.parse(c);
            done();
        });
    });
});

describe('test POST api', function () {
    it('post cat to DB', function (done) {
        request.post({ url: url, form: cat }, function (a, b, c) {
            done();
        });
    });
});
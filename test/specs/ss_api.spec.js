var chakram = require('chakram'),
expect = chakram.expect;


describe("api test", function() {
    it('should return a response for rate', function() {
        console.log("*************** API TEST*********")
        var resp = chakram.get("https://shapeshift.io/rate/btc_ltc")
        return expect(resp).to.have.status(200);
    });
});
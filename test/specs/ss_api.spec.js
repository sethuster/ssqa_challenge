var chakram = require('chakram'),
expect = chakram.expect;


describe("api test", function() {
    it('Verify exchange rate 200', function() {
        var resp = chakram.get("https://shapeshift.io/rate/btc_ltc")
        return expect(resp).to.have.status(200);
    });
    it('Verify limit response header', function() {
        var resp = chakram.get("https://shapeshift.io/limit/btc_ltc");
        expect(resp).to.have.status(200);
        expect(resp).to.have.header("content-type", "application/json; charset=utf-8");        
        return chakram.wait();
    });
    it('Verify market info response body', function(){
        return chakram.get("https://shapeshift.io/marketinfo/btc_ltc")
        .then(function(resp) {
            expect(resp).to.have.status(200);
            expect(resp).to.comprise.of.json({
                "pair": "btc_ltc"
            });
        })         
    })
});
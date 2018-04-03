var page = require('./page');

var coinsPage = Object.create(page, {
    // define elements
    inputCoin: { get: function() {return $('.input-coin button'); }},
    outputCoin: { get: function() {return $('.output-coin button'); }},
    coinField: { get: function() {return $('.modal-header input'); }},
    selectedCoin: { get: function() {return $('.coin-image img'); }},
    continueBtn: { get: function() {return $('.btn-default.submit'); }},
    instantRate: { get: function() {return $('#signup-form > div.form-heading.clearfix > div > div > div.col-md-12.col-sm-12.rate.ng-binding > span:nth-child(3)'); }},
    btcTickVal: { get: function() { return $('#stockTicker > div > div:nth-child(1) > a > span.price.ng-binding'); }},
});

module.exports = coinsPage;


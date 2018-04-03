var assert = require('assert');
var CoinsPage = require('../pageobjects/coins.page')

describe('Shapeshift.io title', function() { 
    this.timeout(24 * 60 * 60 * 6000)   
    var aw = 1000
    it('should have the right title for the coins page', function() {
        browser.url('https://shapeshift.io/about');
        var title = browser.getTitle();
        assert.equal(title, 'How to use ShapeShift | Fees and Information')
    });
    it('should have the right title', function () {
        browser.url('https://shapeshift.io');
        var title = browser.getTitle();
        assert.equal(title, 'ShapeShift | Cryptocurrency Exchange | Simple Coin Conversion');
    });
    it('compare dogecoin with dash', function(){
        browser.url('https://shapeshift.io/#/coins');
        browser.waitForVisible('.loading', 2000, true)
        CoinsPage.inputCoin.waitForVisible(aw)
        CoinsPage.inputCoin.click()
        CoinsPage.coinField.waitForVisible(aw)
        CoinsPage.coinField.setValue('dogecoin');
        CoinsPage.selectedCoin.waitForVisible(aw)
        CoinsPage.selectedCoin.click(); 
        CoinsPage.outputCoin.waitForVisible(3000);
        CoinsPage.outputCoin.click();
        CoinsPage.coinField.waitForVisible(aw);
        CoinsPage.coinField.setValue('dash');        
        CoinsPage.selectedCoin.waitForVisible(aw);
        CoinsPage.selectedCoin.click();
        CoinsPage.continueBtn.waitForVisible(aw)
        CoinsPage.continueBtn.click();
        CoinsPage.instantRate.waitForVisible(aw)

        assert.equal(true, CoinsPage.instantRate.getText().includes("1 DOGE"))
    });
    it('verify the ticker is working for bitcoin', function() {
        browser.url('https://shapeshift.io/#/coins');
        browser.waitForVisible('.loading', 2000, true)
        CoinsPage.btcTickVal.waitForVisible(aw);
        var btcVal = CoinsPage.btcTickVal.getText();
        browser.reload();
        browser.url('https://shapeshift.io/#/coins');
        browser.waitForVisible('.loading', 2000, true)
        CoinsPage.btcTickVal.waitForVisible(aw);
        var nbtcVal = CoinsPage.btcTickVal.getText();
        assert.notEqual(btcVal, nbtcVal);
        
    })
});


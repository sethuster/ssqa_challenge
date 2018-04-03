var assert = require('assert');
var CoinsPage = require('../pageobjects/coins.page')

describe('Shapeshift.io title', function() { 
    this.timeout(24 * 60 * 60 * 1000)   
    var actionwait = 500
    // it('should have the right title for the coins page', function() {
    //     browser.url('https://shapeshift.io/about');
    //     var title = browser.getTitle();
    //     assert.equal(title, 'How to use ShapeShift | Fees and Information')
    // });
    // it('should have the right title', function () {
    //     browser.url('https://shapeshift.io');
    //     var title = browser.getTitle();
    //     assert.equal(title, 'ShapeShift | Cryptocurrency Exchange | Simple Coin Conversion');
    // });
    it('compare dogecoin with dash', function(){
        browser.url('https://shapeshift.io/#/coins');
        browser.pause(2000) //waiting for the loading icon to dissappear - leave note about how this sucks
        CoinsPage.inputCoin.click();
        browser.pause(actionwait)
        CoinsPage.coinField.setValue('dogecoin');
        browser.pause(actionwait)
        // browser.debug();
        CoinsPage.selectedCoin.click(); 
        browser.pause(actionwait); 
        CoinsPage.outputCoin.click();
        browser.pause(actionwait);
        CoinsPage.coinField.setValue('dash');        
        browser.pause(actionwait);
        CoinsPage.selectedCoin.click();
        browser.pause(actionwait);
        CoinsPage.continueBtn.click();
        browser.pause(actionwait);
        console.log("====================== where are you ===============")
        console.log(CoinsPage.instantRate.getText().includes("1 DOGE"));
        assert.equal(true, CoinsPage.instantRate.getText().includes("1 DOGE"))
    });
});


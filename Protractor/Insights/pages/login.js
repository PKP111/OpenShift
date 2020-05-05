let login = function(){
    let clickOnClose=element(by.xpath('//*[@class="_2AkmmA _29YdH8"]'));
    let clickOnSignin=element(by.xpath('//*[@href="/account/login?ret=/"]'));
    let userName = element(by.xpath('//*[@class="_2zrpKA _1dBPDZ"]'));
    let passWord = element(by.xpath('//*[@class="_2zrpKA _3v41xv _1dBPDZ"]'));
    let submit = element(by.xpath('//*[@class="_2AkmmA _1LctnI _7UHT_c"]'));

    this.get = function(url){
        browser.get(url);
    }
    this.getTitle = function(title){
        expect(browser.getTitle(title));
    }
    this.clickOnClose = function(){
        clickOnClose.click();
    };
    this.clickOnSignin = function(){
        clickOnSignin.click();
    };

    this.userName = function(uName){
        userName.sendKeys(uName);
    };

    this.passWord = function(passwd){
        passWord.sendKeys(passwd);
    };

    this.submit = function(){
        submit.click();
    };


};

module.exports = new login();
// a[.='Enterprise Insights']
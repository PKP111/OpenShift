// spec.js
let func_login = require('../pages/login');
describe('Flipkart', function() {
  it('should be able to login successfully', function() {
    browser.waitForAngularEnabled(false);
    func_login.get('https://www.flipkart.com');
    //insights_login.getTitle('IBM Services for Multicloud Management');
    //browser.sleep('5000');
    func_login.clickOnClose();
    func_login.clickOnSignin();
    func_login.userName('8961123347');
    func_login.passWord('Papa@#*1');
    func_login.submit();
    
    browser.sleep('5000');
    browser.quit(false);
  });
});
const LoginPage = require('../pageobjects/login.page.js');

describe('login page input Username', () => {

    beforeAll('open browser', () => {
        LoginPage.open();
        browser.pause(1000);
    });

    it('Error message should show when entering nothing in input Username', () => {
        LoginPage.inputUsername.setValue('');
        LoginPage.inputPassword.setValue('secret_sauce');
        LoginPage.loginButton.click();
        expect(LoginPage.errormessageContainer).toHaveText('Epic sadface: Username is required');
    });

    /*it('Error message container box should be closed', () => {
        browser.refresh();
        LoginPage.inputUsername.setValue('');
        LoginPage.inputPassword.setValue('secret_sauce');
        LoginPage.loginButton.click();
        LoginPage.closeErrorMessageBtn.click();
        expect(LoginPage.errormessageContainer).toBeDisplayedInViewport();
    });*/

    it('Error message should show when entering nothing in input Password', () => {
        browser.refresh();
        LoginPage.inputUsername.setValue('standard_user');
        LoginPage.inputPassword.setValue('');
        LoginPage.loginButton.click();
        expect(LoginPage.errormessageContainer).toHaveText('Epic sadface: Password is required');
    });

    it('Error message should show when entering incorrect username and correct password', () => {
        browser.refresh();
        LoginPage.inputUsername.setValue('xxxx');
        LoginPage.inputPassword.setValue('secret_sauce');
        LoginPage.loginButton.click();
        expect(LoginPage.errormessageContainer).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });

    it('Error message should show when entering correct username but incorrect password', () => {
        browser.refresh();
        LoginPage.inputUsername.setValue('standard_user');
        LoginPage.inputPassword.setValue('xxx');
        LoginPage.loginButton.click();
        expect(LoginPage.errormessageContainer).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });

    it('Error message should show when entering valid data in username and password field', () => {
        browser.refresh();
        LoginPage.inputUsername.setValue('standard_user');
        LoginPage.inputPassword.setValue('secret_sauce');
        LoginPage.loginButton.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });
});



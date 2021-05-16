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
        LoginPage.inputUsername.setValue('');
        LoginPage.inputPassword.setValue('secret_sauce');
        LoginPage.loginButton.click();
        LoginPage.closeErrorMessageBtn.click();
        expect(LoginPage.errormessageContainer).toBeDisplayed();
    });*/

    it('Error message should show when entering nothing in input Password', () => {
        browser.refresh();
        LoginPage.inputUsername.setValue('standard_user');
        LoginPage.inputPassword.setValue('');
        LoginPage.loginButton.click();
        expect(LoginPage.errormessageContainer).toHaveText('Epic sadface: Password is required');
    });
});



const Page = require('./page');

class LoginPage extends Page {
    
    get inputUsername () { return $('#user-name') }
    get inputPassword () { return $('#password') }
    get loginButton () { return $('#login-button') }
    get errormessageContainer () { return $('#login_button_container > div > form > div.error-message-container.error') }
    get closeErrorMessageBtn () {return $('#login_button_container > div > form > div.error-message-container.error > h3 > button') }

    open () {
        return super.open('');
    }
}

module.exports = new LoginPage();
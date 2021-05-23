const Page = require('./page');

class LoginPage extends Page {
    
    get inputUsername () { return $('#user-name') }
    get inputPassword () { return $('#password') }
    get loginButton () { return $('#login-button') }
    get errormessageContainer () { return $('#login_button_container') }
    get closeErrorMessageBtn () {return $('#login_button_container > div > form > div.error-message-container.error > h3 > button > svg > path') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     
    async login (username, password) {
        await (await this.inputUsername).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).click();
    }*/

    open () {
        return super.open('');
    }
}

module.exports = new LoginPage();
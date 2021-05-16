const Page = require('./page');

class ProductsPage extends Page {
    get inputUsername () { return $('#username') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('button[type="submit"]') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     
    async login (username, password) {
        await (await this.inputUsername).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).click();
    }*/

    open () {
        return super.open('https://www.saucedemo.com/inventory.html');
    }
}

module.exports = new ProductsPage();

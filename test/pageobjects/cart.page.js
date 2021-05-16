const Page = require('./page');

class CartPage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () { return $('#flash') }

    open () {
        return super.open('https://www.saucedemo.com/cart.html');
    }
}

module.exports = new CartPage();
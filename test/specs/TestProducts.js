const LoginPage = require('../pageobjects/login.page.js');
const ProductsPage = require('../pageobjects/products.page.js');


describe('products page should open correctly', () => {

    beforeAll('open browser', () => {
        LoginPage.open();
        browser.pause(1000);
    });

    it('enter valid data in login page', () => {
        LoginPage.inputUsername.setValue('standard_user');
        LoginPage.inputPassword.setValue('secret_sauce');
        LoginPage.loginButton.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });
});

describe('When clicking on foto items, corresponding page should open corrrectly', () => {

    it('Clicking on foto of product 1', () => {
        ProductsPage.fotoItem1.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4');
        browser.back();
    });

    it('Clicking on foto of product 2', () => {
        ProductsPage.fotoItem2.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=0');
        browser.back();
    });

    it('Clicking on foto of product 3', () => {
        ProductsPage.fotoItem3.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=1');
        browser.back();
    });

    it('Clicking on foto of product 4', () => {
        ProductsPage.fotoItem4.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=5');
        browser.back();
    });

    it('Clicking on foto of product 5', () => {
        ProductsPage.fotoItem5.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=2');
        browser.back();
    });

    it('Clicking on foto of product 6', () => {
        ProductsPage.fotoItem6.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=3');
        browser.back();
    });
});

describe('When clicking on product title, corresponding page should open corrrectly', () => {

    it('Clicking on title of product 1', () => {
        ProductsPage.productTitle1.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4');
        browser.back();
    });

    it('Clicking on title of product 2', () => {
        ProductsPage.productTitle2.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=0');
        browser.back();
    });

    it('Clicking on title of product 3', () => {
        ProductsPage.productTitle3.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=1');
        browser.back();
    });

    it('Clicking on title of product 4', () => {
        ProductsPage.productTitle4.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=5');
        browser.back();
    });

    it('Clicking on title of product 5', () => {
        ProductsPage.productTitle5.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=2');
        browser.back();
    });

    it('Clicking on title of product 6', () => {
        ProductsPage.productTitle6.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=3');
        browser.back();
    });
});

describe('When clicking on "add to cart" button, cart should be increased with 1', () => {

    it('Clicking on "ADD TO CART" of product 1', () => {
        ProductsPage.addToCartPr1.click();
        expect(ProductsPage.cartContainer).toHaveText('1');
    });

    it('Clicking on "ADD TO CART" of product 2', () => {
        ProductsPage.addToCartPr2.click();
        expect(ProductsPage.cartContainer).toHaveText('2');
    });

    it('Clicking on "ADD TO CART" of product 3', () => {
        ProductsPage.addToCartPr3.click();
        expect(ProductsPage.cartContainer).toHaveText('3');
    });

    it('Clicking on "ADD TO CART" of product 4', () => {
        ProductsPage.addToCartPr4.click();
        expect(ProductsPage.cartContainer).toHaveText('4');
    });

    it('Clicking on "ADD TO CART" of product 5', () => {
        ProductsPage.addToCartPr5.click();
        expect(ProductsPage.cartContainer).toHaveText('5');
    });

    it('Clicking on "ADD TO CART" of product 6', () => {
        ProductsPage.addToCartPr6.click();
        expect(ProductsPage.cartContainer).toHaveText('6');
    });
});

describe('When clicking on "REMOVE" button, cart should be decreased with 1', () => {

    it('Clicking on "REMOVE" of product 1', () => {
        ProductsPage.removeFromCartPr1.click();
        expect(ProductsPage.cartContainer).toHaveText('5');
    });

    it('Clicking on "REMOVE" of product 2', () => {
        ProductsPage.removeFromCartPr2.click();
        expect(ProductsPage.cartContainer).toHaveText('4');
    });

    it('Clicking on "REMOVE" of product 3', () => {
        ProductsPage.removeFromCartPr3.click();
        expect(ProductsPage.cartContainer).toHaveText('3');
    });

    it('Clicking on "REMOVE" of product 4', () => {
        ProductsPage.removeFromCartPr4.click();
        expect(ProductsPage.cartContainer).toHaveText('2');
    });

    it('Clicking on "REMOVE" of product 5', () => {
        ProductsPage.removeFromCartPr5.click();
        expect(ProductsPage.cartContainer).toHaveText('1');
    });

    it('Clicking on "REMOVE" of product 6', () => {
        ProductsPage.removeFromCartPr6.click();
        expect(ProductsPage.cartContainer).toHaveText('');
    });
});

describe('When clicking sort menu, it should sort the products by name or price', () => {

    it('Clicking on NAME (A TO Z)', () => {
        ProductsPage.sortByBtn.click ()
        ProductsPage.sortByNameAz.click ()
        expect(ProductsPage.sortByNameAz).toHaveText('Name (A to Z)');
    });

    it('Clicking on NAME (Z TO A)', () => {
        ProductsPage.sortByBtn.click ()
        ProductsPage.sortByNameZa.click ()
        expect(ProductsPage.sortByNameZa).toHaveText('Name (Z to A)');
    });

    it('Clicking on PRICE (low to high)', () => {
        ProductsPage.sortByBtn.click ()
        ProductsPage.sortByPriceLoHi.click ()
        expect(ProductsPage.sortByPriceLoHi).toHaveText('Price (low to high)');
    });

    it('Clicking on PRICE (high to low)', () => {
        ProductsPage.sortByBtn.click ()
        ProductsPage.sortByPriceHiLo.click ()
        expect(ProductsPage.sortByPriceHiLo).toHaveText('Price (high to low)');
    });
});

describe('test cart container button', () => {

    it('Clicking on cart container button', () => {
        ProductsPage.cartContainer.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        browser.back();
    });
});

describe('When clicking on burger button, nav bar should show', () => {

    it('Clicking on Burger button', () => {
        ProductsPage.burgerBtn.click ()
        expect(ProductsPage.sideBar).toBeDisplayed();
        ProductsPage.burgerBtnCross.click ()
    });

    /*it('Clicking on the cross of nav bar', () => {
        ProductsPage.burgerBtn.click ()
        ProductsPage.burgerBtnCross.click ()
        expect(ProductsPage.sideBar).not.toBeDisplayed();
    });*/

    it('Clicking on All Items', () => {
        ProductsPage.burgerBtn.click ()
        ProductsPage.allItemsBtn.click ()
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        ProductsPage.burgerBtnCross.click ()
    });

    it('Clicking on About', () => {
        ProductsPage.burgerBtn.click ()
        ProductsPage.aboutBtn.click ()
        expect(browser).toHaveUrl('https://saucelabs.com/');
        browser.back();
    });

    it('Clicking on Reset app state', () => {
        ProductsPage.burgerBtn.click ()
        ProductsPage.addToCartPr2.click();
        ProductsPage.addToCartPr4.click();
        ProductsPage.resetBtn.click ()
        expect(ProductsPage.cartContainer).toHaveText('');
        ProductsPage.burgerBtnCross.click ()
    });

    it('Clicking on Logout', () => {
        ProductsPage.burgerBtn.click ()
        ProductsPage.logOutBtn.click ()
        expect(browser).toHaveUrl('https://www.saucedemo.com/');
    });
});
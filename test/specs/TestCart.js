const LoginPage = require('../pageobjects/login.page.js');
const ProductsPage = require('../pageobjects/products.page.js');
const CartPage = require('../pageobjects/cart.page.js');

describe('cart page should open correctly', () => {

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

describe('add items and test coninue shopping button', () => {

    it('Continue shopping button', () => {
        ProductsPage.addToCartPr1.click();
        ProductsPage.cartContainer.click();
        CartPage.continueShoppingBtn.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });
});

describe('add item and check Cart page', () => {

    it('Add first product', () => {
        ProductsPage.removeFromCartPr1.click();
        ProductsPage.addToCartPr1.click();
        ProductsPage.cartContainer.click();
        expect(CartPage.item1).toHaveText('Sauce Labs Backpack');
        CartPage.continueShoppingBtn.click();
    });

    it('Add second product', () => {
        ProductsPage.addToCartPr2.click();
        ProductsPage.cartContainer.click();
        expect(CartPage.item2).toHaveText('Sauce Labs Bike Light');
        CartPage.continueShoppingBtn.click();
    });

    it('Add third product', () => {
        ProductsPage.addToCartPr3.click();
        ProductsPage.cartContainer.click();
        expect(CartPage.item3).toHaveText('Sauce Labs Bolt T-Shirt');
        CartPage.continueShoppingBtn.click();
    });

    it('Add fourth product', () => {
        ProductsPage.addToCartPr4.click();
        ProductsPage.cartContainer.click();
        expect(CartPage.item4).toHaveText('Sauce Labs Fleece Jacket');
        CartPage.continueShoppingBtn.click();
    });

    it('Add fifth product', () => {
        ProductsPage.addToCartPr5.click();
        ProductsPage.cartContainer.click();
        expect(CartPage.item5).toHaveText('Sauce Labs Onesie');
        CartPage.continueShoppingBtn.click();
    });

    it('Add sixth product', () => {
        ProductsPage.addToCartPr6.click();
        ProductsPage.cartContainer.click();
        expect(CartPage.item6).toHaveText('Test.allTheThings() T-Shirt (Red)');
    });
});

describe('Click product title link', () => {

    it('Click title first product', () => {
        CartPage.item1.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4')
        browser.back();
    });

    it('Click title second product', () => {
        CartPage.item2.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=0')
        browser.back();
    });

    it('Click title third product', () => {
        CartPage.item3.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=1')
        browser.back();
    });

    it('Click title fourth product', () => {
        CartPage.item4.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=5')
        browser.back();
    });

    it('Click title fifth product', () => {
        CartPage.item5.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=2')
        browser.back();
    });

    it('Click title sixth product', () => {
        CartPage.item6.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=3')
        browser.back();
    });
});

describe('Remove items and check Cart page', () => {

    it('Remove first product', () => {
        CartPage.RemoveBtnItem1.click();
        expect(CartPage.item1).not.toBeDisplayed();
    });

    it('Remove second product', () => {
        CartPage.RemoveBtnItem2.click();
        expect(CartPage.item2).not.toBeDisplayed();
    });

    it('Remove third product', () => {
        CartPage.RemoveBtnItem3.click();
        expect(CartPage.item3).not.toBeDisplayed();
    });

    it('Remove fourth product', () => {
        CartPage.RemoveBtnItem4.click();
        expect(CartPage.item4).not.toBeDisplayed();
    });

    it('Remove fifth product', () => {
        CartPage.RemoveBtnItem5.click();
        expect(CartPage.item5).not.toBeDisplayed();
    });

    it('Remove sixth product', () => {
        CartPage.RemoveBtnItem6.click();
        expect(CartPage.item6).not.toBeDisplayed();
    });
});

describe('Check Checkout button', () => {

    it('Clicking Checkout button should open checkout page', () => {
        CartPage.checkoutBtn.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html')
        browser.back();
    });
});
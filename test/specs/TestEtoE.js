const LoginPage = require('../pageobjects/login.page.js');
const ProductsPage = require('../pageobjects/products.page.js');
const CartPage = require('../pageobjects/cart.page.js');
const CheckoutPage = require('../pageobjects/checkout.page.js');

describe('Add some products and complete the purchase', () => {

    it('Adding 1 product should complete purchase successfully', () => {
        LoginPage.open();
        LoginPage.inputUsername.setValue('standard_user');
        LoginPage.inputPassword.setValue('secret_sauce');
        LoginPage.loginButton.click();
        ProductsPage.addToCartPr1.click();
        ProductsPage.cartContainer.click();
        CartPage.checkoutBtn.click();
        CheckoutPage.firstName.setValue('Natasja');
        CheckoutPage.lastName.setValue('Dijkstra');
        CheckoutPage.postalCode.setValue('2121');
        CheckoutPage.continueBtn.click();
        CheckoutPage.finishBtn.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html');
    });

    it('Adding 3 products should complete purchase successfully', () => {
        LoginPage.open();
        LoginPage.inputUsername.setValue('standard_user');
        LoginPage.inputPassword.setValue('secret_sauce');
        LoginPage.loginButton.click();
        ProductsPage.addToCartPr1.click();
        ProductsPage.addToCartPr2.click();
        ProductsPage.addToCartPr3.click();
        ProductsPage.cartContainer.click();
        CartPage.checkoutBtn.click();
        CheckoutPage.firstName.setValue('1234');
        CheckoutPage.lastName.setValue('6789');
        CheckoutPage.postalCode.setValue('test');
        CheckoutPage.continueBtn.click();
        CheckoutPage.finishBtn.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html');
    });

    it('Adding 6 products should complete purchase successfully', () => {
        LoginPage.open();
        LoginPage.inputUsername.setValue('standard_user');
        LoginPage.inputPassword.setValue('secret_sauce');
        LoginPage.loginButton.click();
        ProductsPage.addToCartPr1.click();
        ProductsPage.addToCartPr2.click();
        ProductsPage.addToCartPr3.click();
        ProductsPage.addToCartPr4.click();
        ProductsPage.addToCartPr5.click();
        ProductsPage.addToCartPr6.click();
        ProductsPage.cartContainer.click();
        CartPage.checkoutBtn.click();
        CheckoutPage.firstName.setValue(' ');
        CheckoutPage.lastName.setValue(' ');
        CheckoutPage.postalCode.setValue(' ');
        CheckoutPage.continueBtn.click();
        CheckoutPage.finishBtn.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html');
    });

    it('Adding 2 products should complete purchase successfully and back to home', () => {
        LoginPage.open();
        LoginPage.inputUsername.setValue('standard_user');
        LoginPage.inputPassword.setValue('secret_sauce');
        LoginPage.loginButton.click();
        ProductsPage.addToCartPr3.click();
        ProductsPage.addToCartPr6.click();
        ProductsPage.cartContainer.click();
        CartPage.checkoutBtn.click();
        CheckoutPage.firstName.setValue('test');
        CheckoutPage.lastName.setValue('test');
        CheckoutPage.postalCode.setValue('6666');
        CheckoutPage.continueBtn.click();
        CheckoutPage.finishBtn.click();
        CheckoutPage.backHomeBtn.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });
});
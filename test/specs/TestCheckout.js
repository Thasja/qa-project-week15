const LoginPage = require('../pageobjects/login.page.js');
const ProductsPage = require('../pageobjects/products.page.js');
const CartPage = require('../pageobjects/cart.page.js');
const CheckoutPage = require('../pageobjects/checkout.page.js');

describe('Add some products and check first checkout page', () => {

    it('Clicking cancel button should go back to cart page', () => {
        LoginPage.open();
        LoginPage.inputUsername.setValue('standard_user');
        LoginPage.inputPassword.setValue('secret_sauce');
        LoginPage.loginButton.click();
        ProductsPage.addToCartPr1.click();
        ProductsPage.cartContainer.click();
        CartPage.checkoutBtn.click();
        CheckoutPage.cancelBtn.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
    });

    it('leaving first name field empty should show error message', () => {
        LoginPage.open();
        LoginPage.inputUsername.setValue('standard_user');
        LoginPage.inputPassword.setValue('secret_sauce');
        LoginPage.loginButton.click();
        ProductsPage.addToCartPr2.click();
        ProductsPage.cartContainer.click();
        CartPage.checkoutBtn.click();
        CheckoutPage.firstName.setValue('');
        CheckoutPage.lastName.setValue('test');
        CheckoutPage.postalCode.setValue('1212');
        CheckoutPage.continueBtn.click();
        expect(CheckoutPage.errorContainer).toHaveText('Error: First Name is required');
    });

    it('leaving last name field empty should show error message', () => {
        LoginPage.open();
        LoginPage.inputUsername.setValue('standard_user');
        LoginPage.inputPassword.setValue('secret_sauce');
        LoginPage.loginButton.click();
        ProductsPage.addToCartPr3.click();
        ProductsPage.cartContainer.click();
        CartPage.checkoutBtn.click();
        CheckoutPage.firstName.setValue('test');
        CheckoutPage.lastName.setValue('');
        CheckoutPage.postalCode.setValue('1212');
        CheckoutPage.continueBtn.click();
        expect(CheckoutPage.errorContainer).toHaveText('Error: Last Name is required');
    });

    it('leaving postal code field empty should show error message', () => {
        LoginPage.open();
        LoginPage.inputUsername.setValue('standard_user');
        LoginPage.inputPassword.setValue('secret_sauce');
        LoginPage.loginButton.click();
        ProductsPage.addToCartPr4.click();
        ProductsPage.cartContainer.click();
        CartPage.checkoutBtn.click();
        CheckoutPage.firstName.setValue('test');
        CheckoutPage.lastName.setValue('test');
        CheckoutPage.postalCode.setValue('');
        CheckoutPage.continueBtn.click();
        expect(CheckoutPage.errorContainer).toHaveText('Error: Postal Code is required');
    });

    it('Enter valid data in all the fields and clicking continue should open Checkout overview page', () => {
        LoginPage.open();
        LoginPage.inputUsername.setValue('standard_user');
        LoginPage.inputPassword.setValue('secret_sauce');
        LoginPage.loginButton.click();
        ProductsPage.addToCartPr5.click();
        ProductsPage.cartContainer.click();
        CartPage.checkoutBtn.click();
        CheckoutPage.firstName.setValue('test');
        CheckoutPage.lastName.setValue('test');
        CheckoutPage.postalCode.setValue('1212');
        CheckoutPage.continueBtn.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
    });
});

describe('Add some products and check overview page should have the correct total price', () => {

    it('Enter valid data in all the fields and clicking continue should open Checkout overview page', () => {
        browser.reloadSession();
        LoginPage.open();
        LoginPage.inputUsername.setValue('standard_user');
        LoginPage.inputPassword.setValue('secret_sauce');
        LoginPage.loginButton.click();
        ProductsPage.addToCartPr5.click();
        ProductsPage.addToCartPr2.click();
        ProductsPage.cartContainer.click();
        CartPage.checkoutBtn.click();
        CheckoutPage.firstName.setValue('test');
        CheckoutPage.lastName.setValue('test');
        CheckoutPage.postalCode.setValue('1212');
        CheckoutPage.continueBtn.click();
        expect(CheckoutPage.summaryTotalContainer).toHaveText('Total: $19.42');
    });

    it('Enter valid data in all the fields and clicking continue should open Checkout overview page', () => {
        LoginPage.open();
        LoginPage.inputUsername.setValue('standard_user');
        LoginPage.inputPassword.setValue('secret_sauce');
        LoginPage.loginButton.click();
        ProductsPage.addToCartPr1.click();
        ProductsPage.addToCartPr6.click();
        ProductsPage.removeFromCartPr2.click();
        ProductsPage.removeFromCartPr5.click();
        ProductsPage.cartContainer.click();
        CartPage.checkoutBtn.click();
        CheckoutPage.firstName.setValue('test');
        CheckoutPage.lastName.setValue('test');
        CheckoutPage.postalCode.setValue('1212');
        CheckoutPage.continueBtn.click();
        expect(CheckoutPage.summaryTotalContainer).toHaveText('Total: $49.66');
    });

    it('clicking cancel on checkout overview page should redirect to products page', () => {
        LoginPage.open();
        LoginPage.inputUsername.setValue('standard_user');
        LoginPage.inputPassword.setValue('secret_sauce');
        LoginPage.loginButton.click();
        ProductsPage.addToCartPr3.click();
        ProductsPage.addToCartPr4.click();
        ProductsPage.removeFromCartPr1.click();
        ProductsPage.removeFromCartPr6.click();
        ProductsPage.cartContainer.click();
        CartPage.checkoutBtn.click();
        CheckoutPage.firstName.setValue('test');
        CheckoutPage.lastName.setValue('test');
        CheckoutPage.postalCode.setValue('1212');
        CheckoutPage.continueBtn.click();
        CheckoutPage.cancelBtn.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });
});
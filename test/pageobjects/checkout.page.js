const Page = require('./page');

class CheckoutPage extends Page {
    
    get firstName () {return $('#first-name') }
	get lastName () {return $('#last-name') }
	get postalCode () {return $('#postal-code') }
	
    get cancelBtn () {return $('#cancel') }
    get continueBtn () {return $('#continue') }
	get errorContainer () {return $('#checkout_info_container') }

    get finishBtn () {return $('#finish') }
	get backHomeBtn () {return $('#back-to-products') }
    get summaryContainer () {return $('#checkout_summary_container') }


    open () {
        return super.open('https://www.saucedemo.com/checkout-step-one.html');
    }
}

module.exports = new CheckoutPage();
const Page = require('./page');

class CheckoutPage extends Page {
    
    get firstName () {return $('#first-name') }
	get lastName () {return $('#last-name') }
	get postalCode () {return $('#postal-code') }
	
    get cancelBtn () {return $('#cancel') }
    get continueBtn () {return $('#continue') }
	get errorContainer () {return $('//*[@id="checkout_info_container"]/div/form/div[1]/div[4]') }

    get summaryTotalContainer () {return $('#checkout_summary_container > div > div.summary_info > div.summary_total_label') }
    get finishBtn () {return $('#finish') }
	get backHomeBtn () {return $('#back-to-products') }


    open () {
        return super.open('https://www.saucedemo.com/checkout-step-one.html');
    }
}

module.exports = new CheckoutPage();
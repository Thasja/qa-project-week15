const Page = require('./page');

class CartPage extends Page {
    get continueShoppingBtn () { return $('#continue-shopping') }
    get checkoutBtn () { return $('#checkout') }

    get item1 () { return $('//*[@id="item_4_title_link"]/div') }
    get item2 () { return $('#item_0_title_link') }
    get item3 () { return $('#item_1_title_link') }
    get item4 () { return $('#item_5_title_link') }
    get item5 () { return $('#item_2_title_link') }
    get item6 () { return $('//*[@id="item_3_title_link"]/div') }

    get RemoveBtnItem1 () { return $('#remove-sauce-labs-backpack') }
    get RemoveBtnItem2 () { return $('#remove-sauce-labs-bike-light') }
    get RemoveBtnItem3 () { return $('#remove-sauce-labs-bolt-t-shirt') }
    get RemoveBtnItem4 () { return $('#remove-sauce-labs-fleece-jacket') }
    get RemoveBtnItem5 () { return $('#remove-sauce-labs-onesie') }
    get RemoveBtnItem6 () { return $('//*[@id="remove-test.allthethings()-t-shirt-(red)"]') }

    open () {
        return super.open('inventory.html');
    }
}

module.exports = new CartPage();
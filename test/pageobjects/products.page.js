const Page = require('./page');

class ProductsPage extends Page {
    get fotoItem1 () { return $('#item_4_img_link > img') }
    get fotoItem2 () { return $('#item_0_img_link > img') }
    get fotoItem3 () { return $('#item_1_img_link > img') }
    get fotoItem4 () { return $('#item_5_img_link > img') }
    get fotoItem5 () { return $('#item_2_img_link > img') }
    get fotoItem6 () { return $('#item_3_img_link > img') }

    get productTitle1 () { return $('#item_4_title_link') }
    get productTitle2 () { return $('#item_0_title_link') }
    get productTitle3 () { return $('#item_1_title_link') }
    get productTitle4 () { return $('#item_5_title_link') }
    get productTitle5 () { return $('#item_2_title_link') }
    get productTitle6 () { return $('#item_3_title_link') }

    get addToCartPr1 () { return $('#add-to-cart-sauce-labs-backpack') }
    get addToCartPr2 () { return $('#add-to-cart-sauce-labs-bike-light') }
    get addToCartPr3 () { return $('#add-to-cart-sauce-labs-bolt-t-shirt') }
    get addToCartPr4 () { return $('#add-to-cart-sauce-labs-fleece-jacket') }
    get addToCartPr5 () { return $('#add-to-cart-sauce-labs-onesie') }
    get addToCartPr6 () { return $('//*[@id="add-to-cart-test.allthethings()-t-shirt-(red)"]') }

    get removeFromCartPr1 () { return $('#remove-sauce-labs-backpack') }
    get removeFromCartPr2 () { return $('#remove-sauce-labs-bike-light') }
    get removeFromCartPr3 () { return $('#remove-sauce-labs-bolt-t-shirt') }
    get removeFromCartPr4 () { return $('#remove-sauce-labs-fleece-jacket') }
    get removeFromCartPr5 () { return $('#remove-sauce-labs-onesie') }
    get removeFromCartPr6 () { return $('//*[@id="remove-test.allthethings()-t-shirt-(red)"]') }

    get sortByBtn () { return $('.product_sort_container') }
    get sortByNameAz () { return $('span > select > option:nth-child(1)') }
    get sortByNameZa() { return $('span > select > option:nth-child(2)') }
    get sortByLowToHigh () { return $('span > select > option:nth-child(3)') }
    get sortByHighToLow () { return $('span > select > option:nth-child(4)') }

    get cartContainer () { return $('#shopping_cart_container > a') }

    open () {
        return super.open('inventory.html');
    }
}

module.exports = new ProductsPage();

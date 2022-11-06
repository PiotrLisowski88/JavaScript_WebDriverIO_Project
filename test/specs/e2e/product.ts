import { alertMessage, deletedProductMessage, searchPhrase } from "../../config/data";
import { cardBasketUrl, helionHomeUrl, searchProductUrl } from "../../config/pagesUrl"
import cartpage from "../../pages/cartpage";
import searchbarpage from "../../pages/components/searchbarpage";
import productpage from "../../pages/productpage";
import SearchResultpage from "../../pages/SearchResultpage";

describe("E2E - Products", async () => {
    let productTitle: string = "";
    let price: string = "";
    before(() => {
        browser.url(helionHomeUrl);
    }),
    it("Should type value into searchbar and click search button", async () => {
        await searchbarpage.TypeSearchPrhrase(searchPhrase);
        await searchbarpage.clickOnSearchIcon();
        await expect(browser).toHaveUrl(searchProductUrl);
    }),
    it("Should click on first product", async () => {
        await SearchResultpage.clickOnFirstBookItem();
        await browser.pause(300);
        await productpage.BookTitleIsVisible();
        await productpage.addToCardBtnIsVisible();
        productTitle = await productpage.getProductTitleValue();
        price = await productpage.getProductPrice();
    }),
    it("Should click on add to cart button", async () => {
        await productpage.clickOnAddtoCardBtn();
        await expect(browser).toHaveUrlContaining(cardBasketUrl);
        await expect(await cartpage.getSuccessAlertValue()).toContain(productTitle);
        await expect(await cartpage.getTotalPriceValue()).toContain(price);
    }),
    it("Should delete product from cart", async () => {
        await cartpage.clickOnCheckBox();
        await cartpage.ClickOnDeleteSelectedLabel();    
        await expect(await browser.getAlertText()).toContain(alertMessage);
        await cartpage.acceptDeleteAlert();      
        await expect(await cartpage.getDeletedAlertMessageValue()).toContain(deletedProductMessage);
    })
})
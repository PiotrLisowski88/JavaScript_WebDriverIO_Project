class ProductPage {
    get BookTitle() {
        return $("div.title-group > h1 >span");
    }
    get AddToCardBtn() {
        return $("#addToBasket_inf041");
    }
    get productPrice() {
        return $("span#cena_d");
    }
    async BookTitleIsVisible() {
        const title:WebdriverIO.Element = await this.BookTitle;
        await title.waitForDisplayed();
    }
    async addToCardBtnIsVisible() {
        const btn:WebdriverIO.Element = await this.AddToCardBtn;
        await btn.waitForDisplayed();
    }
    async clickOnAddtoCardBtn() {
        const btn:WebdriverIO.Element = await this.AddToCardBtn;
        await btn.waitForDisplayed();
        await btn.click();
    }
    async getProductTitleValue():Promise<string> {
        const title:WebdriverIO.Element = await this.BookTitle;
        await title.waitForDisplayed();
        return await title.getText();
    }
    async getProductPrice():Promise<string> {
        const price:WebdriverIO.Element = await this.productPrice;
        await price.waitForDisplayed();
        return await price.getText();
    }
}
export default new ProductPage();
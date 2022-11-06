class CartPage {
    get successAlert() {
        return $("div.successbox > p");
    }
    get totalPrice() {
        return $("h3#cart-edit-summary");
    }
    get checkBox() {
        return $("form#formularz tr th.checkbox");
    }
    get deleteSelectedLabel() {
        return $("div#usun a");
    }
    get deletedAlertMessage() {
        return $("div.infobox > p");
    }
    
    async acceptDeleteAlert() {
        await browser.acceptAlert();
    }

    async getDeletedAlertMessageValue():Promise<string> {
        const alert:WebdriverIO.Element = await this.deletedAlertMessage;
        await alert.waitForDisplayed();
        return await alert.getText();
    } 

    async ClickOnDeleteSelectedLabel(){
        const label:WebdriverIO.Element = await this.deleteSelectedLabel;
        await label.waitForDisplayed();
        await label.scrollIntoView();
        await label.click();
    }
    async clickOnCheckBox() {
        const checkbox:WebdriverIO.Element  = await this.checkBox;
        await checkbox.waitForDisplayed();
        await checkbox.scrollIntoView();
        await checkbox.click();
    }
    async getTotalPriceValue():Promise<string> {
        const price:WebdriverIO.Element = await this.totalPrice;
        await price.waitForDisplayed();
        return await price.getText();
}
    async getSuccessAlertValue():Promise <string> {
        const alert:WebdriverIO.Element = await this.successAlert;
        await alert.waitForDisplayed();
        return await alert.getText();
    }
}
export default new CartPage();
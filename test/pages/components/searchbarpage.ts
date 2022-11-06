class SearchBarPage {
    get searchinput () {
        return $("#inputSearch");
    }
    get searchicon () {
        return $("/html/body/div[2]/div/div[1]/div[2]/div/form/fieldset/a/button")
    }
    get suggestPopup () {
        return $("form#szukanie div.suggest-list");
    }
    get SeeAllBookBtn () {
        return $("li.wszystkie > p > a");
    }
    get notFoundAlert () {
        return $("div.not-found");
    }
    async  getNotFoundAlertText(): Promise<string> {
        const alert:WebdriverIO.Element = await this.notFoundAlert;
        await alert.waitForDisplayed();
        return await alert.getText();
    }

    async getInputValue ():Promise<string> {
        const input:WebdriverIO.Element = await this.searchinput;
        await input.waitForDisplayed();
        return await input.getValue();
    }
    async clearSearchbar() {
        const input:WebdriverIO.Element = await this.searchinput;
        await input.waitForDisplayed();
        await input.clearValue();
    }
  
    async clickOnSeeAllBooksBtn() {
        const btn:WebdriverIO.Element = await this.SeeAllBookBtn;
        await btn.waitForDisplayed();
        await btn.scrollIntoView();
        await btn.click();
    }

    async suggestPopupIsVisible() {
        const popup:WebdriverIO.Element = await this.suggestPopup;
        await popup.waitForDisplayed();        
    }

    async TypeSearchPrhrase(value: string) {
        const input:WebdriverIO.Element = await this.searchinput;
            await input.waitForDisplayed();
            await browser.pause(300);
            await browser.keys(['Control', 'a']);
            await input.waitForDisplayed();
            await input.setValue(value);
    }

    async clickOnSearchIcon() {
        const icon:WebdriverIO.Element = await this.searchicon;
        await icon.waitForDisplayed();
        await icon.click();
    }

    async searchBarIsVisible() {
        const input:WebdriverIO.Element = await this.searchinput;
        await input.waitForDisplayed(); 
}
}

export default new SearchBarPage();
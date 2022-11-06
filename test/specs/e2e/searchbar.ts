import { incorrectSearchPhrase, noFoundMessage, searchPhrase, SearchResultTitle } from "../../config/data";
import { helionHomeUrl, notFoundUrl, searchPageUrl } from "../../config/pagesUrl"
import searchbarpage from "../../pages/components/searchbarpage";
import globalpage from "../../pages/globalpage"
import SearchResultpage from "../../pages/SearchResultpage";

describe("E2E - Searchbar", async () => {
    it("Should open helion homepage, verify url and searchbar", async () => {
    await globalpage.openPage(helionHomeUrl, helionHomeUrl);
    await searchbarpage.searchBarIsVisible();
    }),
    it("Should click on search icon and verify", async () => {
        await searchbarpage.clickOnSearchIcon();
        await expect(browser).toHaveUrl(helionHomeUrl);
    }),
    it("Should type search value and verify visible popup", async () => {        
        await searchbarpage.TypeSearchPrhrase(searchPhrase); 
        await searchbarpage.suggestPopupIsVisible();       
    }),
    it("Should click on see all books button", async () => {
        await searchbarpage.clickOnSeeAllBooksBtn();
        await expect(browser).toHaveUrl(searchPageUrl);
    }),
    it("Should verify visible correctly title and number of books",async () => {
        const title:string = await SearchResultpage.getPageTitle(); 
        const numberOfBooks: number = await SearchResultpage.getNumberOfBooks();
        await expect(title).toContain(SearchResultTitle);   
        await expect(numberOfBooks).toEqual(20);    
    }),
    it("Should clear input value", async () =>  {
        await searchbarpage.clearSearchbar();
        await expect(await searchbarpage.getInputValue()).toContain("");
    }),
    it("Should type incorect book name and verify message", async() => {
        await searchbarpage.TypeSearchPrhrase(incorrectSearchPhrase);
        await searchbarpage.clickOnSearchIcon();
        await expect(await searchbarpage.getNotFoundAlertText()).toContain(noFoundMessage);
        await browser.pause(500);
    }),
    it("Should the incorect input value and click the search icon", async() => {
        await searchbarpage.clearSearchbar();
        await expect(await searchbarpage.getInputValue()).toContain("");
        await expect(browser).toHaveUrl(notFoundUrl);
        await searchbarpage.clickOnSearchIcon();
        await expect(await searchbarpage.getInputValue()).toContain(incorrectSearchPhrase);
    })
})

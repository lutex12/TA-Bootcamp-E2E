const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("I am on the home page of the online store", async () => {
    await browser.url("https://www.newegg.com");
});

Given("I close the promo banner if appears", async () => {
    await browser.waitUntil(
        () => browser.execute(() => document.readyState === 'complete')
        );
        const isPromoBanner = await $(".modal-body").isExisting();
    if (isPromoBanner === true) {
        const closeButton = await $(".modal-content > button.close");
        await closeButton.click();
    };
});

When("I entry the word Windows in the search bar", async () => {
    const searchedItem = "Windows";
    const searchBar = await $(".header2021-search-box > input:nth-child(1)");
    await searchBar.setValue(searchedItem);
});

When("I click the search button", async () => {
    const searchButton = await $(".header2021-search-button");
    await searchButton.click();
});

Then("I can see that at least one item appears", async () => {
    await browser.waitUntil(
        () => browser.execute(() => document.readyState === 'complete')
        );
    const itemRow = await $(".item-cells-wrap");
    await expect(itemRow).toBeExisting();
});

When("I open Today's Best Deals tab", async () => {
    const bestDealTab = await $("#trendingBanner_720202 > span:nth-child(1)");
    await bestDealTab.click();
    const bestDealTitle = await $(".limit-string");
    await expect(bestDealTitle).toHaveTextContaining("TODAY'S BEST DEALS");
});

When("I click on the Internet shop logo", async () => {
    const shopLogo = await $(".header2021-logo-img");
    await shopLogo.click();
});

Then("I can see that the home page opens", async () => {
    const actualUrl = await browser.getUrl();
    await expect(actualUrl).toEqual("https://www.newegg.com/");
});
import {test} from '@playwright/test';

test('SearchFunctionality', async({page})=>{
    await page.goto("https://www.google.com");
    await page.waitForTimeout(3000);

let searchBox= await page.locator("//textarea[@class = 'gLFyf']");
        await searchBox.fill("CYDEO");
        await page.waitForTimeout(3000);
        await searchBox.press("Enter");
    ;
})
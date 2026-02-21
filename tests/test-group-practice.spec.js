import {test} from '@playwright/test';

test.describe("Practice Cydeo", ()=>{

    test.beforeEach(async ({page})=>{
        await page.goto("https://practice.cydeo.com/");
    })

    test.afterEach(async ({page})=>{
        await page.waitForTimeout(5000);
        await page.close();
    });

    test("Get page title", async ({page}) =>{
        console.log(await page.title());

    });

    test("Get page URL", async ({page}) =>{
        console.log(await page.url());

    });

})
import{test} from '@playwright/test';

test('Navigate to Practice site', async({page}) =>{
    await page.goto("https://practice.cydeo.com/");
   let actualTitle = await page.title()
   console.log(actualTitle);
    })

    test('Getting page URL', async({page})=>{
        await page.goto("https://practice.cydeo.com/"); 

        let actualURL = await page.url();
        console.log(actualURL);
    })

//const{test}=requir('@plawright/test');
import{test} from '@playwright/test';

test("Simple Amazon Launch", async ({ page }) => {
  await page.goto("https://www.amazon.com/");
  await page.waitForTimeout(5000);
});
import { test } from "@playwright/test";

test("Practice Test", async ({ page }) => {
  //navigate to amazon website
  await page.goto("https://www.amazon.com/");
  await page.waitForTimeout(3000);
});

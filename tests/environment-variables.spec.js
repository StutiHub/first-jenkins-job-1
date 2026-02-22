import { test } from '@playwright/test';

test('@env-test', async ({ page }) => {
console.log('User name is ' + process.env.PRACTICE_USERNAME);
});
test('Bypass authentication by encoding the credentials base64 format', async ({ page }) => {
  let encodedCredentials = Buffer.from(`${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`).toString('base64');
  await page.setExtraHTTPHeaders({
    Authorization: `Basic ${encodedCredentials}`,
  });
  await page.goto('https://practice.cydeo.com/basic_auth');
  await page.waitForTimeout(5000);
});


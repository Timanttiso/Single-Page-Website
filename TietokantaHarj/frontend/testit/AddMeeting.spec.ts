import { test, expect } from '@playwright/test';

const appAddress = 'http://localhost:5173';

test('Adding a meeting to the list', async ({ page }) => {
    const name = (Math.random() + 1).toString(36).substring(7);
    const email = name + '@' + (Math.random() + 1).toString(36).substring(7) + '.com';
    const number = (Math.random() + 1).toString();
    const reason = (Math.random() + 1).toString(36);

    await page.goto(appAddress);

    await page.fill("input#name", name);
    await page.fill("input#email", email);
    await page.fill("input#phoneNumber", number);
    await page.fill("textarea#reason", reason);

    await page.click('input:has-text("Send!")');

    await page.waitForSelector('.meetingList');

    const lastMeeting = page.locator('.meetingList').last();

    await expect(lastMeeting).toHaveText(`${name} (${email}) Reason: ${reason}`);
});
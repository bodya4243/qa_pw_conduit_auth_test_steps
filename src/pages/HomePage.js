import { expect, test } from '@playwright/test';

export class HomePage {
  constructor(page) {
    this.yourFeedTab = page.getByText('Your Feed');
  }

  async assertYourFeedTabIsVisible() {
    await test.step("is 'Feed Tab' visible", async () => {
      await expect(this.yourFeedTab).toBeVisible();
    });
  }
}

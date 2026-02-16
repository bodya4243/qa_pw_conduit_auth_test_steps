import { expect, test } from '@playwright/test';

export class SignUpPage {
  constructor(page) {
    this.page = page;
    this.usernameField = page.getByPlaceholder('Username');
    this.emailField = page.getByPlaceholder('Email');
    this.passwordField = page.getByPlaceholder('Password');
    this.signUpButton = page.getByRole('button', { name: 'Sign up' });
    this.errorMessage = page.getByRole('list').nth(1);
  }

  async open() {
    await test.step('Open Sign Up page', async () => {
      await this.page.goto('/user/register');
    });
  }

  async fillUsernameField(username) {
    await test.step("fill 'Username' field", async () => {
      await this.usernameField.fill(username);
    });
  }

  async fillEmailField(email) {
    await test.step("fill 'Email' field", async () => {
      await this.emailField.fill(email);
    });
  }

  async fillPasswordField(password) {
    await test.step("fill 'Password' field", async () => {
      await this.passwordField.fill(password);
    });
  }

  async clickSignUpButton() {
    await test.step('click sign up button', async () => {
      await this.signUpButton.click();
    });
  }

  async assertErrorMessageContainsText(messageText) {
    await test.step('Asserts error', async () => {
      await expect(this.errorMessage).toContainText(messageText);
    });
  }
}

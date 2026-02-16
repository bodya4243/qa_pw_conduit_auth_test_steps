import { test } from '@playwright/test';
import { SignUpPage } from '../../src/pages/SignUpPage';
import { HomePage } from '../../src/pages/HomePage';
import config from '../../config.json';

let signUpPage;
let homePage;
let user;

test.beforeEach(async ({ page }) => {
  signUpPage = new SignUpPage(page);
  homePage = new HomePage(page);

  user = {
    username: config.user,
    email: config.user_email,
    password: config.password,
  };
});

test('Successful `Sign up` flow test', async () => {
  await signUpPage.open();
  await signUpPage.fillUsernameField(user.username);
  await signUpPage.fillEmailField(user.email);
  await signUpPage.fillPasswordField(user.password);
  await signUpPage.clickSignUpButton();

  await homePage.assertYourFeedTabIsVisible();
});

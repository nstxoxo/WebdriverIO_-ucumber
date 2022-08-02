import { When, Then } from "@wdio/cucumber-framework";
import { getWebElement } from "../../helpers/helpers";
import { MainPage } from "../PageObjects/MainPage";
import { ResultPage } from "../PageObjects/ResultPage";

When(/^I click on the login button$/, async () => {
  await (await getWebElement(MainPage.loginButton)).click();
});
Then(/^I should see the login input field$/, async () => {
  const checkLoginInput = await getWebElement(ResultPage.loginInput);
  expect(await checkLoginInput.isExisting());
});



import { When, Then } from "@wdio/cucumber-framework";
import { getWebElement } from "../../helpers/helpers";
import { MainPage } from "../pages/MainPage";
import { ResultPage } from "../pages/ResultPage";
import { logger } from "../../conf/loggerConfig";

When(/^I click on the login button$/, async () => {
  await (await getWebElement(MainPage.loginButton)).click();
});
Then(/^I should see the login input field$/, async () => {
  logger.debug("I should see the ${ResultPage.loginInput}");
  logger.error("I should see the ${ResultPage.loginInput}");
  const checkLoginInput = await getWebElement(ResultPage.loginInput);
  expect(await checkLoginInput.isExisting());
});

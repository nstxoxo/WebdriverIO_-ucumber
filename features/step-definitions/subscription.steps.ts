import { When, Then } from "@wdio/cucumber-framework";
import { getWebElement } from "../../helpers/helpers";
import { MainPage } from "../pages/MainPage";
import { ResultPage } from "../pages/ResultPage";
import { logger } from "../../conf/loggerConfig";

When(/^I click on the button "Попробовать плюс"$/, async () => {
  await (await getWebElement(MainPage.subscribtionLink)).click();
});
Then(/^I should see that the button "Оформить подписку" is enabled$/, async () => {
  logger.debug(
    "I should see that the button ${ResultPage.subscriptionButton} is enabled"
  );
  logger.error(
    "I should see that the button ${ResultPage.subscriptionButton} is enabled"
  );
  const checkButton = await getWebElement(ResultPage.subscriptionButton);
  expect(await checkButton.isEnabled());
});

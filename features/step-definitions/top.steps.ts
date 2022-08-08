import { When, Then } from "@wdio/cucumber-framework";
import { getWebElement } from "../../helpers/helpers";
import { MainPage } from "../pages/MainPage";
import { ResultPage } from "../pages/ResultPage";
import { topTitle } from "../../constans/strings";
import { logger } from "../../conf/loggerConfig";

When(/^I click on the link "Фильмы"$/, async () => {
  logger.debug("I click on the link ${MainPage.films}");
  logger.error("I click on the link ${MainPage.films}");
  await (await getWebElement(MainPage.films)).click();
});
When(/^I click on the link "500 лучших фильмов"$/, async () => {
  logger.debug("I click on the link ${ResultPage.filmsTop}");
  logger.error("I click on the link ${ResultPage.filmsTop}");
  await (await getWebElement(ResultPage.filmsTop)).click();
});
Then(/^I should see the title "500 лучших фильмов"$/, async () => {
  logger.debug("I should see the title ${ResultPage.topTitle}");
  logger.error("I should see the title ${ResultPage.topTitle}");
  const checkResult = await getWebElement(ResultPage.topTitle);
  expect(await checkResult.getText()).toContain(topTitle);
});

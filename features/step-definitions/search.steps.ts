import { When, Then } from "@wdio/cucumber-framework";
import { getWebElement } from "../../helpers/helpers";
import { MainPage } from "../pages/MainPage";
import { ResultPage } from "../pages/ResultPage";
import { greenBook } from "../../constans/strings";
import { logger } from "../../conf/loggerConfig";

When(/^I enter "Зеленая книга" in input field$/, async () => {
  logger.debug("I enter ${greenBook} in input field");
  logger.error("I enter ${greenBook} in input field");
  await (await getWebElement(MainPage.searchInput)).setValue(greenBook);
});
When(/^I click on the link$/, async () => {
  logger.debug("I click on the ${MainPage.searchButton}");
  logger.error("I click on the ${MainPage.searchButton}");
  await (await getWebElement(MainPage.searchButton)).click();
});
Then(/^I should see the image "Зеленая книга"$/, async () => {
  logger.debug("I should see the image ${ResultPage.searchResult}");
  logger.error("I should see the image ${ResultPage.searchResult}");
  const checkResult = await getWebElement(ResultPage.searchResult);
  expect(await checkResult.getText()).toContain(greenBook);
});

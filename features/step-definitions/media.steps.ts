import { When, Then } from "@wdio/cucumber-framework";
import { getWebElement } from "../../helpers/helpers";
import { MainPage } from "../pages/MainPage";
import { ResultPage } from "../pages/ResultPage";
import { logger } from "../../conf/loggerConfig";

When(/^I click on the link "Медиа"$/, async () => {
  await (await getWebElement(MainPage.mediaButton)).click();
});
Then(/^I should see the button "Подкасты" is clickable$/, async () => {
  logger.debug(
    "I should see the button ${ResultPage.mediaPodcastButton} is clickable"
  );
  logger.error(
    "I should see the button ${ResultPage.mediaPodcastButton} is clickable"
  );
  const checkClickable = await getWebElement(ResultPage.mediaPodcastButton);
  expect(await checkClickable.isClickable());
});

import { When, Then } from "@wdio/cucumber-framework";
import { getWebElement } from "../../helpers/helpers";
import { MainPage } from "../PageObjects/MainPage";
import { ResultPage } from "../PageObjects/ResultPage";

When(/^I click on the link "Медиа"$/, async () => {
  await (await getWebElement(MainPage.mediaButton)).click();
});
Then(/^I should see the button "Подкасты" is clickable$/, async () => {
  const checkClickable = await getWebElement(ResultPage.mediaPodcastButton);
  expect(await checkClickable.isClickable());
});

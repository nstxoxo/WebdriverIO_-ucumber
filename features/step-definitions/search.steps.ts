import { When, Then } from "@wdio/cucumber-framework";
import { getWebElement } from "../../helpers/helpers";
import { MainPage } from "../pages/MainPage";
import { ResultPage } from "../pages/ResultPage";
import { greenBook } from "../../constans/strings";

When(/^I enter "Зеленая книга" in input field$/, async () => {
  await (await getWebElement(MainPage.searchInput)).setValue(greenBook);
});
When(/^I click on the link$/, async () => {
  await (await getWebElement(MainPage.searchButton)).click();
});
Then(/^I should see the image "Зеленая книга"$/, async () => {
  const checkResult = await getWebElement(ResultPage.searchResult);
  expect(await checkResult.getText()).toContain(greenBook);
});

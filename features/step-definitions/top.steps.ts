import { When, Then } from "@wdio/cucumber-framework";
import { getWebElement } from "../../helpers/helpers";
import { MainPage } from "../PageObjects/MainPage";
import { ResultPage } from "../PageObjects/ResultPage";
import {  topTitle } from "../../constans/strings";

When(/^I click on the link "Фильмы"$/, async () => {
  await (await getWebElement(MainPage.films)).click();
});
When(/^I click on the link "500 лучших фильмов"$/, async () => {
  await (await getWebElement(ResultPage.filmsTop)).click();
});
Then(/^I should see the title "500 лучших фильмов"$/, async () => {
  const checkResult = await getWebElement(ResultPage.topTitle);
  expect(await checkResult.getText()).toContain(topTitle);
});

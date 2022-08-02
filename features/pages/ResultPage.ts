import { selectors } from "../../constans/locators";

export class ResultPage {
  static get loginInput(): string {
    return selectors.loginInput;
  }
  static get searchResult() {
    return selectors.searchResult;
  }

  static get filmsTop() {
    return selectors.filmsTop;
  }

  static get topTitle() {
    return selectors.topTitle;
  }

  static get subscriptionButton() {
    return selectors.subscriptionButton;
  }

  static get mediaPodcastButton() {
    return selectors.mediaPodcastButton;
  }
}

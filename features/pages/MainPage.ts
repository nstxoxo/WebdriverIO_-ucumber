import { selectors } from "../../constans/locators";

export class MainPage {
  static get loginButton(): string {
    return selectors.loginButton;
  }

  static get searchInput(): string {
    return selectors.searchInput;
  }

  static get films(): string {
    return selectors.films;
  }

  static get searchButton(): string {
    return selectors.searchButton;
  }

  static get subscribtionLink(): string {
    return selectors.subscribtionLink;
  }

  static get mediaButton(): string {
    return selectors.mediaButton;
  }


}

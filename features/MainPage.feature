Feature: Kinopoisk testing

  Background:
    Given I'm on the main page

  @Login
  Scenario: Check login input
    When I click on the login button
    Then I should see the login input field

  @Search
  Scenario: Check input field
    When I enter "Зеленая книга" in input field
    When I click on the link
    Then I should see the image "Зеленая книга"

  @Top
  Scenario: Check top 500 films
    When I click on the link "Фильмы" 
    When I click on the link "500 лучших фильмов"
    Then I should see the title "500 лучших фильмов"

  @Subscription
  Scenario: Check the subscription link
    When I click on the button "Попробовать плюс"
    Then I should see that the button "Оформить подписку" is enabled

  @Media
  Scenario: Check buying tickets
    When I click on the link "Медиа"
    Then I should see the button "Подкасты" is clickable


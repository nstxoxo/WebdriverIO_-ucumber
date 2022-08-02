export const getWebElement = async (elementLocator: string): Promise<WebdriverIO.Element> => {
  const webElement = await $(elementLocator);
  await webElement.waitForExist({ timeout: 10000, reverse: false });
  return webElement;
};

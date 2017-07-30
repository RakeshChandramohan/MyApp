import { browser, element, by } from 'protractor';

export class RetailAssitPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ra-root h1')).getText();
  }
}

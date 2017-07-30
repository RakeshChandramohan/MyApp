import { RetailAssitPage } from './app.po';

describe('retail-assit App', () => {
  let page: RetailAssitPage;

  beforeEach(() => {
    page = new RetailAssitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ra works!');
  });
});

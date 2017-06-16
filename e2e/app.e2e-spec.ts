import { GovermentWebPage } from './app.po';

describe('goverment-web App', () => {
  let page: GovermentWebPage;

  beforeEach(() => {
    page = new GovermentWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

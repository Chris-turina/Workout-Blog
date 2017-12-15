import { AngularExtendedPage } from './app.po';

describe('angular-extended App', () => {
  let page: AngularExtendedPage;

  beforeEach(() => {
    page = new AngularExtendedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

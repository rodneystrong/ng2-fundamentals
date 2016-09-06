import { RetainPage } from './app.po';

describe('retain App', function() {
  let page: RetainPage;

  beforeEach(() => {
    page = new RetainPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

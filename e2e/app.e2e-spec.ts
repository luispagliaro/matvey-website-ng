import { MatveyWebsitePage } from './app.po';

describe('matvey-website App', () => {
  let page: MatveyWebsitePage;

  beforeEach(() => {
    page = new MatveyWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

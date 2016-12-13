import { DirectivesFinalPage } from './app.po';

describe('directives-final App', function() {
  let page: DirectivesFinalPage;

  beforeEach(() => {
    page = new DirectivesFinalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

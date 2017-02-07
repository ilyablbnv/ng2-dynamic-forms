import { Ng2DynamicFormsPage } from './app.po';

describe('ng2-dynamic-forms App', function() {
  let page: Ng2DynamicFormsPage;

  beforeEach(() => {
    page = new Ng2DynamicFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

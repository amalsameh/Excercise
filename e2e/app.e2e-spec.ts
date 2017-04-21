import { ExcercisePage } from './app.po';

describe('excercise App', () => {
  let page: ExcercisePage;

  beforeEach(() => {
    page = new ExcercisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

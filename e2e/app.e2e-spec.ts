import { TodoAngular2AppPage } from './app.po';

describe('todo-angular2-app App', () => {
  let page: TodoAngular2AppPage;

  beforeEach(() => {
    page = new TodoAngular2AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

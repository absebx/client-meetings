import { ClientMeetingPage } from './app.po';

describe('client-meeting App', function() {
  let page: ClientMeetingPage;

  beforeEach(() => {
    page = new ClientMeetingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { openPage } from './helpers.js';

describe('Brewhouse Coffee website', () => {

  it('home page has the Brewhouse title', async () => {
    await openPage('/');
    await expect(browser).toHaveTitle(expect.stringContaining('NOT-Brewhouse')); // error
  });

  it('home page has a header (CSS tag)', async () => {
    await openPage('/');
    await expect($('header')).toBeDisplayed();
  });

  it('home page shows the logo text (CSS class)', async () => {
    await openPage('/');
    await expect($('.logo')).toHaveText('Brewhouse Coffee');
  });

  it('home page menu has 4 links (CSS descendant)', async () => {
    await openPage('/');
    await expect($$('header a')).toBeElementsArrayOfSize(4);
  });

  it('home page heading is correct (XPath contains)', async () => {
    await openPage('/');
    const heading = await $('//h1[contains(text(), "Fresh coffee")]');
    await expect(heading).toBeDisplayed();
  });

  it('services page shows a heading (CSS tag)', async () => {
    await openPage('/services/');
    await expect(browser).toHaveUrl(expect.stringContaining('/services'));
    await expect($('h1')).toHaveText('Our services');
  });

  it('services page describes the offering (XPath child path)', async () => {
    await openPage('/services/');
    await expect($('//main/p')).toHaveText(expect.stringContaining('subscriptions'));
  });

  it('about page shows a heading (XPath normalize-space)', async () => {
    await openPage('/about/');
    await expect(browser).toHaveUrl(expect.stringContaining('/about'));
    await expect($('//h1[normalize-space()="About us"]')).toBeDisplayed();
  });

  it('careers page opens and has a careers link (CSS attribute)', async () => {
    await openPage('/careers/');
    await expect(browser).toHaveUrl(expect.stringContaining('/careers'));
    await expect($('a[href="/careers/"]')).toBeDisplayed();
  });

  it('home page links to careers (partial link text)', async () => {
    await openPage('/');
    const links = await $$('a*=Careers');
    expect(links.length).toBeGreaterThan(0);
  });

  it('user opens Services from the menu (link text)', async () => {
    await openPage('/');
    await $('=Services').click();
    await expect(browser).toHaveUrl(expect.stringContaining('/services'));
  });

});
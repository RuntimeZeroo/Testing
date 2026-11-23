import { openPage } from './helpers.js';

describe('EPAM website', () => {

  it('home page has the EPAM title', async () => {
    await openPage('/');
    await expect(browser).toHaveTitle(expect.stringContaining('EPAM'));
  });

  it('home page has a header (CSS tag)', async () => {
    await openPage('/');
    await expect($('header')).toBeDisplayed();
  });

  it('services page shows a heading (CSS tag)', async () => {
    await openPage('/services');
    await expect(browser).toHaveUrl(expect.stringContaining('/services'));
    await expect($('h1')).toBeDisplayed();
  });

  it('about page shows a heading (XPath)', async () => {
    await openPage('/about');
    await expect(browser).toHaveUrl(expect.stringContaining('/about'));
    await expect($('//h1')).toBeDisplayed();
  });

  it('careers page opens (XPath)', async () => {
    await openPage('/careers');
    await expect(browser).toHaveUrl(expect.stringContaining('/careers'));
    await expect($('//body')).toBeDisplayed();
    const links = await $$('//a[contains(@href, "/careers")]');
    expect(links.length).toBeGreaterThan(0);
  });

  it('home page links to careers (partial link text)', async () => {
    await openPage('/');
    const links = await $$('a*=Careers');
    expect(links.length).toBeGreaterThan(0);
  });

});
export async function openPage(path = '/') {
    await browser.url(path);

    // wait until the Cloudflare "Just a moment..." page is gone
    await browser.waitUntil(
        async () => !(await browser.getTitle()).includes('Just a moment'),
        { timeout: 30000, interval: 500, timeoutMsg: 'Cloudflare challenge did not clear' }
    );

    // dismiss the cookie banner if it appears
    const accept = await $('#onetrust-accept-btn-handler');
    try {
        await accept.waitForDisplayed({ timeout: 5000 });
        await accept.click();
    } catch (e) { /* no banner, continue */ }
}
export async function openPage(path = '/') {
    await browser.url(path);
    await $('body').waitForDisplayed();
}
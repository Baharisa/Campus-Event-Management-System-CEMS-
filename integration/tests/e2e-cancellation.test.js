// integration/tests/e2e-cancellation.test.js
const puppeteer = require('puppeteer');

describe('End-to-End Cancellation Tests', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
    });

    afterAll(async () => {
        await browser.close();
    });

    it('should cancel a reservation', async () => {
        await page.goto('http://localhost:3000/login'); // Adjust the URL as necessary

        await page.type('#email', 'testuser@example.com');
        await page.type('#password', 'password123');
        await page.click('#login-button');

        await page.waitForNavigation();
        await page.goto('http://localhost:3000/my-reservations'); // Adjust as necessary

        await page.click('.cancel-button'); // Adjust selector as per your application
        await page.waitForSelector('.confirmation-message'); // Wait for confirmation message

        const message = await page.$eval('.confirmation-message', el => el.textContent);
        expect(message).toContain('Reservation cancelled successfully');
    });
});
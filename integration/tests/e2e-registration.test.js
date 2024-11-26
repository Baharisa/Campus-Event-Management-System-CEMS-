 
// integration/tests/e2e-registration.test.js
const puppeteer = require('puppeteer');

describe('End-to-End Registration Tests', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
    });

    afterAll(async () => {
        await browser.close();
    });

    it('should register a new user', async () => {
        await page.goto('http://localhost:3000/register'); // Adjust the URL as necessary

        await page.type('#username', 'testuser');
        await page.type('#email', 'testuser@example.com');
        await page.type('#password', 'password123');
        await page.click('#register-button');

        // Check for success message or redirection
        await page.waitForSelector('.success-message'); // Adjust selector as per your application
        const message = await page.$eval('.success-message', el => el.textContent);
        expect(message).toContain('Registration successful');
    });
});
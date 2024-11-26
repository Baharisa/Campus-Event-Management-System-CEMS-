// backend/tests/notification.test.js

const { sendEmail } = require('../services/notificationService');

describe('Notification Service', () => {
    it('should send an email', async () => {
        const response = await sendEmail('test@example.com', 'Test Subject', 'Test Email Body');
        expect(response).toHaveProperty('accepted');
    });
});
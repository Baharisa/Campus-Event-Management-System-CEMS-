 -- database/seed.sql

USE cems;

-- Insert sample users
INSERT INTO users (username, email, password) VALUES
('testuser', 'testuser@example.com', 'hashedpassword123'),
('admin', 'admin@example.com', 'hashedpassword456');

-- Insert sample events
INSERT INTO events (title, date, description) VALUES
('On-campus Concert', '2024-03-12', 'A concert featuring local bands.'),
('Dorm Decor Crafts', '2024-03-20', 'Join us for a fun craft session.');

-- Insert sample reservations
INSERT INTO reservations (user_id, event_id) VALUES
(1, 1),  -- User 1 reserves Event 1
(1, 2);  -- User 1 reserves Event 2

-- Insert sample feedback
INSERT INTO feedback (user_id, event_id, comment) VALUES
(1, 1, 'Great event! Would love to see more like this.'),
(2, 1, 'Had a fantastic time, thank you!');

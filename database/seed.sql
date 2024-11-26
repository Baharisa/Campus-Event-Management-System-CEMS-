-- backend/database/seed.sql

INSERT INTO "Users" (username, password, email, role) VALUES
('admin', 'hashed_password', 'admin@example.com', 'admin'),
('user1', 'hashed_password', 'user1@example.com', 'user');

INSERT INTO "Events" (title, description, date, location) VALUES
('Sample Event', 'This is a sample event.', NOW() + INTERVAL '1 day', 'Sample Location');
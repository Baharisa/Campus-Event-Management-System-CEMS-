CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    description TEXT
);

CREATE TABLE registrations (
    id SERIAL PRIMARY KEY,
    event_id INT REFERENCES events(id),
    user_name VARCHAR(255),
    user_email VARCHAR(255)
);

CREATE TABLE feedback (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    rating INT,
    feedback TEXT
);

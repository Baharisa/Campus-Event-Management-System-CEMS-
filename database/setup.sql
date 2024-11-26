-- backend/database/setup.sql

\i ./migrations/create-users.sql
\i ./migrations/create-events.sql
\i ./migrations/create-reservations.sql
\i ./migrations/create-feedback.sql
\i ./seed.sql
-- backend/database/migrations/create-reservations.sql

CREATE TABLE IF NOT EXISTS "Reservations" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "userId" UUID REFERENCES "Users"("id") ON DELETE CASCADE,
    "eventId" UUID REFERENCES "Events"("id") ON DELETE CASCADE,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
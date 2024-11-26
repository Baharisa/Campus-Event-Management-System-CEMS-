-- backend/database/migrations/create-feedback.sql

CREATE TABLE IF NOT EXISTS "Feedback" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "userId" UUID REFERENCES "Users"("id") ON DELETE CASCADE,
    "eventId" UUID REFERENCES "Events"("id") ON DELETE CASCADE,
    "feedbackText" TEXT NOT NULL,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
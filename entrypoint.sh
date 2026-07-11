#!/bin/sh
set -e

echo "waiting for PostgreSQL..."

until npx prisma migrate deploy; do
    echo "Database not ready yet. Retrying in 3 seconds..."
    sleep 3
done

echo "Database ready. Starting application..."

exec npm start
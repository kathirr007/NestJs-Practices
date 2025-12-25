-- Create app database and user
CREATE USER nestapp WITH PASSWORD 'nestapp123';
CREATE DATABASE nestapp_db OWNER nestapp;
GRANT ALL PRIVILEGES ON DATABASE nestapp_db TO nestapp;

-- Allow connections
\c nestapp_db
GRANT ALL ON SCHEMA public TO nestapp;
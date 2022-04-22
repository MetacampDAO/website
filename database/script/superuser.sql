
-- Create new database with admin rights
CREATE DATABASE web ENCODING 'UTF8';
CREATE USER web_user WITH ENCRYPTED PASSWORD 'root';
GRANT ALL PRIVILEGES ON DATABASE web TO web_user;

-- ALTER ROLE root_user SUPERUSER;


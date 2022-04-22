
-- CREATE FUNCTION trigger_update_timestamptz()
CREATE OR REPLACE FUNCTION trigger_update_timestamptz()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;


-- CREATE TRIGGER FOR trigger_update_timestamptz()
CREATE TRIGGER update_timestamptz
BEFORE UPDATE ON photo
FOR EACH ROW
EXECUTE PROCEDURE trigger_update_timestamptz();


-- CREATE TRIGGER FOR trigger_update_timestamptz() BASED ON 
SELECT
    'CREATE TRIGGER '
    || tab_name
    || ' BEFORE UPDATE ON ALL DATABASE FOR EACH ROW EXECUTE PROCEDURE trigger_update_timestamptz();' AS trigger_creation_query
FROM (
    SELECT
        quote_ident(table_schema) || '.' || quote_ident(table_name) as tab_name
    FROM
        information_schema.tables
    WHERE
        table_schema NOT IN ('pg_catalog', 'information_schema')
        AND table_schema NOT LIKE 'pg_toast%'
) tablist;


-- CREATE FUNCTION FOR delete_old_rows()
CREATE OR REPLACE FUNCTION delete_old_rows() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
  DELETE FROM hacker_login WHERE updated_at < NOW() - INTERVAL '7 days';
  RETURN NEW;
END;
$$;

-- CREATE TRIGGER FOR delete_old_rows()
CREATE OR REPLACE TRIGGER trigger_delete_old_rows
    AFTER INSERT OR UPDATE ON hacker_login
    EXECUTE PROCEDURE delete_old_rows();
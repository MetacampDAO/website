
-- Picture ID and storage link
DROP TABLE IF EXISTS picture CASCADE;
CREATE TABLE picture (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  link TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW() 
);
INSERT INTO picture (link) VALUES ('LINK for user picture');
INSERT INTO picture (link) VALUES ('LINK for activity picture');

-- User / Hacker accounts
DROP TABLE IF EXISTS hacker CASCADE;
CREATE TABLE hacker (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  nickname TEXT NOT NULL,
  details TEXT NOT NULL,
  email TEXT NOT NULL,
  sol_address TEXT NOT NULL,
  picture_id BIGINT,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  CONSTRAINT fk_picture FOREIGN KEY(picture_id) REFERENCES picture(id)
);
INSERT INTO hacker (nickname, details, email, sol_address, picture_id) VALUES ('NICKNAME Testkjl', 'Test Intro', 'email', 'SOL_ADDRESS', (SELECT id FROM picture LIMIT 1));

-- User / Hacker login and token logs
DROP TABLE IF EXISTS hacker_login;
CREATE TABLE hacker_login (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  token uuid DEFAULT gen_random_uuid (),
  hacker_id BIGINT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  CONSTRAINT fk_hacker_login FOREIGN KEY(hacker_id) REFERENCES hacker(id)
);
INSERT INTO hacker_login (hacker_id) VALUES ((SELECT id FROM hacker LIMIT 1));

-- Activity List
DROP TABLE IF EXISTS activity CASCADE;
CREATE TABLE activity (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL,
  place TEXT NOT NULL,
  start_datetime TIMESTAMPTZ NOT NULL,
  end_datetime TIMESTAMPTZ NOT NULL,
  hacker_id BIGINT NOT NULL,
  picture_id BIGINT NOT NULL,
  sol_address TEXT,
  details TEXT,
  country TEXT,
  category TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  CONSTRAINT fk_hacker FOREIGN KEY(hacker_id) REFERENCES hacker(id),
  CONSTRAINT fk_picture FOREIGN KEY(picture_id) REFERENCES picture(id)
);
INSERT INTO activity (title, place, start_datetime, end_datetime, hacker_id, picture_id, details) VALUES ('activity title', 'Nueremberg', '2020-05-13 18:05:23.801845-03', '2020-05-13 18:05:23.801845-03', 1, 2, 'Test Intro details');

-- Participation List
DROP TABLE IF EXISTS participant;
CREATE TABLE participant (
  hacker_id BIGINT NOT NULL,
  activity_id BIGINT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  PRIMARY KEY (hacker_id, activity_id),
  CONSTRAINT fk_hacker FOREIGN KEY(hacker_id) REFERENCES hacker(id),
  CONSTRAINT fk_activity FOREIGN KEY(activity_id) REFERENCES activity(id)
);
DROP TABLE IF EXISTS comment CASCADE;

-- Activity Comments List
CREATE TABLE comment (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  hacker_id BIGINT NOT NULL,
  activity_id BIGINT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  comment VARCHAR(255), 
  CONSTRAINT fk_hacker FOREIGN KEY(hacker_id) REFERENCES hacker(id),
  CONSTRAINT fk_activity FOREIGN KEY(activity_id) REFERENCES activity(id)
);

-- Activity Comment's Rating List
DROP TABLE IF EXISTS comment_rating;
CREATE TABLE comment_rating (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  comment_id BIGINT NOT NULL,
  hacker_id BIGINT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  rating INT,
  CONSTRAINT fk_hacker FOREIGN KEY(hacker_id) REFERENCES hacker(id),
  CONSTRAINT fk_comment FOREIGN KEY(comment_id) REFERENCES comment(id)
);

-- Activity's Rating List
DROP TABLE IF EXISTS activity_rating;
CREATE TABLE activity_rating (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  activity_id BIGINT REFERENCES activity (id),
  hacker_id BIGINT REFERENCES hacker (id),
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  rating INT,
  CONSTRAINT fk_hacker FOREIGN KEY(hacker_id) REFERENCES hacker(id),
  CONSTRAINT fk_activity FOREIGN KEY(activity_id) REFERENCES activity(id)
);


-- UPDATE ROW
UPDATE picture SET link = 'same';


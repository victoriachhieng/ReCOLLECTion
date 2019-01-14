CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "profiles" (
    "id" SERIAL PRIMARY KEY,
    "image_url" character varying(5000),
    "name" varying(350),
    "title" character varying(350),
    "date_of_encounter" date,
    "location" character varying(500),
    "relation" character varying(1000),
    "misc" character varying(2000),
    "person_id" integer REFERENCES person(id),
    "status_id" integer REFERENCES status(id) DEFAULT 2
);

CREATE TABLE "status" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (100)
);
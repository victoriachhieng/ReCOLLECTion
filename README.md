## ReCOLLECTion 1.0
ReCOLLECTion allows you to recollect information from individuals you have met briefly, remember their names, build your network, grow meaningful relationships, have a solid foundation, and less awkward conversations. This will build your confidence tremendously because you are given access to conversations you may have not remembered in the past. You are less likely to approach an individual who you’ve encountered due to the lack of memory of who this person may be, am I correct? Once logged in, Users will have access to create Profiles of whomever you’d like. Users will be able to copy and paste the URL of an image, but how you get the image is up to your discretion. There will be sections that you’d fill out to get started. When satisfied with results, Users can edit, add to favorites, dislike or delete the profile. 

## Built With:

* React
* Redux-Saga
* Node
* Express
* Axios
* Postico
* PostgreSQL
* HTML
* Javascript
* CSS
* Sweetalert
* Moment
* Material UI

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and table

Create a new database called `prime_app` and create tables:

```SQL
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
```

If you would like to name your database something else, you will need to change `prime_app` to the name of your new database name in `server/modules/pool.js`

## Documentation
https://docs.google.com/document/d/1Zmv_Es6JFfCM9S-_NB-5qrOM2QxcMOrl91eAAu6e1E4/edit#heading=h.x5497hm2698b

### Completed Features

* Add/Edit/Delete Profiles
* Favorite icon adds Profile to their Favorites, if heart icon is selected, heart icon turns red
* Deselect Profile from Favorites by deselecting heart icon, Profile will be removed from Favorites 
* Dislike Profile by selecting the thumbs down icon, icon turns to dark blue

### Next Steps
* Implement FullContact API to profiles
* Notification reminder to follow up with individuals 

## Development Setup Instructions

* Run `npm install`
* Create a `.env` file at the root of the project and paste this line into the file:
    ```
    SERVER_SESSION_SECRET=superDuperSecret
    ```
    While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
* Start postgres if not running already by using `brew services start postgresql`
* Run `npm run server`
* Run `npm run client`
* Navigate to `localhost:3000`

## Author
Victoria Chhieng

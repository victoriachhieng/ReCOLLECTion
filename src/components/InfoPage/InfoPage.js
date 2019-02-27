import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const InfoPage = () => (
  <div>
    <center>
      <h1>
        Thank you, to everyone here. Special shout out to Dane, Dev, Ally, and the Vega
        Cohort!
      </h1>
      </center>
      <p>
        Technologies used:
        <br />
        <br />
        • React
        <br />
        <br />
        • Redux-Saga
        <br />
        <br />
        • PostgreSQL
        <br />
        <br />
        • Node Js
        <br />
        <br />
        • Express
        <br />
        <br />
        • Material UI
        <br />
      <br />
        • Moment.js
      </p>
      <br />
      <br />
      <center>
        <br />
        <br />
        • I'd like to have a search option included to navigate through
        profiles quickly.
        <br />
        <br />
        • Implement the FullContact API to pull up a profile's LinkedIn/social media
      accounts by entering a valid work email.
        <br />
      <br />
        • Mobile friendly
      </center>
  </div>
);

export default InfoPage;

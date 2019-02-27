import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const divContainer = {
  margin: "0 auto",
  textAlign: "center",
  border: "2px black",
  width: "750px",
  height: "565px",
  backgroundColor: "#2F3F73",
  borderRadius: "10px",
  color: "#a9a9a9",
  fontFamily: "Arial, Helvetica, sans-serif"
};

const AboutPage = () => (
  <div>
    <br/>
    <br/>
    <div style={divContainer}>
    <br/>
    <br/>
    <h1>ReCOLLECTion</h1>
    <br/>
      <p>
        Allows you to recollect information from individuals you
        have met briefly, remember their names, build your network, grow
        meaningful relationships, have a solid foundation, and less awkward
        conversations. This will build your confidence tremendously because you
        are given access to conversations you may have not remembered in the
        past. You are less likely to approach an individual who you’ve
        encountered due to the lack of memory of who this person may be, am I
        correct? Once logged in, Users will have access to create Profiles of
        whomever you’d like. Users will be able to copy and paste the URL of an
        image, but how you get the image is up to your discretion. There will be
        sections that you’d fill out to get started. When satisfied with
        results, Users can edit, add to favorites, dislike or delete the
        profile.
      </p>
    </div>
  </div>
);

export default AboutPage;

import React, { Component } from "react";

class LandingView extends Component {

  render() {
    return (
      <div>
        <center>
          <h1>All your Profiles in one place</h1>
          <button style={btnStyle}>Registration</button>
          <button>Login</button>
          <footer>&copy;ReCOLLECTion</footer>
        </center>
      </div>
    );
  }
}

const btnStyle = {
  margin: '10px',
};


export default LandingView;

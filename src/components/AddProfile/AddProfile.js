import React, {Component} from 'react';
import PersonAdd from "@material-ui/icons/PersonAdd";

class AddProfile extends Component {
    render() {
        return (
        <React.Fragment >
        <br/>
        <br />
        <br />
        <br />
        <br />
        <div style={divContainer}>
            <h1>Add Profile</h1>
            <PersonAdd/>
            <br />
            <br />
            <center><input type="text" placeholder="Image URL" />
            <br/>
            <input type="text" placeholder="Name" />
            <br />
            <input type="date" placeholder="Date of Encounter" />
            <br />
            <input type="text" placeholder="Location" />
            <br />
            <input type="text" placeholder="Relation" />
            <br />
            <input type="text" placeholder="Misc Comments" />
            <br />
            <button style={btnStyle}>Back</button><button style={btnStyle}>Submit</button>
            </center>
          </div>
          </React.Fragment >
          );
    }
}

const btnStyle = {
    margin: '10px'
}

const divContainer = {
  margin: "0 auto",
  textAlign: "center",
  border: "1px solid black",
  width: "300px",
  height: '400px',

};

export default AddProfile;
import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'; 
import PersonAdd from "@material-ui/icons/PersonAdd";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Grid from '@material-ui/core/Grid';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#ffffff" },
  }
});

class AddProfile extends Component {
  state = {
    newProfile: {
      image: "",
      name: "",
      title: "",
      date: "",
      location: "",
      relation: "",
      misc: ""
    },
  };

  handleChangeFor = propertyName => event => {
    console.log("in handleChangeFor");
    this.setState({
      newProfile: {
        ...this.state.newProfile,
        [propertyName]: event.target.value
      }
    });
  };

  handleSave = event => {
    event.preventDefault();
    console.log("in handleSave", this.state.newProfile);
    this.props.dispatch({
      type: "ADD_PROFILE",
      payload: this.state.newProfile
    });
    this.setState({
      newProfile: ""
    });
    this.props.history.push("/home");
  };

  handleBackBtn = () => {
    this.props.history.push("/home");
    alert("You will be directed back to the Profiles Page!");
  };

  render() {
    return <div>
        <br />
        <br />
        <MuiThemeProvider theme={theme}>
          <Grid container justify="center" alignItems="center">
            <Card style={divContainer}>
              <br />
              <h1 style={h1} className="typewriter">
                Add Profile
              </h1>
              <br />
              <center>
                <PersonAdd style={addIcon} />
              </center>
              <form>
              <TextField style={inputStyle} color="primary" label="Image URL" placeholder="Image URL" margin="normal" variant="outlined" value={this.state.image} onChange={this.handleChangeFor("image")} type="text" />
              <TextField style={inputStyle} label="Name" placeholder="Name" margin="normal" variant="outlined" value={this.state.name} onChange={this.handleChangeFor("name")} type="text" />
              <TextField style={inputStyle} label="Title" placeholder="Example: CEO" margin="normal" variant="outlined" value={this.state.title} onChange={this.handleChangeFor("title")} type="text" />
              <br />
              <TextField style={inputStyle} id="outlined-bare" margin="normal" variant="outlined" type="date" onChange={this.handleChangeFor("date")} />
              <TextField style={inputStyle} label="Location of Encounter" placeholder="Location of Encounter" margin="normal" variant="outlined" value={this.state.location} onChange={this.handleChangeFor("location")} type="text" />
              <TextField style={inputStyle} label="Relation" placeholder="Example: colleague" margin="normal" variant="outlined" value={this.state.relation} onChange={this.handleChangeFor("relation")} type="text" />
              <br />
              <p style={textStyle}>Select Date of Encounter</p>
              <TextField style={inputStyle} label="Misc Comments" placeholder="Misc Comments" margin="normal" variant="outlined" value={this.state.misc} onChange={this.handleChangeFor("misc")} type="text" multiline rows="4" />
              <br />
              <br/>
              </form>
              <Button onClick={this.handleBackBtn} variant="contained" size="medium">
                <ArrowBack />
                Back
              </Button>
              <Button style={btnStyle} onClick={this.handleSave} variant="contained" size="medium">
                <SaveIcon />
                Save
              </Button>
            </Card>
          </Grid>
        </MuiThemeProvider>
      </div>;
  }
}

const textStyle = {
  fontSize: "12px",
  marginLeft: "73px",
  textAlign: "left",
  color: "#ffffff"
};

const btnStyle = {
  margin: "10px",
  gridTemplateColumns: 'auto auto auto',
  gridGap: '10px',
}

const addIcon = {
  width: "65",
  height: "65",
  color: 'white'
};

const inputStyle = {
  margin: "10px",
  gridTemplateColumns: 'auto auto auto',
  gridGap: '10px',
  backgroundColor: '#7A86AD',
  borderRadius: '6px'
}

const divContainer = {
  margin: "0 auto",
  textAlign: "center",
  border: "2px black",
  width: "750px",
  height: "565px",
  backgroundColor: "#2F3F73",
  borderRadius: '10px',
};

const h1 = {
  color: 'white'
}

const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(withRouter(AddProfile));
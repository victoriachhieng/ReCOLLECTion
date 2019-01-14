import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'; 
import PersonAdd from "@material-ui/icons/PersonAdd";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Grid from '@material-ui/core/Grid';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: { main: '#7A86AD' },
        secondary: { main: '#11cb5f' },
    },
});

class AddProfile extends Component {
  state = {
    newProfile: {
      image: "",
      name: "",
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
    console.log("in handleSubmit", this.state.newProfile);
    this.props.dispatch({
      type: "ADD_PROFILE",
      payload: this.state.newProfile
    });
    this.setState({
      newProfile: ""
    });
    this.props.history.push("/home");
    alert(`You have successfully submitted a new Profile, let's check it out!`);
  };

  handleBackBtn = () => {
    this.props.history.push("/home");
    alert("You will be directed back to the Profiles Page!");
  };

  render() {
    return <React.Fragment>
            <br />
            <br />
            <MuiThemeProvider theme={theme}>
                <Grid container justify="center" alignItems="center">
                    <Card style={divContainer}>
                        <br />
                        <h1 style={h1} className="typewriter">
                        Add Profile</h1>
                        <br />
                        <center>
                            <PersonAdd style={editIcon} />
                        </center>
                        <br />
                        <TextField style={inputStyle} color="primary" label="Image URL" placeholder="Image URL" margin="normal" variant="outlined" value={this.state.image} onChange={this.handleChangeFor("image")} type="text" />
                        <TextField style={inputStyle} label="Name" placeholder="Name" margin="normal" variant="outlined" value={this.state.name} onChange={this.handleChangeFor("name")} type="text" />
                        <TextField style={inputStyle} variant="outlined" label="Date of Encounter" type="date" value={this.state.date} InputProps={{ startAdornment: <InputAdornment onChange={this.handleChangeFor("date")} position="start" /> }} />
                        <br />
                        <TextField style={inputStyle} label="Location of Encounter" placeholder="Location of Encounter" margin="normal" variant="outlined" value={this.state.location} onChange={this.handleChangeFor("location")} type="text" />
                        <TextField style={inputStyle} label="Relation" placeholder="Example: colleague" margin="normal" variant="outlined" value={this.state.relation} onChange={this.handleChangeFor("relation")} type="text" />
                        <br />
                        <TextField style={inputStyle} label="Misc Comments" placeholder="Misc Comments" margin="normal" variant="outlined" value={this.state.misc} onChange={this.handleChangeFor("misc")} type="text" multiline rows="4" />
                        <br />
                        <br />
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
        </React.Fragment>;
  }
}

const btnStyle = {
    margin: '0 auto',
    margin: "10px",
    gridTemplateColumns: 'auto auto auto',
    gridGap: '10px',
}

const editIcon = {
    width: "65",
    height: "65",
    color: 'white'
};

const inputStyle = {
    margin: "10px",
    gridTemplateColumns: 'auto auto auto',
    gridGap: '10px'
}

const divContainer = {
    margin: "0 auto",
    textAlign: "center",
    border: "2px black",
    width: "950px",
    height: "550px",
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
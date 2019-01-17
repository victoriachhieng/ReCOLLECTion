import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import BorderColor from "@material-ui/icons/BorderColor";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Grid from '@material-ui/core/Grid';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createMuiTheme } from "@material-ui/core/styles";
import moment from "moment";
import swal from "sweetalert";


const theme = createMuiTheme({
    palette: {
        primary: { main: '#ffffff' },
    },
});

class EditProfiles extends Component {

    state = {
        image: '',
        name: '',
        title: '',
        date: '',
        location: '',
        relation: '',
        misc: '',
        id: ''
    }

    componentWillMount = () => {
        this.props.dispatch({ type: "FETCH_PROFILE" })
        this.loadProfile();
    }

    loadProfile = () => {
        const id = this.props.editProfile;
        let profile = {};
        this.props.profiles.forEach(element => {
            if (element.id === id) {
                profile = element;
            }
        });
        console.log('in loadProfile', profile);
        this.setState({
            image: profile.image_url,
            name: profile.name,
            title: profile.title,
            date: moment(profile.date_of_encounter).format('LL'),
            location: profile.location,
            relation: profile.relation,
            misc: profile.misc,
            id: id
        });
    }

    handleInputChange = propertyName => event => {
    console.log('in handleInputChange', this.state, 'why');
    this.setState({
            [propertyName]: event.target.value
    })
    console.log(this.state);
}

    handleSave = () => {
        console.log('handleSave', this.state.editProfile);
        this.props.dispatch({ type: "EDIT_PROFILE", payload: this.state});
        swal("Profile has been updated!", "Click the back button to view the changes!", "success");
    }


handleBackBtn = () => {
    this.props.history.push('/home')
    swal("You have clicked the Back Button!", "Directing back to the Home Page!");
}

render() {
        return <div>
        <br />
        <br />
        <MuiThemeProvider theme={theme}>
          <Grid container justify="center" alignItems="center">
            <Card style={divContainer}>
              <br />
              <h1 style={h1} className="typewriter">
                Edit Profile
              </h1>
              <br />
              <center>
                <BorderColor style={editIcon} />
              </center>
              <br />
              <TextField style={inputStyle} color="primary" label="Image URL" placeholder="Image URL" margin="normal" variant="outlined" value={this.state.image} onChange={this.handleInputChange("image")} type="text" />
                        <TextField style={inputStyle} label="Name" placeholder="Name" margin="normal" variant="outlined" value={this.state.name} onChange={this.handleInputChange("name")} type="text" />
                        <TextField style={inputStyle} label="Title" placeholder="Example: CEO" margin="normal" variant="outlined" value={this.state.title} onChange={this.handleInputChange("title")} type="text" />
              <br />
                        <TextField style={inputStyle} id="outlined-bare" margin="normal" variant="outlined" type="text" value={this.state.date} onChange={this.handleInputChange("date")} />
                        <TextField style={inputStyle} label="Location of Encounter" placeholder="Location of Encounter" margin="normal" variant="outlined" value={this.state.location} onChange={this.handleInputChange("location")} type="text" />
                        <TextField style={inputStyle} label="Relation" placeholder="Example: colleague" margin="normal" variant="outlined" value={this.state.relation} onChange={this.handleInputChange("relation")} type="text" />
              <br />
              <p style={textStyle}>Change Date of Encounter</p>
                        <TextField style={inputStyle} label="Misc Comments" placeholder="Misc Comments" margin="normal" variant="outlined" value={this.state.misc} onChange={this.handleInputChange("misc")} type="text" multiline rows="4" />
              <br />
              <Button onClick={this.handleBackBtn} variant="contained" size="medium">
                <ArrowBack />
                Back
              </Button>
                <Button onClick={this.handleSave} style={btnStyle} variant="contained" size="medium">
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

const editIcon = {
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

const mapStateToProps = reduxStore => ({
  editProfile: reduxStore.editReducer,
  profiles: reduxStore.profileReducer,
});

export default connect(mapStateToProps)(withRouter(EditProfiles));
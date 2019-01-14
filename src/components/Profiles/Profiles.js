import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import './Profiles.css';
import BorderColor from "@material-ui/icons/BorderColor";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import ThumbDownAltSharp from "@material-ui/icons/ThumbDownAltSharp";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import GroupAdd from "@material-ui/icons/GroupAdd";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import moment from 'moment';
import Portrait from "@material-ui/icons/Portrait";

class Profiles extends Component {

    state = {
        positiveStatus: {
            type: 1 // will set status to positive
        },
        negativeStatus: {
            type: 3 // will set status to negative
        }
    }

// get profiles and status on page load
  componentDidMount = () => {
    this.props.dispatch({ type: "FETCH_PROFILE", payload: this.props.user.id });
    this.props.dispatch({ type: 'FETCH_STATUS' });
  };

//  // get current profiles from db
//   fetchProfiles = () => {
//     this.props.dispatch({ type: "FETCH_PROFILE", payload: this.props.user.id });
//   };

    handleDelete = (profile) => {
        this.props.dispatch({ type: "DELETE_PROFILE", payload: profile.id });
    };

  handleEdit = () => {
      this.props.history.push("/edit profiles");
  };

  handleFavorite = (profile) => {
      this.props.dispatch({ type: "POSITIVE_STATUS", payload: { status: this.state.positiveStatus, id: profile.id }})
  };

  handleDislike = (profile) => {
    console.log("in handleDislike");
    console.log('state', this.state.negativeStatus);
      this.props.dispatch({ type: "NEGATIVE_STATUS", payload: { status: this.state.negativeStatus, id: profile.id }
      });
  };

  handleAddProfileBtn = () => {
    this.props.history.push("/add profiles");
  };

  render() {
    // map of profiles
    let profileDisplay = this.props.newProfile.map(profile => {
      return <Card key={profile.id} style={styleCard}>
          <CardActionArea>
              <CardMedia component="img" alt="Profile created" image={profile.image_url} height="250" title="Profile created" />
            <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                <h4>{profile.name}</h4>
                <p className="title">{profile.title}</p>
              </Typography>
              <Typography component="p">
                      <b>Date of Encounter</b> - {moment(profile.date_of_encounter).format('LL')}
                <br />
                <br />
              </Typography>
              <Typography component="p">
                <b>Location</b> - {profile.location}
                <br />
                <br />
                <b>Relation</b> - {profile.relation}
                <br />
                <br />
                <b>Misc Comments</b> - {profile.misc}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Tooltip title="Favorite">
              <IconButton aria-label="Favorite">
                <FavoriteBorder onClick={() => this.handleFavorite(profile)} style={btnStyle} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Dislike">
              <IconButton aria-label="Dislike">
                <ThumbDownAltSharp onClick={() => this.handleDislike(profile)} style={btnStyle} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Edit">
              <IconButton aria-label="Edit">
                <BorderColor onClick={this.handleEdit} style={btnStyle} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton aria-label="Delete">
                <DeleteIcon onClick={() => this.handleDelete(profile)} style={btnStyle} />
              </IconButton>
            </Tooltip>
          </CardActions>
        </Card>;
        
    });
    return <div>
        <center>
            <h1 className="typewriter">Welcome, {this.props.user.username} !</h1>
          <br />
          <h1>Profiles</h1>
            <Portrait style={profileIcon}/>
            <br/>
            <Button variant="outlined" size="medium" style={addBtn} onClick={this.handleAddProfileBtn}>
            Add New Profile
            <GroupAdd />
          </Button>
        </center>
        <Grid container item xs={12} >
            <Grid item xs={12}>
            <ul>{profileDisplay}</ul>
          </Grid>
        </Grid>
      </div>;
  }
}
const btnStyle = {
  color: "black",
};


const profileIcon = {
    width: '65',
    height: '65'
}

const addBtn = {
  backgroundColor: "#2F3F73",
    color: '#a9a9a9'
};



 const styleCard = {
    overflow: "hidden",
    display: "inline-block",
    width: "20vw",
    transitionDuration: "0.3s",
    height: "45vw",
    fontFamily: "Arial, Helvetica, sans - serif",
    margin: "20px",
    textAlign: "center",
    border: "1px solid #2F3F73",
 };

const mapStateToProps = (reduxStore) => ({
    user: reduxStore.user,
    newProfile: reduxStore.profileReducer
});

export default connect(mapStateToProps)(withRouter(Profiles));
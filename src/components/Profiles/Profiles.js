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
import Button from "@material-ui/core/Button";


class Profiles extends Component {
  componentDidMount = () => {
    this.fetchProfiles();
  };

  fetchProfiles = () => {
    this.props.dispatch({ type: "FETCH_PROFILE" });
  };

  handleDelete = () => {
    console.log("in handleDelete");
  };

  handleEdit = () => {
      this.props.history.push("/edit profiles");
  };

  handleFavorite = () => {
    console.log("in handleLike");
  };

  handleDislike = () => {
    console.log("in handleDislike");
  };

  handleAddProfileBtn = () => {
    this.props.history.push("/add profiles");
    alert("Adding a New Profile!");
  };

  render() {
    // map of profiles
    let profileDisplay = this.props.newProfile.map(profile => {
      return <div key={profile.id} className="card">
          <Tooltip title="Favorite" placement="top">
            <IconButton aria-label="Favorite">
              <FavoriteBorder onClick={this.handleFavorite} style={btnStyle} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Dislike" placement="top">
            <IconButton aria-label="Dislike">
              <ThumbDownAltSharp onClick={this.handleDislike} style={btnStyle} />
            </IconButton>
          </Tooltip>
          <br />
          <img src={profile.image_url} style={styleImage} alt="Profile created" />
          <h2>{profile.name}</h2>
          <p className="title">CEO & Founder, Example</p>
          <p>Date of Encounter: {profile.date_of_encounter}</p>
          <p>Location: {profile.location}</p>
          <p>Relation: {profile.relation}</p>
          <p>Misc Comments: {profile.misc}</p>
          <Tooltip title="Edit">
            <IconButton aria-label="Edit">
              <BorderColor onClick={this.handleEdit} style={btnStyle} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton aria-label="Delete">
              <DeleteIcon onClick={this.handleDelete} style={btnStyle} />
            </IconButton>
          </Tooltip>
        </div>;
    });
    return <div className="typewriter">
        <center>
          <h1>Welcome, {this.props.user.username} !</h1>
          <br/>
          <h2>Profiles</h2>
            <Button variant="contained" color="default" onClick={this.handleAddProfileBtn} >
                Add New Profile
            <GroupAdd/>
            </Button>
        </center>
        {profileDisplay}
      </div>;
  }
}
const btnStyle = {
    color: 'black',
    justifyContent: 'space-between 10px'
};

const styleImage = {
    width: '100%'
}

const mapStateToProps = (reduxStore) => ({
    user: reduxStore.user,
    newProfile: reduxStore.profileReducer
});

export default connect(mapStateToProps)(withRouter(Profiles));
import React, {Component} from 'react';
import { connect } from "react-redux"; 
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Favorite from "@material-ui/icons/Favorite";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";


class Favorites extends Component {

 // get profile on page load
  componentDidMount = () => {
    this.fetchProfiles();
  };

 // get profile from db
  fetchProfiles = () => {
    this.props.dispatch({ type: "FETCH_PROFILE" });
  };

  // get status on page load
  componentDidMount() {
    this.getStatus();
  }

  // get current status from db
  getStatus = () => {
    this.props.dispatch({ type: 'FETCH_STATUS' });
  }

    render(){
      let profileDisplay = this.props.newProfile.map(profile => {
        return <Card key={profile.id} style={styleCard}>
            <CardActionArea>
              <CardMedia component="img" alt="Profile created" height="240" image={profile.image_url} title="Profile created" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <h4>{profile.name}</h4>
                  <p className="title">CEO & Founder, Example</p>
                </Typography>
                <Typography component="p">
                  <b>Date of Encounter</b> - {profile.date_of_encounter}
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
              <Grid container justify="center" alignItems="center">
                <Tooltip title="Deselect Favorite">
                  <IconButton aria-label="Deselect Favorite">
                    <FavoriteBorder onClick={this.handleFavorite} style={btnStyle} />
                  </IconButton>
                </Tooltip>
              </Grid>
            </CardActions>
          </Card>;
      })
      return <div className="typewriter">
            <center>
              <h1>Favorites</h1>
              <br/>
              <Favorite style={btnStyle}/>
            </center>
          <Grid container item xs={12}>
            <ul>
              {profileDisplay}
            </ul>
          </Grid>
          </div>;
    }
}

const btnStyle = {
  color: "red",
};

const styleCard = {
  overflow: 'hidden',
  display: 'inline-block',
  width: '20vw',
  transitionDuration: '0.3s',
  height: '45vw',
  fontFamily: 'Arial, Helvetica, sans - serif',
  margin: '25px',
  textAlign: 'center'
}

const mapStateToProps = (reduxStore) => ({
  newProfile: reduxStore.profileReducer
});

export default connect(mapStateToProps)(Favorites);
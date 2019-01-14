import React, {Component} from 'react';
import { connect } from "react-redux"; 
import { withRouter } from "react-router-dom";
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
import moment from "moment";

class Favorites extends Component {

  state = {
    neutralStatus: {
      type: 2 // will set status to neutral
    }
  }

    componentDidMount = () => {
      this.props.dispatch({ type: "FETCH_PROFILE", payload: this.props.user.id });
      this.props.dispatch({ type: 'FETCH_STATUS', payload: this.props.user.id });
    };

  handleFavorites = (profile) => {
    console.log("in handleFavorites");
    console.log('state', this.state.neutralStatus);
    this.props.dispatch({ type: "NEUTRAL_STATUS", payload: { status: this.state.neutralStatus, id: profile.id }
    });
  };


  render() {
    let profileFavoritesDisplay = this.props.updateStatus.map(profile => {
      if (profile.status_id === 1 ) 
      return <Card key={profile.id} style={styleCard}>
            <CardActionArea>
              <CardMedia component="img" alt="Profile created" height="240" image={profile.image_url} title="Profile created" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <h4>{profile.name}</h4>
                  <p className="title">CEO & Founder, Example</p>
                </Typography>
                <Typography component="p">
                  <b>
                    Date of Encounter
                  </b> - {moment(profile.date_of_encounter).format("LL")}
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
                    <Favorite onClick={() => this.handleFavorites(profile)} style={btnStyle} />
                  </IconButton>
                </Tooltip>
              </Grid>
            </CardActions>
          </Card>;
    });
    return <div>
        <center>
          <h1 className="typewriter">Favorites</h1>
          <br />
          <Favorite style={btnStyle} />
        </center>
        <Grid container item xs={12}>
          <ul>{profileFavoritesDisplay}</ul>
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


const mapStateToProps = reduxStore => ({
  // favorites: reduxStore.favoritesReducer,
  updateStatus: reduxStore.statusReducer,
  user: reduxStore.user
});

export default connect(mapStateToProps)(withRouter(Favorites));
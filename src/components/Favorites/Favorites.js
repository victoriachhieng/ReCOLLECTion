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
import swal from "sweetalert";

const btnStyle = {
  color: "red"
};

const styleGrid = {
  minWidth: "300px",
  margin: "auto"
};

const styleBtnCard = {
  height: "10vh"
};

const styleContent = {
  height: "40vh",
  overflowY: "scroll"
};

const styleCard = {
  minWidth: "300px",
  fontFamily: "Arial, Helvetica, sans - serif",
  margin: "20px",
  textAlign: "center",
  border: "1px solid #2F3F73"
};

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
    this.props.dispatch({ type: "NEUTRAL_STATUS", payload: { status: this.state.neutralStatus, id: profile.id }});
    swal("Profile removed from Favorites!");
  };


  render() {
    let profileFavoritesDisplay = this.props.updateStatus.map(profile => {
      if (profile.status_id === 1 ) 
        return <Grid key={profile.id} style={styleGrid} item xs={3}>
            <Card style={styleCard}>
              <CardActionArea>
                <CardMedia component="img" alt="Profile created" height="250" image={profile.image_url} title="Profile created" />
              <CardContent style={styleContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    <h4>{profile.name}</h4>
                    <p className="title">CEO & Founder, Example</p>
                  </Typography>
                  <Typography component="p">
                    <b>Date of Encounter</b> - {moment(profile.date_of_encounter).format("LL")}
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
              <CardActions style={styleBtnCard}>
                <Grid container justify="center" alignItems="center">
                  <Tooltip title="Deselect Favorite">
                    <IconButton aria-label="Deselect Favorite">
                      <Favorite onClick={() => this.handleFavorites(profile)} style={btnStyle} />
                    </IconButton>
                  </Tooltip>
                </Grid>
              </CardActions>
            </Card>
          </Grid>;
    });
    return <div>
        <center>
          <h1 className="typewriter">Favorites</h1>
          <br />
          <Favorite style={btnStyle} />
        </center>
        <Grid container item xs={12}>
          {profileFavoritesDisplay}
        </Grid>
      </div>;
  }
}

const mapStateToProps = reduxStore => ({
  updateStatus: reduxStore.statusReducer,
  user: reduxStore.user
});

export default connect(mapStateToProps)(withRouter(Favorites));
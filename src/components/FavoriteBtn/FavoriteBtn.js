import React, { Component } from 'react';
import { connect } from 'react-redux';
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

class FavoriteBtn extends Component {

    // get profiles and status on page load
    componentDidMount = () => {
        this.props.dispatch({ type: "FETCH_PROFILE", payload: this.props.user.id });
        this.props.dispatch({ type: 'FETCH_STATUS', payload: this.props.user.id });
    };


    state = {
        changeColor: this.props.profileItem.status_id,
    }


    handleFavorite = (boolean) => {
        this.props.dispatch({
            type: "POSITIVE_STATUS", payload: { status: this.props.status.positiveStatus, id: this.props.profileItem.id }
        });
        this.setState({
            changeColor: boolean,
        })
    }

    render() {
        let button;
        if (this.state.changeColor == 1 ) {
            button = <Tooltip title="Favorite">
                <IconButton aria-label="Favorite">
                  <Favorite onClick={() => this.handleFavorite(2)} style={btnStyle} />
                </IconButton>
              </Tooltip>;
        } else {
            button = <Tooltip title="Favorite">
                <IconButton aria-label="Favorite">
                <FavoriteBorder onClick={() => this.handleFavorite(1)} style={btnStyle} />
                </IconButton>
              </Tooltip>;
        }
        return (
            <div>
                {button}
            </div>
        )
    }
}

const btnStyle = {
    color: "red"
};


const mapStateToProps = (reduxStore) => ({
    profile: reduxStore.profileReducer,
    user: reduxStore.user
});

export default connect(mapStateToProps)(FavoriteBtn);
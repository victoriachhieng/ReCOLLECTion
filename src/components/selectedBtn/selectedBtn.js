import React, {Component} from 'react';
import {connect} from 'react-redux';
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Favorite from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";


class SelectedBtn extends Component {

render() {
        let button;
        if (this.props.newStatus === 2 ) {
            button = <Tooltip title="Deselect Favorite">
                <IconButton aria-label="Deselect Favorite">
                    <FavoriteBorder style={btnStyle} />
                </IconButton>
            </Tooltip>;
        } else {
            button = <Tooltip title="Deselect Favorite">
                <IconButton aria-label="Deselect Favorite">
                    <Favorite style={btnStyle} />
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
    color: "red",
};


const mapStateToProps = (reduxStore) => ({
    newStatus: reduxStore.statusReducer
});

export default connect(mapStateToProps)(selectedBtn);
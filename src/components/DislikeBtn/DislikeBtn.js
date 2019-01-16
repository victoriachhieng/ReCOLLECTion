import React, {Component} from 'react';
import {connect} from 'react-redux';
import ThumbDownOutlined from "@material-ui/icons/ThumbDownOutlined";
import ThumbDownAltSharp from "@material-ui/icons/ThumbDownAltSharp";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";


class DislikeBtn extends Component {


    state = {
        changeColor: this.props.profileItem.status_id,
    }


    handleClick = (boolean) => {

        this.props.dispatch({
            type: "NEGATIVE_STATUS", payload: { status: this.props.status.negativeStatus, id: this.props.profileItem.id }
        });
        this.setState ({
            changeColor: boolean,
        })
    }


render() {
        let button;
        if (this.state.changeColor !== 3 ) {
            button = <Tooltip title="Dislike">
                <IconButton aria-label="Dislike">
                    <ThumbDownOutlined onClick={() => this.handleClick(3)} style={btnStyle} />
                </IconButton>
              </Tooltip>;
        } else {
            button = <Tooltip title="Dislike">
                <IconButton aria-label="Dislike">
                    <ThumbDownAltSharp onClick={() =>this.handleClick(2)} style={btnStyle} />
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
  color: "#505F90"
};


const mapStateToProps = (reduxStore) => ({
    profile: reduxStore.profileReducer
});

export default connect(mapStateToProps)(DislikeBtn);
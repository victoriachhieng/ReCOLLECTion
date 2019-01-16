import React, { Component } from "react";
import { connect } from "react-redux";
import EditProfiles from "./EditProfiles";

class EditProfileList extends Component {
  componentDidMount = () => {
    this.props.dispatch({ type: "FETCH_PROFILE" });
  };

  render() {
    return (
      <div>
        {this.props.reduxStore.profileReducer.map(edit => {
          return <EditProfiles key={edit.id} value={edit.id} edit={edit} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = reduxStore => ({
  reduxStore
});

export default connect(mapStateToProps)(EditProfileList);

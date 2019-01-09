import React, {Component} from 'react';
import PersonAdd from "@material-ui/icons/PersonAdd";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';

class AddProfile extends Component {

    state = {
        newProfile: {
        image: '',
        name: '',
        date: '',
        location: '',
        relation: '',
        misc: ''
        }
    }

    handleChangeFor = propertyName => event => {
        console.log('in handleChangeFor');
        this.setState({
            newProfile: {
                ...this.state.newProfile,
                [propertyName]: event.target.value
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('in handleSubmit', this.state.newProfile);
        this.props.dispatch({ type: "ADD_PROFILE", payload: this.state.newProfile });
        this.setState({
            newProfile: ''
        })
        this.props.history.push('/home');
        alert(`You have successfully submitted a new Profile, let's check it out!`)
    };

    handleBackBtn = () => {
        this.props.history.push('/home')
        alert('You will be directed back to the Profiles Page!')
    }

    render() {
        return <React.Fragment>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div style={divContainer}>
              <h1>Add Profile</h1>
              <PersonAdd />
              <br />
              <br />
              <center>
                <input value={this.state.image} onChange={this.handleChangeFor("image")} type="text" placeholder="Image URL" />
                <br />
                <input value={this.state.name} onChange={this.handleChangeFor("name")} type="text" placeholder="Name" />
                <br />
                <br/>
                <input value={this.state.date} onChange={this.handleChangeFor("date")} type="date" placeholder="Date of Encounter" />
                <br />
                <input value={this.state.location} onChange={this.handleChangeFor("location")} type="text" placeholder="Location" />
                <br />
                <input value={this.state.relation} onChange={this.handleChangeFor("relation")} type="text" placeholder="Relation" />
                <br />
                <input value={this.state.misc} onChange={this.handleChangeFor("misc")} type="text" placeholder="Misc Comments" />
                <br />
                <button onClick={this.handleBackBtn} style={btnStyle}>
                  Back
                </button>
                <button onClick={this.handleSubmit} style={btnStyle}>
                  Submit
                </button>
              </center>
            </div>
          </React.Fragment>;
    }
}

const btnStyle = {
    margin: '10px'
}

const divContainer = {
  margin: "0 auto",
  textAlign: "center",
  border: "1px solid black",
  width: "300px",
  height: '400px',

};

const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(withRouter(AddProfile));
import React, {Component} from 'react';
import './Profiles.css';
import BorderColor from "@material-ui/icons/BorderColor";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import ThumbDownAltSharp from "@material-ui/icons/ThumbDownAltSharp";
import Delete from "@material-ui/icons/Delete";

class Profiles extends Component {
    render() {
        let multpleCards = <div className="card">
            <FavoriteBorder style={btnStyle}/><ThumbDownAltSharp style={btnStyle}/>
            <img src="https://avatars2.githubusercontent.com/u/40585011?s=460&v=4" alt="Profile created" style={styleImage} />
            <h1>Victoria</h1>
            <p className="title">CEO & Founder, Example</p>
            <p>Date of Encounter: 10/11/2018</p>
            <p>Location: Location of Encounter will go here!</p>
            <p>Relation: Coworker, classmate, stranger danger!</p>
            <p>
                Misc comments: We have a lot in common, would love to get
                to know Victoria more!
            </p>
            <BorderColor style={btnStyle}/><Delete style={btnStyle}/>
            </div>
        return <div>
            <center>
                <h1>Profiles</h1>
            <button>Add New Profile</button>
            </center>
            {multpleCards}
            {multpleCards}
            {multpleCards}
            {multpleCards}
            {multpleCards}
            {multpleCards}
            {multpleCards}
            {multpleCards}
          </div>;
    }
}
const btnStyle = {
    margin: '30px'
}

const styleImage = {
    width: '100%'
}

export default Profiles;
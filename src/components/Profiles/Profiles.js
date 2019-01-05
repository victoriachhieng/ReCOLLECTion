import React, {Component} from 'react';
import './Profiles.css';

class Profiles extends Component {
    render() {
        let multpleCards = <div className="card">
            <button style={btnStyle}>Favorites Icon ❤</button><button style={btnStyle}>Thumbs Down Icon</button>
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
            <button style={btnStyle}>Edit Icon</button><button style={btnStyle}>Delete Icon</button>
            </div>
        return <div>
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
    margin: '20px'
}

const styleImage = {
    width: '100%'
}

export default Profiles;
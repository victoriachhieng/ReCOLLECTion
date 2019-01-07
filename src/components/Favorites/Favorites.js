import React, {Component} from 'react';
import Favorite from "@material-ui/icons/Favorite";


class Favorites extends Component {
    render(){
        let multipleCards = <div className="card">
                <img src="https://avatars2.githubusercontent.com/u/40585011?s=460&v=4" alt="Profile created" style={styleImage} />
                <h1>Victoria</h1>
                <p className="title">CEO & Founder, Example</p>
                <p>Date of Encounter: 10/11/2018</p>
                <p>Location: Location of Encounter will go here!</p>
                <p>Relation: Coworker, classmate, stranger danger!</p>
                <p>
                    Misc comments: We have a lot in common, would love to
                    get to know Victoria more!
              </p>
            <Favorite/>
            <br/>
                    Favorites Icon To Deselect
            </div>
        return <div>
            <center>
              <h1>Favorites</h1><Favorite/>
            </center>
            {multipleCards}
            {multipleCards}
            {multipleCards}
            {multipleCards}
            {multipleCards}
            {multipleCards}
            {multipleCards}
            {multipleCards}
          </div>;
    }
}

const btnStyle = {
  margin: "20px"
};

const styleImage = {
  width: "100%"
};

export default Favorites;
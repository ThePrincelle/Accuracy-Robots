import React, { Component } from 'react';
import Situation from "./SituationComponent"

class Welcome extends Component {

    state = {
        name: ""
    };

    nameOnChanged = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    validateName = (props) => {
        var newRobot = {
            name: this.state.name
        };

        props.target.value = "";
    }

     render() {
         return (
            <div>
                <h1>Accuracy Robots</h1>
                <h2>Votre robot</h2>
                <input type="text" placeholder="Entrez un nom de robot" value={this.state.name} onChange={(e) => this.nameOnChanged(e)}/>
                <button type="submit" onClick={this.validateName}>Valider</button> 
            </div>
         )
     }
 }

 export default Welcome;

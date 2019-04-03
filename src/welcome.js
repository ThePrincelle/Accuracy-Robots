import React, { Component } from 'react';
import './welcome.css';

class Welcome extends Component{

    constructor(props) {
      super(props)
    
      this.state = {
         name: ""
      }
    }

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
            <div className="welcome">
                <h1 className="welcomeTitle">Accuracy Robots</h1>
                <input className="inputRobot" type="text" placeholder="Entrez un nom de robot" value={this.state.name} onChange={(e) => this.nameOnChanged(e)}/>
                <button className="btnValidate" type="submit" onClick={this.validateName}>Valider</button> 
            </div>
         )
     }
 }

 export default Welcome;

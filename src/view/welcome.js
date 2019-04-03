import React, { Component } from 'react';
import './welcome.css';

class Welcome extends Component{

    constructor(props) {
      super(props)
    
      this.state = {
         name: "",
         round: 0
      }
    }

    nameOnChanged = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    validateName = (props) => {
        var newRobot = {
            name: this.state.name,
            round: this.state.round
        };

        props.target.value = "";
    }

    changeRound = (e) => {
        this.setState({
            round: e.target.value
        });
        console.log(this.state.round);
    }

     render() {
         return (
            <div className="welcome">
                <h1 className="welcomeTitle">Accuracy Robots</h1>
                <input className="inputRobot" type="text" placeholder="Entrez un nom de robot" value={this.state.name} onChange={(e) => this.nameOnChanged(e)}/>
                <button className="btnRobot" type="submit" onClick={this.validateName}>Valider</button> <br/>
                Nombre de tour <input className="nbRound" type="number" min="5" max="10" step="1" defaultValue="5" onChange={(e) => this.changeRound(e)}/>

            </div>
         )
     }
 }

export default Welcome;

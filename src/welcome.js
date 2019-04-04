import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import './css/welcome.css';

class Welcome extends Component{

    constructor(props) {
      super(props)
    
      this.state = {
         name: "",
         round: 5
      }
    }

    nameOnChanged = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    validateName = (props) => {
        // eslint-disable-next-line
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

    playGame = (e) => {
        document.cookie = 'name=' + this.state.name +'; path=/'
        document.cookie = 'tours=' + this.state.round + '; path=/'

        document.location.href = '/game'
    }

     render() {
         return (
            <div className="welcome">
                <h1 className="welcomeTitle">Accuracy Robots</h1>
                
                <Form.Group controlId="form">
                    <Form.Label>Nom du robot</Form.Label>
                    <Form.Control type="text" placeholder="The Robot" value={this.state.name} onChange={(e) => this.nameOnChanged(e)} />
                </Form.Group>
                <Form.Group controlId="formBasicChecbox">
                    <Form.Label>Nombre de tour(s)</Form.Label>
                    <Form.Control type="number" min="5" max="10" step="1" defaultValue={this.state.round} onChange={(e) => this.changeRound(e)}/>
                </Form.Group>
                <Button variant="secondary" size="sm" block className="playButton" onClick={this.playGame}>
                    Jouer
                </Button>
            
            </div>
         )
     }
 }

export default Welcome;

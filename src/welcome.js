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
        props.target.value = "";
    }

    changeRound = (e) => {
        let tours = e.target.value;
        if(tours < 5){
            tours = 5
        } else if (tours > 10){
            tours = 10
        }
        this.setState({
            round: tours
        });
        console.log("Nb de tours : " + tours);
    }

    playGame = (e) => {
        document.cookie = 'name=' + this.state.name +'; path=/'
        document.cookie = 'tours=' + this.state.round + '; path=/'

        document.location.href = '/game'
    }

     render() {
         return (
            <>
            <div className="welcome">
                <h1 className="welcomeTitle">Accuracy Robots</h1>

                <p style={{paddingBottom:"2em", textAlign: "justify-center"}}>
                    L’ histoire se déroule en l’an 5347 après la colonisation de Mars. Celle-ci est devenue une planète où les robots et les humains vivent en parfaite harmonie.
                    <br/><br/>
                    Vous jouez l'un de ces robots. 
                    <br/>Pour rester en vie, faites attention à garder un niveau d'intégrité raisonable, afin d'éviter l'auto-destruction.
                    Vous serez confrontés à des situations, chacune d'entre-elles mettant en pratique les lois d'Asimov, que vous devrez respecter.
                </p>
                
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
            <Button size="sm" variant="secondary" style={{ marginLeft: '20px', marginBottom: '20px', position: 'absolute', left: '0', bottom: '0' }} href="/about">Crédits</Button>
            </>
         )
     }
 }

export default Welcome;

import React, { Component } from 'react';
import JsonData from './data/tableaux.json'
import Question from './components/QuestionComponent';
import Answer from './components/AnswerComponent';
import Law from './components/law';
import { Card, ProgressBar, Modal, Button} from 'react-bootstrap';
import imgRobot from './images/robot.png';


export default class Game extends Component {
    state = {
        nbTours: 10,
        tourAct: 1,
        questions: [],
        currentQuestion: -1,

        robotIntegrity: 100,
        progColor: "success",
        robotName: "RobotName"
    }

    /**
     * Met a jour la question actuelle
     */
    updateCurrentQuestion = () => {
        this.removePeople(this.state.questions, this.state.currentQuestion);

        let rand = Math.floor(Math.random() * this.state.questions.length);
        this.setState(prevState => ({currentQuestion: rand}));
    }

    removePeople(array, index) {
        if(index > -1){
            array.splice(index,1);
        }
        console.log("Nouvelle liste des questions: ", this.state.questions)
    }

    /**
     * Passe au prochain tour
     */
    nextTour = (valInteg) => {
        if(this.state.tourAct < this.state.nbTours)
        {
            this.setState(prevState => ({
                tourAct: prevState.tourAct+1
            }));
        }
        else
        {
            this.endGame();
        }
        this.updateIntegrity(valInteg);
        this.updateCurrentQuestion()
    }

    /**
     * Fin de la partie avec victoire
     */
    endGame = () => {
        return this.finPartieModal("Vous avez gagné ! Félicitations !");
    }

    /**
     * Fin de la partie défaite
     */
    gameOver = () => {
        return this.finPartieModal("Vous avez perdu. Votre robot s'est auto-détruit !");
    }

    finPartieModal = (text) => {
        return (
            <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>Fin de la partie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {text}
            </Modal.Body>
            <Modal.Footer>
                <Button style={{ margin: "0px", marginRight: "5px"}} size="sm" block variant="danger" href="/">Quitter</Button>
                <Button style={{ margin: "0px" }} size="sm" block variant="info" href="/game">Rejouer</Button>
            </Modal.Footer>
            </Modal.Dialog>
        );
    }

    /**
     * Met a jour l'intégrité du robot
     */
    updateIntegrity = (val) => {
        let newVal
        if (this.state.robotIntegrity + val >= 100) {
            newVal = 100;
        } else if (this.state.robotIntegrity + val <= 0) {
            newVal = 0;
        } else {
            newVal = this.state.robotIntegrity + val;
        }
        this.setState({
            robotIntegrity: newVal
        });
        this.updateColorIntegrity(newVal);
    }

    updateColorIntegrity = (val) => {
        let color;
        if (val <= 20){
            color = "danger";
        } else if (val <= 50) {
            color = "warning";
        } else {
            color = "success";
        }
        this.setState({
            progColor: color
        })
    }

    readCookie = (name) => {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    /**
     * Récupere toutes les questiosn dans le fichier JSON et les transforme en composants Questions / Answer
     */
    componentDidMount()
    {
        let nbtours;
        if(this.readCookie("tours")>10){
            nbtours = 10;
        }
        else{
            nbtours = this.readCookie("tours");
        }
        this.setState({
            nbTours: nbtours,
            robotName: this.readCookie("name") || "The Robot"
        });
        
        JsonData.map((a) => {
            //réponses pour une question
            let reponses = a.reponses 
            //tableau de composants Answer
            let repComp = [];
            reponses.map((r) => {
                repComp.push(<Answer callbackToParent={this.nextTour} text={r.rep} value={r.value}/>)
                return r;
            })
            let question = <Question text={a.question} answers={repComp}/>
            this.setState((prevState) => ({
                questions: [...prevState.questions, question]
            }))

            return question;
        })

        this.updateCurrentQuestion()
    }

    render()
    {
        let main;
        console.log(this.state.questions)
        console.log("tour : " +this.state.tourAct + "/" + this.state.nbTours + " integrite : " + this.state.robotIntegrity)

        // eslint-disable-next-line eqeqeq
        if(this.state.tourAct == this.state.nbTours && this.state.robotIntegrity > 0) 
        {
            main = this.endGame()
        }
        else if(this.state.robotIntegrity <= 0)
        {
            main = this.gameOver()
        }
        else
        {
            console.log(this.state.questions[this.state.currentQuestion])
            console.log(this.state.currentQuestion)
            main = this.state.questions[this.state.currentQuestion];
        }

        console.log(main)

        console.log("curr question : " + this.state.currentQuestion)

        return (
            <>
            <img src={imgRobot} alt="Robot" style={{position: "absolute", top: "0", marginLeft: "30em"}}/>
            <Card style={{ width: '20rem', marginBottom: "1em" }}>
                <Card.Header as="h4">
                    Tour : {this.state.tourAct} / {this.state.nbTours}
                </Card.Header>
                <Card.Body className="robot-infos">
                    <h5 style={{ marginBottom: '1em' }}>{this.state.robotName}</h5>
                    
                    Intégrité du robot :
                    <ProgressBar animated 
                        now={this.state.robotIntegrity} 
                        variant={this.state.progColor} 
                        label={<b>{this.state.robotIntegrity}%</b>} 
                        style={{ marginTop: '1em', height: "2em" }} 
                    />
                </Card.Body>
            </Card>
            <Law/> 

            <div>{main}</div>
            <Button size="sm" style={{ marginLeft: '120px', marginBottom: '20px', position: 'absolute', left: '0', bottom: '0' }} href="/about">Crédits</Button>
            </>
        )
    }
}

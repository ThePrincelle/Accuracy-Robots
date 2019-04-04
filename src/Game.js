import React, { Component } from 'react';
import JsonData from './questions2.json'
import Question from './QuestionComponent';
import Answer from './AnswerComponent';

export default class Game extends Component {
    state = {
        nbTours: 10,
        tourAct: 0,
        questions: [],
        currentQuestion: [],

        robotIntegrity: 100,
        robotName: ""
    }

    setCurrentQuestion = () => {
        this.setState({currentQuestion: this.state.questions[2]})
    }


    /**
     * Met a jour l'intégrité du robot
     */
    updateIntegrity = (val) => {
        this.setState(prevState => ({
            robotIntegrity: prevState.robotIntegrity+val
        }))
    }

    componentDidMount()
    {
        JsonData.map((a) => {
            //réponses pour une question
            let reponses = a.reponses 
            //tableau de composants Answer
            let repComp = [];
            reponses.map((r) => {
                repComp.push(<Answer callbackToParent={this.updateIntegrity} text={r.rep} value={r.value}/>)
            })
            let question = <Question text={a.question} answers={repComp}/>
            this.setState((prevState) => ({
                questions: [...prevState.questions, question]
            }))
        })
        this.setCurrentQuestion()
    }

    render()
    {
        console.log(this.state.questions)
        return (
            <>
            <div className="robot-infos">
                <p>Nom : {this.state.robotName}</p>
                <p>Intégrité du robot : {this.state.robotIntegrity}</p>
            </div>
            {this.state.questions[2]}
            </>
        )
    }
}

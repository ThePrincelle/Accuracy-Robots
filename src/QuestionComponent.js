import React, { Component } from 'react';

export default class Question extends Component {
    state = {
        title:this.props.title || "Question",
        text: this.props.text || "Enonce",
        answers: this.props.answers
    }

    render()
    {
        //verifie que les reponses ont bien étées définies
        let ans;
        if(this.state.answers)
        {
            ans = this.state.answers.map(ans => {
                return ans
            })
        }

        return (
            <>
            <div className="question">
                <h2>{this.state.title}</h2>
                <p>{this.state.text}</p>
            </div>

            <div className="answers">
                {ans}
            </div>
            </>
        )
    }
}

import React, { Component } from 'react';
import Question from './QuestionComponent';

export default class Robot extends Component {
    state = {
       name:"",
       integrity: 100
    }

    updateIntegrity = (val) => {
        this.setState((prevState) => ({
            integrity: prevState.integrity+val
        }))
    }

    render()
    {
        return (
            <>
                <div className="robot">
                    <p>{this.state.name}</p>
                </div>
            </>
        )
    }
}

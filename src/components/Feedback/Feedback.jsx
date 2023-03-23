import { Component } from "react";

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    handleClickIncrement = () => {
        this.setState((prevState) => ({
            good: prevState.good + 1,
            neutral: prevState.neutral + 1,
            bad: prevState.bad + 1,
        }))
    }

    // handleClickDecrement = () => {
    //     this.setState((prevState) => ({
    //         good: prevState.good - 1,
    //         neutral: prevState.neutral - 1,
    //         bad: prevState.bad - 1,
    //     }))
    // }


    render() {
        return (
            <div>
                <h1>Please leave feedback</h1>
                <button onClick={this.handleClickIncrement}>Good</button>
                <button onClick={this.handleClickIncrement}>Neutral</button>
                <button onClick={this.handleClickIncrement}>Bad</button>
                <h2>Statistics</h2>
                <p>Good: {this.state.good}</p>
                <p>Neutral: {this.state.neutral}</p>
                <p>Bad: {this.state.bad}</p>
                <p>Total: </p>
                <p>Positive feedback: </p>
            </div>
        )
    }
}

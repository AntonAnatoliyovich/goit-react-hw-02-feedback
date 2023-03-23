import { Component } from "react";
import css from '../Feedback/Feedback.module.css';

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    handleClickIncrementGood = () => {
        this.setState((prevState) => ({
            good: prevState.good + 1,
        }))
    }

    handleClickIncrementNeutral = () => {
        this.setState((prevState) => ({
            neutral: prevState.neutral + 1,
        }))
    }

    handleClickIncrementBad = () => {
        this.setState((prevState) => ({
            bad: prevState.bad + 1,
        }))
    }

    render() {
        return (
            <div className={css.feedback__card}>
                <h1 className={css.feedback__title}>Please leave feedback</h1>
                <button onClick={this.handleClickIncrementGood}>Good</button>
                <button onClick={this.handleClickIncrementNeutral}>Neutral</button>
                <button onClick={this.handleClickIncrementBad}>Bad</button>
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

export default Feedback

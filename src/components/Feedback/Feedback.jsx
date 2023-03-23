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
                <div className={css.feedback__cardButton}>
                    <button className={css.feedback__button} onClick={this.handleClickIncrementGood}>Good</button>
                    <button className={css.feedback__button} onClick={this.handleClickIncrementNeutral}>Neutral</button>
                    <button className={css.feedback__button} onClick={this.handleClickIncrementBad}>Bad</button>
                </div>
                <h2 className={css.feedback__title}>Statistics</h2>
                <div className={css.feedback__statistics}>
                    <p>Good: {this.state.good}</p>
                    <p>Neutral: {this.state.neutral}</p>
                    <p>Bad: {this.state.bad}</p>
                    <p>Total: </p>
                    <p>Positive feedback: </p>
                </div>
            </div>
        )
    }
}

export default Feedback

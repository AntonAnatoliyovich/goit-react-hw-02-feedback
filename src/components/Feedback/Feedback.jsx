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
                <div className={css.card__button}>
                    <button className={css.button} onClick={this.handleClickIncrementGood}>Good</button>
                    <button className={css.button} onClick={this.handleClickIncrementNeutral}>Neutral</button>
                    <button className={css.button} onClick={this.handleClickIncrementBad}>Bad</button>
                </div>
                <h2 className={css.feedback__title}>Statistics</h2>
                <div className={css.statistics}>
                    <p className={css.statistics__text}>Good: {this.state.good}</p>
                    <p className={css.statistics__text}>Neutral: {this.state.neutral}</p>
                    <p className={css.statistics__text}>Bad: {this.state.bad}</p>
                    <p className={css.statistics__text}>Total: </p>
                    <p className={css.statistics__text}>Positive feedback: </p>
                </div>
            </div>
        )
    }
}

export default Feedback

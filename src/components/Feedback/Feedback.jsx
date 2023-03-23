import { Component } from "react";
import css from '../Feedback/Feedback.module.css';
import { Section } from "./Section";


class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positiveFeedback: 0,
        isShowStatistics: false,
    }

    handleClickIncrementGood = () => {
        this.setState((prevState) => ({
            good: prevState.good + 1,
            isShowStatistics: true,
        }))
        this.countTotalFeedback()
        this.countPositiveFeedbackPercentage()
    }

    handleClickIncrementNeutral = () => {
        this.setState((prevState) => ({
            neutral: prevState.neutral + 1,
            isShowStatistics: true,
        }))
        this.countTotalFeedback()
        this.countPositiveFeedbackPercentage()
    }

    handleClickIncrementBad = () => {
        this.setState((prevState) => ({
            bad: prevState.bad + 1,
            isShowStatistics: true,
        }))
        this.countTotalFeedback()
        this.countPositiveFeedbackPercentage()
    }

    countTotalFeedback = () => {
        this.setState((prevState) => ({
            total: prevState.total = prevState.good + prevState.neutral + prevState.bad
        }))
    }

    countPositiveFeedbackPercentage = () => {
        this.setState((prevState) => ({
            positiveFeedback: prevState.positiveFeedback = ((prevState.good / prevState.total) * 100).toFixed(2)
        }))
    }

    render() {
        return (
            <div className={css.feedback__card}>
                <Section 
                    title='Please leave feedback' 
                    feedback={this} 
                    isShowStatistics={this.state.isShowStatistics} 
                />
                <Section 
                    title='Statistics' 
                    feedback={this} 
                    isShowBlock={false} 
                    isShowStatistics={this.state.isShowStatistics} 
                />
            </div>
        )
    }
}

export default Feedback

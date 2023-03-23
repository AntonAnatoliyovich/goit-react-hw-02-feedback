import css from '../Feedback/Feedback.module.css';
import { FeedbackOptions } from "./FeedbackOptions";
import { Statistics } from "./Statistics";

export const Section = ({title, feedback, isShowBlock=true, isShowStatistics}) => {
    return (
        <>
            <h1 className={css.feedback__title}>{title}</h1>
            {isShowBlock ? 
                <FeedbackOptions 
                    options={{ good: 'Good', neutral: 'Neutral', bad: 'Bad' }} 
                    onLeaveFeedback={{ good: feedback.handleClickIncrementGood,  neutral: feedback.handleClickIncrementNeutral, bad: feedback.handleClickIncrementBad}} 
                />
            :
                <Statistics 
                    good={feedback.state.good} 
                    neutral={feedback.state.neutral} 
                    bad={feedback.state.bad} 
                    total={feedback.state.total} 
                    positiveFeedback={feedback.state.positiveFeedback}
                    isShowStatistics={isShowStatistics}
                />
            }
        </>
    )
}

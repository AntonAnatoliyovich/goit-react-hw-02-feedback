import css from '../Feedback/Feedback.module.css';
import { Notification } from './Notification';

export const Statistics = ({ good, neutral, bad, total, positiveFeedback, isShowStatistics }) => {
    return (
        <>
            {isShowStatistics ? 
                <div className={css.statistics}>
                    <p className={css.statistics__text}>Good: {good}</p>
                    <p className={css.statistics__text}>Neutral: {neutral}</p>
                    <p className={css.statistics__text}>Bad: {bad}</p>
                    <p className={css.statistics__text}>Total: {total}</p>
                    <p className={css.statistics__text}>Positive feedback: {positiveFeedback}%</p>
                </div>
            :
                <Notification message="There is no feedback" />
            }
        </>
    )
}

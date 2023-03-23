import css from '../Feedback/Feedback.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={css.card__button}>
            <button className={css.button} onClick={onLeaveFeedback.good}>{options.good}</button>
            <button className={css.button} onClick={onLeaveFeedback.neutral}>{options.neutral}</button>
            <button className={css.button} onClick={onLeaveFeedback.bad}>{options.bad}</button>
        </div>
    )
}

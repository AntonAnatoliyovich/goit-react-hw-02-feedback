import css from '../Feedback/Feedback.module.css';

export const Notification = ({ message }) => {
    return (
        <p className={css.statistics__text}>{message}</p>
    )
}

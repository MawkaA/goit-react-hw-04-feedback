import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onClick }) => {
    return (
        <ul className={css.list}>
             {options.map(option => (
            <li className={css.item} key={option}>
                <button onClick={onClick}
                        className={css.btn}
                        name={option}
                        type="button"> 
                {option}
                </button>
            </li>
            ))}
        </ul>
    )
}

FeedbackOptions.propTypes = {
options: PropTypes.arrayOf(PropTypes.string).isRequired,
onClick: PropTypes.func.isRequired,
}

export default FeedbackOptions;
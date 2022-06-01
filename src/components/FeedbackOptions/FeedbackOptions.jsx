import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

function FeedbackOptions({options, onLeaveFeedback}){
    return(
        <ul className={css.list}>
            {options.map(option=>
            <li className={css.item} key={option}>
                <button onClick={onLeaveFeedback}
                        className={css.btn}
                        name={option}
                        type="button"> 
                {option}
                </button>
            </li>
            )}
        </ul>
    )
}

FeedbackOptions.propTypes = {
options: PropTypes.arrayOf(PropTypes.string).isRequired,
onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;
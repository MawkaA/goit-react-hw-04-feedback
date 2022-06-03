import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
import {nanoid} from 'nanoid';

const FeedbackOptions = ({ options, handleCounter }) => {
    const buttons = options.map(option => (
        <li className={css.item} key={nanoid()}>
          <button
            type="button"
            className={css.btn}
            onClick={() => handleCounter(option)}
          >
            {option}
          </button>
        </li>
      ));
      return <ul className={css.list}>{buttons}</ul>;
}

FeedbackOptions.propTypes = {
options: PropTypes.arrayOf(PropTypes.string).isRequired,
handleCounter: PropTypes.func.isRequired,
}

export default FeedbackOptions;
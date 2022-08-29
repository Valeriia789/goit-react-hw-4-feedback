import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ feedbacks, onLeaveFeedback }) => {
  const options = Object.keys(feedbacks);

  return (
    <>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          name={option}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option.toUpperCase()}
        </Button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  feedbacks: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

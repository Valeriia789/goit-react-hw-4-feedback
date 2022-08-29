import PropTypes from 'prop-types';
import { StatisticInfo } from './Statistics.styled';

const Statistics = ({ feedbacks, good }) => {
  const countTotal = () => {
    return Object.values(feedbacks).reduce((previousValue, newFeedback) => {
      return previousValue + newFeedback;
    }, 0);
  };

  const countPositivePercentage = () => {
    const total = (good * 100) / countTotal();
    return Math.round(total) >= 0 ? Math.round(total) : 0;
  };

  return (
    <ul>
      {Object.keys(feedbacks).map((key, i) => (
        <StatisticInfo key={i}>
          <p>{key} :</p>
          <p>{feedbacks[key]}</p>
        </StatisticInfo>
      ))}

      <StatisticInfo>Total: {countTotal()} </StatisticInfo>
      <StatisticInfo>
        Positive feedback: {countPositivePercentage()} %
      </StatisticInfo>
    </ul>
  );
};

Statistics.propTypes = {
  feedbacks: PropTypes.object.isRequired,
  good: PropTypes.number.isRequired,
};

export default Statistics;

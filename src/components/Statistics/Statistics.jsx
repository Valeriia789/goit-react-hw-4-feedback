import PropTypes from 'prop-types';
import { StatisticInfo } from './Statistics.styled';

const Statistics = ({ options, countTotal, countPositivePercentage }) => {
  return (
    <ul>
      {Object.keys(options).map((key, i) => (
        <StatisticInfo key={i}>
          {key} : {options[key]}
        </StatisticInfo>
      ))}
      <StatisticInfo>Total : {countTotal()} </StatisticInfo>
      <StatisticInfo>
        Positive feedback : {countPositivePercentage()} %
      </StatisticInfo>
    </ul>
  );
};

Statistics.propTypes = {
  options: PropTypes.object.isRequired,
  countTotal: PropTypes.func.isRequired,
  countPositivePercentage: PropTypes.func.isRequired,
};

export default Statistics;

import PropTypes from 'prop-types';
import styles from "./Transaction.module.css";

const Transaction = ({ type, amount, currency, isEven }) => {
  return (
    <tr className={isEven ? styles.trEven : ""}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  isEven: PropTypes.bool,
};

export default Transaction;

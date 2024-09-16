import styles from "./TransactionHistory.module.css";
import Transaction from "../Transaction/Transaction";
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Type</th>
            <th className={styles.th}>Amount</th>
            <th className={styles.th}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map((transaction, index) => (
            <Transaction
              key={transaction.id}
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
              isEven={index % 2 === 0}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
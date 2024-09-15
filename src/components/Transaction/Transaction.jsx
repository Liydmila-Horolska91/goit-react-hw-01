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

export default Transaction;
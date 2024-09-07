import css from "./TransactionHistory.module.css";

function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead className={css.tableHead}>
        <tr>
          <th className={css.tableHeading}>Type</th>
          <th className={css.tableHeading}>Amount</th>
          <th className={css.tableHeading}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item =>
          <tr className={css.tableRow} key={item.id}>
            <td className={css.tableCell}>{item.type}</td>
            <td className={css.tableCell}>{item.amount}</td>
            <td className={css.tableCell}>{item.currency}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default TransactionHistory;
import { TransactionHistoryItems } from "../TransactionHistoryItems/TransactionHistoryItems";
import transaction_css from "./TransactionHistory.module.css";

export const TransactionHistory = ({ transactions }) => {
  return (
    <>
      <table className={transaction_css.table}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(({ id, type, amount, currency }) => (
            <tr key={id} className={transaction_css.table_tr}>
              <TransactionHistoryItems
                type={type}
                amount={amount}
                currency={currency}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

import { TransactionHistoryItems } from "../TransactionHistoryItems/TransactionHistoryItems";

export const TransactionHistory = ({ transactions }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(({ id, type, amount, currency }) => (
            <tr key={id}>
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

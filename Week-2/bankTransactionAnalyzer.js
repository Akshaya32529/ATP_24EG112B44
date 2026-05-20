/*
Bank Transaction Analyzer

This program summarizes a small bank statement using ES6 array methods:
filter(), map(), reduce(), find(), and findIndex().
*/

const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

// Get only the transactions where money was added to the account.
const creditTransactions = transactions.filter(
  transaction => transaction.type === "credit"
);
console.log("Credit Transactions:", creditTransactions);

// Extract the transaction amounts into a separate array.
const transactionAmounts = transactions.map(transaction => transaction.amount);
console.log("Transaction Amounts:", transactionAmounts);

// Calculate final balance by adding credits and subtracting debits.
const finalBalance = transactions.reduce((balance, transaction) => {
  return transaction.type === "credit"
    ? balance + transaction.amount
    : balance - transaction.amount;
}, 0);
console.log("Final Balance:", finalBalance);

// Find the first transaction where money was deducted.
const firstDebitTransaction = transactions.find(
  transaction => transaction.type === "debit"
);
console.log("First Debit Transaction:", firstDebitTransaction);


// Find the position of the transaction whose amount is 10000.
const highValueTransactionIndex = transactions.findIndex(
  transaction => transaction.amount === 10000
);
console.log("Index of Transaction Amount 10000:", highValueTransactionIndex);

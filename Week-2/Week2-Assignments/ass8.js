/*ASSIGNMENT 5: 
-------------
Bank Transaction Analyzer

You are building a bank statement summary.

Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


Tasks:
    1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000*/
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


//1
const a=transactions.filter(s=>s.type==="credit")
console.log(a)
//2
const b=transactions.map(s=>({
    amount:s.amount
}))
console.log(b)

//3
const c=transactions.reduce((acc,t)=>{return t.type==="credit"? acc+t.amount:acc-t.amount;},0);
console.log(c)


//4
const d=transactions.find(s=>s.type==="debit")
console.log(d)



//5
const e=transactions.findIndex(s=>s.amount===10000)
console.log(e)
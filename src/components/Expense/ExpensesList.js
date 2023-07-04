import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  let expenseContent;

  if (props.filterYear === "All") {
    expenseContent = props.fullarray.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  } else if (props.items.length > 0) {
    expenseContent = props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  } else if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">NO EXPENSE FOUND</h2>;
  }

  return <ul className="expenses-list">{expenseContent}</ul>;
};

export default ExpensesList;

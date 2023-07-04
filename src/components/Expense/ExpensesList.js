import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  let expenseContent;
  let addmore = (
    <h2 className="expenses-list__fallback">
      "Only single Expense here. Please add more..."
    </h2>
  );

  if (props.filterYear === "All") {
    expenseContent = props.fullArray.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  } else if (props.items.length > 1) {
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
  } else if (props.items.length === 1) {
    expenseContent = props.items.map((expense) => (
      <div>
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
        {addmore}
      </div>
    ));
  }

  return <ul className="expenses-list">{expenseContent}</ul>;
};

export default ExpensesList;

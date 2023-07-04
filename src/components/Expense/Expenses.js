import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import Expensefilter from "./Expensesfilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filterYear, setFilteredYear] = useState("All");
  const filterChangehandler = (selectYear) => {
    setFilteredYear(selectYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <Expensefilter
        // selected={filterYear}
        onChangeFilter={filterChangehandler}
      />
      {filterYear === "All" &&
        props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      {filterYear !== "All" &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      {filteredExpenses.length === 0 && <p>NO EXPENSE FOUND</p>}
    </Card>
  );
};

export default Expenses;

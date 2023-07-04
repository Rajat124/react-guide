import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import Expensefilter from "./Expensesfilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filterYear, setFilteredYear] = useState("2020");

  const filterChangehandler = (selectYear) => {
    setFilteredYear(selectYear);
  };

  return (
    <Card className="expenses">
      <Expensefilter
        selected={filterYear}
        onChangeFilter={filterChangehandler}
      />
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;

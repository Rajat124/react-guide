import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import Expensefilter from "./Expensesfilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

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
      <ExpensesList
        items={filteredExpenses}
        filterYear={filterYear}
        fullArray={props.items}
      />
    </Card>
  );
};

export default Expenses;

import "./Expenses.css";
import Card from "../UI/Card";
import Expensefilter from "./Expensesfilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterYear, setFilteredYear] = useState("All");
  const filterChangehandler = (selectYear) => {
    setFilteredYear(selectYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <Expensefilter onChangeFilter={filterChangehandler} />
        {filterYear === "All" && <ExpensesChart expenses={props.items} />}
        {filterYear !== "All" && <ExpensesChart expenses={filteredExpenses} />}
        <ExpensesList
          items={filteredExpenses}
          filterYear={filterYear}
          fullArray={props.items}
        />
      </Card>
    </div>
  );
};

export default Expenses;

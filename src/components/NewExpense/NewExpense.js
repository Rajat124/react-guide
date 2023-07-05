import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setsEditing] = useState(false);

  const saveExpenseDataHandler = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    // setsEditing(false);
  };

  const startEditingHandler = () => {
    setsEditing(true);
  };

  const stopEditingHandler = () => {
    setsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onC={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    setTitle("updated");
    console.log(title);
  };
  const updateAmount = () => {
    setAmount("100$");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails amount={amount} location={props.location} title={title} />
      <button onClick={clickHandler}>UpTitle</button>
      <button onClick={updateAmount}>UpAmount</button>
    </Card>
  );
};

export default ExpenseItem;

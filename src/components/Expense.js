import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";
import Category from "./Category";
import EditIcon from "../../images/edit.svg";
import DeleteIcon from "../../images/delete.svg";
import { removeExpenseAsync } from "../actions/expenses";

const Expense = ({
  id,
  amount = 0,
  category = "",
  date = moment(),
  details = "",
  removeExpense,
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="expense-item" onClick={toggleExpand}>
      <div className="expense-item__header">
        <h2 className="expense-item__amount">{amount} zł</h2>
        <h5 className="expense-item__date">{date}</h5>
      </div>
      <Category category={category} />
      <div className={`expense-item--${expanded ? "expanded" : "hidden"}`}>
        <p className={"expense-item__details"}>{details}</p>
        <div className="expense-item__icon-container">
          <button className="icon " onClick={(e) => removeExpense(id)}>
            <img src={DeleteIcon} className="icon--dark icon__img" />
          </button>
          <Link to={`/edit/${id}`} className="icon">
            <img src={EditIcon} className="icon--dark icon__img" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (id) => dispatch(removeExpenseAsync(id)),
});

export default connect(null, mapDispatchToProps)(Expense);

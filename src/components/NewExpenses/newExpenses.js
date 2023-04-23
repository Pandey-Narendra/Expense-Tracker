import React from "react";

import './newExpenses.css';
import ExpenseForm from "./expenseForm";

const NewExpenses = () => {

    return(

        <div className="new-expense">
            <ExpenseForm />
        </div>

    );

}

export default NewExpenses;
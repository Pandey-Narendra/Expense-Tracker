import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {

	const [filteredYear, setFilteredYear] = useState('2020');

	// filterChangeHandler() executes in the children component and return the filtered year
	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	// filteredExpenses() executes in the children component and returns the filtered years 
	// expense chart and returns the filtered year`s expense items 
	 
	// here expensedata is recieved in the items variable in props from the parent component
	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<div>

			{/* <Card/> is a custom component used to reduce duplicate CSS Here */}
			<Card className='expenses'>

				<ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList items={filteredExpenses} />
				
			</Card>

		</div>
	);
};

export default Expenses;

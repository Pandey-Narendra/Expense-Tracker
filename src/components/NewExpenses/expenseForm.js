import { useState } from 'react';
import './expenseForm.css';

const ExpenseForm = () => {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    // const [userInput, setUserInput] = useState( { 

    //     title : '',
    //     amount : '',
    //     date : ''

    // } );

    const titleHandler = (event) => {

        setTitle(event.target.value);

        // setUserInput( { ...userInput, title : event.target.value } );

        // setUserInput( ( prevState ) => { 
        
        //    return { ...prevState, title : event.target.value } ;
        
        // } );

    }

    const amountHandler = (event) => {

        setAmount(event.target.value);

        // setUserInput( { ...userInput, amount : event.target.value } );

        // setUserInput( ( prevState ) => { 
        
        //     return { ...prevState, amount : event.target.value } ;
         
        // } );

    }

    const dateHandler = (event) => {

        setDate(event.target.value);

        // setUserInput( { ...userInput, date : event.target.value } );
        
        // setUserInput( ( prevState ) => { 
        
        //     return { ...prevState, date : event.target.value } ;
         
        // } );
    }

    const formSubmitHandler = (event) => {

        event.preventDefault();
        
        const expenseData = {

            expenseTitle: title,
            expenseAmount: amount,
            expenseDate: new Date(date)

        }

        setTitle('');
        setDate('');
        setAmount('');

    }


    return(

        <form onSubmit={formSubmitHandler}>

            <div className='new-expense__control'>
                <div className='new_expense__control'>
                    <label>Titile</label>
                    <input type='text'value={title} onChange={titleHandler} />
                </div>

                <div className='new_expense__control'>
                    <label>Amount</label>
                    <input type='number' value={amount} min='0.01' step='0.01' onChange={amountHandler} />
                </div>

                <div className='new_expense__control'>
                    <label>Date</label>
                    <input type='date' value={date} min='2019-01-01' max='2022-12-31' onChange={dateHandler} />
                </div>
            </div>

            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>

        </form>

    );

}


export default ExpenseForm;
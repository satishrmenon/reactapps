import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';

const ExpensesList = (props)=>{
    return (
        <div>
            Inside ExpensesList
            <p>Total number of Expenses Items {props.expenses.length} </p>
            {
                props.expenses.map((item)=>{
                    return <ExpenseListItem key={item.id} {...item}/>
                })
            }
        </div>
    )
}
const mapStoreToProps = (store) =>{
    return{
        expenses: getVisibleExpenses(store.expenses, store.filters)
    }
}
const  ConnectedExpensesList = connect(mapStoreToProps)(ExpensesList);

export default ConnectedExpensesList;
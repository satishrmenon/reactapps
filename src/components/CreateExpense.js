import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import {actionAddExpense} from '../actions/expenses';

const CreateExpense =(props)=>{
    
        return (
    <div>
        <p>from CreateExpense</p>
        <ExpenseForm onSubmit = {(expense)=>{
            props.dispatch(actionAddExpense(expense));
            props.history.push('/');
        }} />
    </div>
    );
}

const ConnectedCreateExpense = connect()(CreateExpense);

export default ConnectedCreateExpense;
    
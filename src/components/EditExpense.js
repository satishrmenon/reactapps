import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { actionEditExpense, actionRemoveExpense } from '../actions/expenses';
const EditExpense = (props)=>{
    return(
        <div>
            <ExpenseForm 
            expense = {props.expense}
            onSubmit = {(expense)=>{
                props.dispatch(actionEditExpense(props.expense.id, expense));
                console.log('Updated',expense);
                props.history.push('/');
            }}
            />      
            <button onClick={()=>{
                props.dispatch(actionRemoveExpense({id: props.expense.id}));
                props.history.push('/');
            }}>Remove</button>
        
        </div>
    );
}
const mapStateToProps = (state, props)=>{
    return{
        expense: state.expenses.find((expenseitem)=>{
            return expenseitem.id === props.match.params.id;
        })
    }
}
const ConnectEditExpense = connect(mapStateToProps)(EditExpense);
export default ConnectEditExpense;
import React from 'react';
import ExpensesList from './ExpenseList';
import ExpenseFilter from './ExpenseFilter';

const Dashboard =()=>(
    <div>
        <p>from dashboard</p>
        <ExpenseFilter />
        <ExpensesList />
    </div>
);

export default Dashboard;
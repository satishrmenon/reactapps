import React from 'react';
import ReactDOM from 'react-dom';
import {Provider } from 'react-redux';

import AppRouter from './routes/AppRouter';
import storeFunction from './store/configureStore';
import {actionAddExpense, actionRemoveExpense, actionEditExpense} from './actions/expenses';
import { actionSearchText } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const store = storeFunction();

store.dispatch(actionAddExpense({description: 'Water Bill', note:'some note',amount:400, createdAt:0}));
store.dispatch(actionAddExpense({description: 'Gas Bill', note:'another note',amount:600, createdAt:-50}));
store.dispatch(actionAddExpense({description: 'Gas Bill', note:'another note',amount:100, createdAt:1000}));
// store.dispatch(actionSearchText('Water'));
const tmpstore = store.getState();
const visibleExpenses = getVisibleExpenses(tmpstore.expenses, tmpstore.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store = {store}>
        <AppRouter />

    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));



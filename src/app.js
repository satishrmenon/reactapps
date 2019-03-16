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

const jsx = (
    <Provider store = {store}>
        <AppRouter />

    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));



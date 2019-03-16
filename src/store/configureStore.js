import {createStore, combineReducers}  from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

const storeFunction = ()=>{
const store = createStore(
    combineReducers(
        {
            expenses: expensesReducer,
            filters: filtersReducer
        }
    ),
    //added for REDUX Development tools on Google Chrome
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
return store;
}

export default storeFunction;






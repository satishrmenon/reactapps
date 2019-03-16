import expensesReducer from '../../reducers/expenses';
import expenses from './../fixtures/expenses';

// const demoState = {
//     expenses:[{
//         id: 'someidvalue',
//         description: 'Rent expense',
//         note: 'This was last',
//         amount: '34000',
//         createdAt: 0
//     }],
 
//Testing case for obtaining an empty array in the begining.
test('set to default state',()=>{
    const state = expensesReducer(undefined, {type:'@@INIT'})
    expect(state).toEqual([]);
})

test('adding an Expense',()=>{
    const newExpenseItem = {
        id: '4',
        description: 'Test',
        note: 'Test',
        amount: '34000',
        createdAt: 0
    }
    const action = {
        type: 'ADDEXPENSE',
        expense: newExpenseItem
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, action.expense]);
})


test('editing an Expense when match found',()=>{
    const updateExpenseItem = {
        id : '1',
        description: 'Test',
        note: 'Test',
        amount: 34000,
        createdAt: 0
    }
    const action = {
        type : 'EDITEXPENSE',
        id: expenses[1].id,
        updates: {
            amount: updateExpenseItem.amount
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(updateExpenseItem.amount);
})

test('not able to edit an Expense when match NOT found',()=>{
    const updateExpenseItem = {
        id : '-1',
        description: 'Test',
        note: 'Test',
        amount: 34000,
        createdAt: 0
    }
    const action = {
        type : 'EDITEXPENSE',
        id: '-1',
        updates: {
            amount: updateExpenseItem.amount
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})

test('setting Remove Expense', ()=>{
    const action = {
        type:'REMOVEEXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0],expenses[2]]);
})

test('setting not to Remove Expense if ID not found', ()=>{
    const action = {
        type:'REMOVEEXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})

 
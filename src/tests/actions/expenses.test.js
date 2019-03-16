import {actionAddExpense, actionEditExpense, 
    actionRemoveExpense} from '../../actions/expenses';

//For Remove Expense Action Object
test('Should setup Remove Expense Action Object',()=>{
    const action = actionRemoveExpense({id: '123abc'});
    expect(action).toEqual({ //use toEqual for comparing objects
        type: 'REMOVEEXPENSE',
        id: '123abc'
    })
})
//For Edit Expense Action Object
test('Should setup Edit Expense Action Object',()=>{
    const action = actionEditExpense('123abc', {note:'New Note value'});
    expect(action).toEqual({
        type: 'EDITEXPENSE',
        id: '123abc',
        updates: {
            note: 'New Note value'
        }
    })
})
//For Add Expense Action Object - 2 scenarios.
test('Should setup Add Expense Action for provided values',()=>{
    const expenseData = {
        description : 'Some Description',
        note: 'Some Note',
        amount: 1000,
        createdAt : 1000
    }
    const action = actionAddExpense(expenseData);
    expect(action).toEqual({
        type: 'ADDEXPENSE',
        expense:{
        ...expenseData,
        id: expect.any(String)
        }
    })
})
test('Should setup Add Expense Action for default values',()=>{
    const action = actionAddExpense();
    expect(action).toEqual({
        type: 'ADDEXPENSE',
        expense:{
        description : '',
        note: '',
        amount: 0,
        createdAt : 0,
        id: expect.any(String)
        }
    })
})
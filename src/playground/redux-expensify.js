import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

//Add Expense Action Generator..
const actionAddExpense = ({description='', note='', amount=0, createdAt=0} = {})=>{
    return{
        type: 'ADDEXPENSE',
        expense: {
            id: uuid (),
            description : description,
            note: note,
            amount: amount,
            createdAt: createdAt
        }
    }
}
//Remove Expense Action Generator..
const actionRemoveExpense = ({id}={})=>{
    return{
        type:'REMOVEEXPENSE',
        id: id
    }
}
//Edit Expense Action Generator..
const actionEditExpense = (idToFind, updates={})=>{
    return{
        type:'EDITEXPENSE',
        id: idToFind,
        updates
    }
}

//Edit Filter Action Generator..
const actionEditFilter = (updates)=>{
    return {
        type: 'EDITFILTER',
        updates
    }
}

//SortBy Amount Action Generator..
const actionSortByAmount = ()=>{
    return{
        type: 'SORTBYAMOUNT',
        sortBy: 'amount'
    }
}

//SortBy Date Action Generator..
const actionSortByDate = () =>{
    return{
        type: 'SORTBYDATE',
        sortBy: 'date'
    }
}

//Change startDate Action Generator..
const actionStartDate = (dateval)=>{
    return{
        type: 'CHANGESTARTDATE',
        startDate: dateval
    }
}


//Change endDate Action Generator..
const actionEndDate = (dateval)=>{
    return{
        type: 'CHANGEENDDATE',
        endDate: dateval
    }
}

//Change description Text Action Generator...
const actionChangeDescription = (txt)=>{  //Renamed as actionSearchText in the project
    return{
        type: 'CHANGEDESCRIPTION',
        text: txt
    }
}

const expenseReducerDefaultValue = [];
const expensesReducer = (state = expenseReducerDefaultValue, action)=>{
    switch(action.type){
        case 'ADDEXPENSE':
            // return state.concat(action.expense);
            return [...state, action.expense]; //ES6 spread operator
            //It concats new item in addition to existing items of state obj.

        case 'REMOVEEXPENSE':
        
            return state.filter(({id})=>{
                return  id !== action.id;    
            });
        
        case 'EDITEXPENSE':
            return state.map((expenseIterator)=>{
                if(expenseIterator.id === action.id){
                    return {
                        ...expenseIterator, //spreads the expenseIterator Object
                        ...action.updates  //adds & changes the Iterator Object
                    }                    
                }else{
                    return expenseIterator;
                }
            })
        default:
            return state;
    }
}
const filtersReducerDefaultValue = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultValue, action)=>{
    switch(action.type){
        case 'EDITFILTER':
            return {
                ...state,
                ...action.updates
            }
        case 'SORTBYAMOUNT':
            return{
                ...state,
                sortBy: action.sortBy
            }
        case 'SORTBYDATE':
            return{
                ...state,
                sortBy: action.sortBy
            }
        case 'CHANGESTARTDATE':
            return{
                ...state,
                startDate: action.startDate
        }
        case 'CHANGEENDDATE':
        return{
            ...state,
            endDate: action.endDate
        }
        case 'CHANGEDESCRIPTION':
        return{
            ...state,
            text: action.text
        }
    
        default:
            return state;
    }
}

const store = createStore(
    combineReducers(
        {
            expenses: expensesReducer,
            filters: filtersReducer
        }
    )
);

const getVisibleExpenses = (expense, {text, sortBy, startDate, endDate})=>{
    return expense.filter((expenseIterator)=>{
        const textFlag = expenseIterator.description.toLowerCase().includes(text.toLowerCase());
        const startDateFlag = typeof startDate !== 'number' || expenseIterator.createdAt >= startDate;
        
        const endDateFlag = typeof endDate !== 'number' || expenseIterator.createdAt <= endDate; 
        console.log(textFlag, startDateFlag, endDateFlag);
        
         return textFlag && startDateFlag && endDateFlag;
    }).sort((a,b)=>{
        if(sortBy === "date"){
            return a.createdAt < b.createdAt ? 1 : -1; 
        }else if(sortBy === "amount"){
            return a.amount < b.amount ? 1 : -1
        }
    });
}


const unsubscribe = store.subscribe( ()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

    console.log(visibleExpenses);
})

//Adding an Expense
const actionOne = store.dispatch(actionAddExpense({
    description: 'Some description',
    amount: 500,
    note: 'Some note txt',
    createdAt: 1000
}))

const actionTwo = store.dispatch(actionAddExpense({
    description: 'Another description',
    amount: 1000,
    note: 'Another note',
    createdAt: -1000
}))

const actionThree = store.dispatch(actionAddExpense({
    description: 'Some Fee details',
    amount: 1500,
    note: 'Some note txt',
    createdAt: 700
}))


//Removing an Expense
// console.log(actionTwo.expense.id);
// store.dispatch(actionRemoveExpense({
//     id: actionTwo.expense.id
// }));

// //Editing an Expense
// store.dispatch(actionEditExpense( actionOne.expense.id, { amount: 100 }))

// //Ediiting the Filter 
// store.dispatch(actionEditFilter({text:"School Fees"}));

// //Changing Sortby to Sort By Amount
// store.dispatch(actionSortByAmount());

// //Changing Sortby to Sort By Date
//  store.dispatch(actionSortByDate());

//Changing StartDate to pre-defined value.
// store.dispatch(actionStartDate(0));
//store.dispatch(actionStartDate());

//Changing EndDate to pre-defined value.
// store.dispatch(actionEndDate(1500));
//store.dispatch(actionEndDate());

store.dispatch(actionChangeDescription('description')); 
store.dispatch(actionSortByAmount());


const demoState = {
    expenses:[{
        id: 'someidvalue',
        description: 'Rent expense',
        note: 'This was last',
        amount: '34000',
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}


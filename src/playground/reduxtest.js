import {createStore} from 'redux';

//Action Generator Objects

//creates and returns an action Object that uses Object
// Destructuring in parameter
const actionIncrement = ({incrementVal = 1}={})=>{
    return {
        type: 'INCREMENT',
        incrementBy: incrementVal
    }
}

const actionDecrement = ({decrementVal = 1}={})=>{
    return{
        type: 'DECREMENT',
        decrementBy: decrementVal
    }
}

const setCount = ({initVal=0}={})=>{
    return{
        type: 'SET',
        initTo : initVal
    }
}

const  resetCount = ()=>{
    return{
        type: 'RESET'
    }
}
//Reducer Function : its a special case of function with 2 qualities
//1. Its a pure function 
//means it works only on given input and produces output.
//2. It does not change state and action values
//means it directly does not manipulate state & action values.

const reducerFunction = (state={count:0}, action)=>{
    switch(action.type){
        case 'INCREMENT':
        return{
            count: state.count + action.incrementBy
        }
        case 'DECREMENT':
        return{
            count: state.count - action.decrementBy
        }
        case 'RESET':
        return{
            count: 0
        }
        case 'SET':
        return {
            count: action.initTo
        }        
        default:
        return state;
    }
    return state;
}
const store = createStore(reducerFunction());

//store.subscribe function gets called everytime the state is changed. 
//to unsubscribe simply call the unsubscribe function which is the return
//value of store.subscribe function.

const unsubscribe=store.subscribe(()=>{
    console.log(store.getState());
})


store.dispatch(actionIncrement({incrementVal: 10}));
store.dispatch(actionIncrement());

store.dispatch(actionDecrement({decrementVal: 2}));
store.dispatch(actionDecrement());

store.dispatch(setCount({initVal: -10}));

store.dispatch(resetCount());























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
export default expensesReducer;
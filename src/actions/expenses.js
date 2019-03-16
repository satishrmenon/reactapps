import uuid from 'uuid';

//Add Expense Action Generator..
export const actionAddExpense = ({description='', note='', amount=0, createdAt=0} = {})=>{
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
export const actionRemoveExpense = ({id}={})=>{
    return{
        type:'REMOVEEXPENSE',
        id: id
    }
}
//Edit Expense Action Generator..
export const actionEditExpense = (idToFind, updates={})=>{
    return{
        type:'EDITEXPENSE',
        id: idToFind,
        updates
    }
}

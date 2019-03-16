import moment from 'moment';

const getVisibleExpenses = (expense, {text, sortBy, startDate, endDate})=>{
    return expense.filter((expenseIterator)=>{
        const createdAtMoment = moment(expenseIterator.createdAt);
        const textFlag = expenseIterator.description.toLowerCase().includes(text.toLowerCase());
        // const startDateFlag = typeof startDate !== 'number' || expenseIterator.createdAt >= startDate;
        const startDateFlag = startDate? startDate.isSameOrBefore(createdAtMoment, 'day'): true;        
        // const endDateFlag = typeof endDate !== 'number' || expenseIterator.createdAt <= endDate;
        const endDateFlag = endDate? endDate.isSameOrAfter(createdAtMoment,'day') : true; 
        console.log(startDate, endDate);
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
export default getVisibleExpenses;
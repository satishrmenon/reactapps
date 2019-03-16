//Edit Filter Action Generator..
export const actionEditFilter = (updates)=>{
    return {
        type: 'EDITFILTER',
        updates
    }
}

//SortBy Amount Action Generator..
export const actionSortByAmount = ()=>{
    return{
        type: 'SORTBYAMOUNT',
        sortBy: 'amount'
    }
}

//SortBy Date Action Generator..
export const actionSortByDate = () =>{
    return{
        type: 'SORTBYDATE',
        sortBy: 'date'
    }
}

//Change startDate Action Generator..
export const actionStartDate = (dateval)=>{
    return{
        type: 'CHANGESTARTDATE',
        startDate: dateval
    }
}


//Change endDate Action Generator..
export const actionEndDate = (dateval)=>{
    return{
        type: 'CHANGEENDDATE',
        endDate: dateval
    }
}

//Change description Text Action Generator...
export const actionSearchText = (txt='')=>{
    return{
        type: 'SEARCHTEXT',
        text: txt
    }
}

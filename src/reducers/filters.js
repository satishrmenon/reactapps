import moment from 'moment';

const filtersReducerDefaultValue = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
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
        case 'SEARCHTEXT':
        return{
            ...state,
            text: action.text
        }
    
        default:
            return state;
    }
}
export default filtersReducer;
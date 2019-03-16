import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values',()=>{
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate : moment().endOf('month')        
    })
})

test('should set sort by based on amount',()=>{
    const action={
        type: 'SORTBYAMOUNT',
        sortBy: 'amount'
    }
    const state = filtersReducer(undefined, action);
    expect(state.sortBy).toBe('amount');
})

//When we Test Setting of Sort based on date, the important point is
//that the default setting is already date. So we try and see if the 
//setting does work in case the initial Setting was some other value.
test('should set sort by based on date',()=>{
    const initialState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = {
        type: 'SORTBYDATE',
        sortBy:'date'
    }
    const state = filtersReducer(initialState, action);
    expect(state.sortBy).toBe('date');
})

test('should set set Text filter',()=>{
    const action={
        type: 'SEARCHTEXT',
        text: 'sometext'
    }
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe('sometext');

})

test('should set set Start Date',()=>{
    const action = {
        type: 'CHANGESTARTDATE',
        startDate: moment()
    }
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(moment());
  
})

test('should set set End Date',()=>{
    const action = {
        type: 'CHANGEENDDATE',
        endDate: moment()
    }
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(moment());
  
})






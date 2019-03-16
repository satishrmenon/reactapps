import {actionStartDate, actionEndDate,
    actionEditFilter, actionSortByAmount, 
    actionSearchText} from '../../actions/filters';
import moment from 'moment';

test('should generate Start Date Action',()=>{
    const action = actionStartDate(moment(0));
    expect(action).toEqual({
        type:'CHANGESTARTDATE',
        startDate: moment(0)
    })
})

test('should generate End Date Action',()=>{
    const action = actionEndDate(moment(0));
    expect(action).toEqual({
        type:'CHANGEENDDATE',
        endDate: moment(0)
    })
})

test('should generate Edit Filter action',()=>{
    const action = actionEditFilter({description:'Some Description'});
    expect(action).toEqual({
        type: 'EDITFILTER',
        updates: {
            description: 'Some Description'
        }
    })
})

test('should generate SortByAmount action', ()=>{
    const action = actionSortByAmount();
    expect(action).toEqual({
        type: 'SORTBYAMOUNT',
        sortBy: 'amount'
    })
})

//2 scenarios are possible for Search Text
test('should generate SearchText action for specific input',()=>{
    const action = actionSearchText('sometext');
    expect(action).toEqual({
        type: 'SEARCHTEXT',
        text: 'sometext'
    })
})

test('should generate SearchText action for default input',()=>{
    const action = actionSearchText();
    expect(action).toEqual({
        type: 'SEARCHTEXT',
        text: ''
    })
})


import React from 'react';
import { connect } from 'react-redux';
import {actionSearchText, actionSortByAmount, actionSortByDate, 
    actionStartDate, actionEndDate} from '../actions/filters';
import { DateRangePicker } from 'react-dates';
class ExpenseFilter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            calendarFocused: null
        }   
    }
    onDatesChange = ({startDate, endDate})=>{
        console.log(startDate, endDate);
        this.props.dispatch(actionStartDate(startDate));
        this.props.dispatch(actionEndDate(endDate));        
    }
    onFocusChange = (calendarFocused)=>{
        this.setState(()=>{
            return{
                calendarFocused: calendarFocused
            }
        })
    }
    render(){
        return(
            <div>
                <input type="text" value={this.props.filters.text} onChange={(e)=>{
                    this.props.dispatch(actionSearchText(e.target.value));
                }}/>
                
                <select value={this.props.filters.sortBy} onChange={(e)=>{
                    console.log(e.target.value);
                    if(e.target.value === "date"){
                        this.props.dispatch(actionSortByDate());
                    }else if(e.target.value === "amount"){
                        this.props.dispatch(actionSortByAmount());
                    }
                }}>
                <option>date</option>
                <option>amount</option>
                </select>
    
                <DateRangePicker
                    startDate = {this.props.filters.startDate}
                    endDate = {this.props.filters.endDate}
                    onDatesChange = {this.onDatesChange}    
                    focusedInput = {this.state.calendarFocused}
                    onFocusChange = {this.onFocusChange}
                    showClearDates = {true}
                    numberOfMonths = {1}
                    isOutsideRange = {()=>{
                        return false;
                    }
                }             
                />
                          
                
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        filters: state.filters
    }
}

const ConnectExpenseFilter = connect(mapStateToProps)(ExpenseFilter);

export default ConnectExpenseFilter;
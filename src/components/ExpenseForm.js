import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

class ExpenseForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            description: props.expense? props.expense.description: '',
            note: props.expense? props.expense.note: '',
            amount: props.expense? ((props.expense.amount)/100).toString(): '',
            createdAt : props.expense? moment(props.expense.createdAt): moment(),
            calendarFocused : false,
            error: undefined
        }
    }

    onDescriptionChange = (e)=>{
        const description = e.target.value;
        this.setState(()=>{
            return{
                description: description
            }
        })
    }
    onNoteChange = (e)=>{
        const note = e.target.value;
        this.setState(()=>{
            return{
                note: note
            }
        })
    }
    onAmountChange = (e)=>{
        const amount = e.target.value;
        //Constructed using www.regex101.com
        //^\d{1,} : must start with digit and can have any 1 to infinity digits
        //()?  : 0 to 1 instance
        //(\.\d{0,2})? : 0 to 1 instance of decimal point followed by 2 digits
        //$  : end of regular expression.
        //Note: the !amount at the begining allows user to delete entire value
        
        if( !amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>{
                return{
                    amount: amount
                }
            })
        }
    }
    onDateChange = (createdAt) => {
        this.setState(()=>{
            return{
                //if(createdAt){ //ensures date value cannot be cleared
                createdAt: createdAt
            //}
            }
        })
    }   
    onFocusChange = ( {focused} )=>{
        this.setState(()=>{
            return{
                calendarFocused : focused
            }
        })
    }
    onFormSubmit = (e)=>{
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(()=>{
                return{
                    error: 'Please provide description and amount!'
                }
            })
        }else{
            this.setState(()=>{
                return{
                    error: undefined
                }
            })
            //calls the onSubmit method of parent CreateExpense.js
            //Passes an Expense object with all values 
            //Amount is parsed to Float and createdAt converted to Timestamp
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount,10)*100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form  onSubmit={this.onFormSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus={true}
                        value={this.state.description}
                        onChange = {this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange = {this.onAmountChange}
                    />
                    <SingleDatePicker
                        date = {this.state.createdAt}
                        onDateChange = {this.onDateChange}
                        focused = {this.state.calendarFocused}
                        onFocusChange = {this.onFocusChange}
                        // To show only 1 month in the calendar
                        numberOfMonths = {1}
                        // To keep past / back dates active for selection
                        isOutsideRange = {()=>{ 
                            return false;
                        }
                    }
                    />
                    <textarea
                        placeholder="Add a Note (optional)"
                        value={this.state.note}
                        onChange = {this.onNoteChange}
                    >
                    </textarea>
                    <button>Submit</button>
                </form>
            
            </div>
        )
    }
}

export default ExpenseForm;
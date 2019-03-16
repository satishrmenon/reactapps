import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import CreateExpense from '../components/CreateExpense';
import EditExpense from '../components/EditExpense';
import Help from '../components/Help';
import ErrorPage from '../components/ErrorPage';
import Header from '../components/Header';



class AppRouter extends React.Component{
    render(){
        return(
            <BrowserRouter>
            <div>
            <Header />
                <Switch>
                    <Route path="/" component={Dashboard} exact={true}/>
                    <Route path="/create" component={CreateExpense}/>
                    <Route path="/edit/:id" component={EditExpense} />
                    <Route path="/help" component={Help} />
                    <Route component={ErrorPage}/>
                </Switch>
                </div>
            </BrowserRouter>      
        )
    }
}

export default AppRouter;
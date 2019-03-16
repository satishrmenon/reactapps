import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const ErrorPage =()=>(
    <div>
        <p>404! Page not found</p> 
        <Link to="/">Back to home</Link>
    </div>
    );

export default ErrorPage;

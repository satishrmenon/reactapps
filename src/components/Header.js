import React from 'react';
import {NavLink} from 'react-router-dom';


const Header = ()=>(
    <div>
        <h1>Expense Management App</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink> &nbsp;
        <NavLink to="/create" activeClassName="is-active">Add Expense</NavLink> &nbsp;
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        <hr />
    </div>
);

export default Header;

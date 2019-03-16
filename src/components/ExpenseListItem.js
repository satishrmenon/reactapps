import React from 'react';

import { Link } from 'react-router-dom';

const ExpenseListItem = ({dispatch, id, description, amount,createdAt}) =>{
    
    return(
         <div>
            <Link to={`/edit/${id}`}>
            {description}
            </Link>

            {amount} &nbsp;
            {createdAt}
      
        </div>
    )
}

export default ExpenseListItem;
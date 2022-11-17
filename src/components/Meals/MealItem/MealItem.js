import React from 'react';
import MealItemForm from '../MealItemForm/MealItemForm';
import classes from './MealItem.module.css';

const MealItem = (props) => {
   return (
      <li className={classes.meal}>
         <div>
            <h3>{props.name}</h3>
            <div className={classes.title}>{props.title}</div>
            <div className={classes.price}>{`$${props.price.toFixed(2)}`}</div>
         </div>
         <div>
            <MealItemForm />
         </div>
      </li>
   );
};

export default MealItem;

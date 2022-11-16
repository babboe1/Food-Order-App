import React from 'react';
import classes from './MealItem.module.css';

const MealItem = (props) => {
   return (
      <li>
         <div className={classes.meal}>
            <h3>{ props.name }</h3>
            <div className={classes.title}>{ props.title }</div>
            <div className={classes.price}>{`$${ props.price.toFixed(2)}` }</div>
         </div>
      </li>
   );
};

export default MealItem;

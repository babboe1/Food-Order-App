import React, { useContext } from 'react';
import CartContext from '../../../Store/CartContext/CartContext';
import MealItemForm from '../MealItemForm/MealItemForm';
import classes from './MealItem.module.css';

const MealItem = ( props ) => {
   const cartCtx = useContext( CartContext );
   const addItemToCartHandler = ( amount ) => { 
      cartCtx.addItem({
         id: props.id,
         name: props.name,
         amount: amount,
         price: props.price
      });
   };
   return (
      <li className={classes.meal}>
         <div>
            <h3>{props.name}</h3>
            <div className={classes.title}>{props.title}</div>
            <div className={classes.price}>{`$${props.price.toFixed(2)}`}</div>
         </div>
         <div>
            <MealItemForm cartItems={cartCtx.items} id={props.id} onAddToCart={ addItemToCartHandler} />
         </div>
      </li>
   );
};

export default MealItem;

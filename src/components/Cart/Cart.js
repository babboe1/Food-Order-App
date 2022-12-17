import React, { useContext, useState } from 'react';
import CartContext from '../../Store/CartContext/CartContext';
import Context from '../../Store/ContextApi/Context';
import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem/CartItem';

const Cart = () => {
   const context = useContext(Context);
   const cartContext = useContext(CartContext);
   const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
   const hasItems = cartContext.items.length > 0;

   const cartItems = (
      <ul className={classes['cart-items']}>
         {cartContext.items.map((item) => (
            <CartItem
               key={item.id}
               price={item.price}
               name={item.name}
               amount={item.amount}
               onAdd={() => {
                  cartContext.addItem({ ...item, amount: 1 });
               }}
               onRemove={() => {
                  cartContext.removeItem(item.id);
               }}
            />
         ))}
      </ul>
   );

   return (
      <Modal>
         {cartItems}
         <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
         </div>
         <div className={classes.actions}>
            <button
               className={classes['button--alt']}
               onClick={context.hideModalHandler}
            >
               {' '}
               Close
            </button>
            {hasItems && <button className={classes['button']}>Order</button>}
         </div>
      </Modal>
   );
};

export default Cart;

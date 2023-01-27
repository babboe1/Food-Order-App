import React, { useContext, useState } from 'react';
import CartContext from '../../Store/CartContext/CartContext';
import Context from '../../Store/ContextApi/Context';
import Modal from '../UI/Modal/Modal';
import Spinner from '../UI/Spinner/Spinner';
import classes from './Cart.module.css';
import CartItem from './CartItem/CartItem';
import Checkout from './Checkout/Checkout';

const Cart = () => {
   const [isLoading, setIsLoading] = useState(true);
   const [placeOrder, setPlaceOrder] = useState(false);
   const [error, setError] = useState(false);

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

   const placeOrderHandler = () => {
      context.setShowOrder(true);
   };

   const submitOrderHandler = (data) => {
      // context.hideModalHandler();
      setPlaceOrder(true);
      fetch(
         'https://reactmeals-1eb47-default-rtdb.firebaseio.com/orders.json',
         {
            method: 'POST',
            body: JSON.stringify({
               user: data,
               orderedItems: cartContext.items,
            }),
         },
      )
         .then((res) => {
            setIsLoading(false);
            return res.json();
         })
         .catch((err) => {
            console.log(err);
            setError(true);
         });
   };

   return (
      <Modal>
         {placeOrder ? (
            isLoading ? (
               <Spinner />
            ) : error ? (
               <p className={classes.error}> Unable to create order</p>
            ) : (
               <>
                  <p className={classes.success}>Order Placed Successfully</p>
                  <button
                     className={classes['button--cl']}
                     onClick={context.hideModalHandler}
                  >
                     Close
                  </button>
               </>
            )
         ) : (
            <>
               <>
                  {cartItems}
                  <div className={classes.total}>
                     <span>Total Amount</span>
                     <span>{totalAmount}</span>
                  </div>
                  <div className={classes.actions}>
                     {!context.showOrder && (
                        <>
                           <button
                              className={classes['button--alt']}
                              onClick={context.hideModalHandler}
                           >
                              Close
                           </button>
                           <>
                              {hasItems && (
                                 <button
                                    className={classes['button']}
                                    onClick={placeOrderHandler}
                                 >
                                    Order
                                 </button>
                              )}
                           </>
                        </>
                     )}
                  </div>
               </>
               {context.showOrder && (
                  <Checkout
                     onCancel={context.hideModalHandler}
                     onConfirm={submitOrderHandler}
                  />
               )}
            </>
         )}
      </Modal>
   );
};

export default Cart;

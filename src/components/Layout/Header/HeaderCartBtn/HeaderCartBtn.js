import React, { useContext, useEffect } from 'react';
import classes from './HeaderCartBtn.module.css';
import CartIcon from '../../../Cart/CartIcon/CartIcon';
import CartContext from '../../../../Store/CartContext/CartContext';

const HeaderCartBtn = (props) => {
   const context = useContext(CartContext);
   const cartItems = context.cartLength;

   const btnClasses = `${ classes.button } ${ context.bump ? classes.bump : '' }`;

   useEffect(() => {
      if (cartItems === 0) {
         return;
      }
      context.setBump( true );
      const timer = setTimeout(() => {
         context.setBump( false );
         
      }, 300);
      return () => {
         clearTimeout(timer);
      };
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [context.items]);
   

   return (
      <button onClick={props.click} className={btnClasses}>
         <span className={classes.icon}>
            <CartIcon />
         </span>
         <span>Your Cart</span>
         <span className={classes.badge}>{cartItems}</span>
      </button>
   );
};

export default HeaderCartBtn;

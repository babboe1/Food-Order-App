import React from 'react';
import classes from './HeaderCartBtn.module.css';
import CartIcon from '../../../Cart/CartIcon/CartIcon';

const HeaderCartBtn = () => {
   return (
      <button className={classes.button}>
         <span className={classes.icon}><CartIcon /></span>
         <span>Your Cart</span>
         <span className={classes.badge}>3</span>
      </button>
   );
};

export default HeaderCartBtn;

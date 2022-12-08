import React from 'react';
import classes from './Header.module.css'
import mealsImage from '../../../assets/images/meals.jpg';
import HeaderCartBtn from './HeaderCartBtn/HeaderCartBtn';

const Header = (props) => {
   return (
      <>
         <header className={classes['header']}>
            <h1>ReactMeals</h1>
            <HeaderCartBtn click={props.onShowCart} />
         </header>
         <div className={classes['main-image']}>
            <img src={mealsImage} alt="A Table Full Of Delicious Meals" />
         </div>
      </>
   );
};

export default Header;
import React, { useReducer } from 'react';
import { useEffect } from 'react';
import Card from '../../UI/Card/Card';
import Spinner from '../../UI/Spinner/Spinner';
import MealItem from '../MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
   const defaultMealState = {
      meals: null,
      error: false,
      errorMsg: '',
   };
 


   const mealsList = state.meals ? (
      state.meals.map((meal, idx) => (
         <MealItem
            name={meal.name}
            title={meal.description}
            price={meal.price}
            key={meal.id}
            id={meal.id}
         />
      ))
   ) : (
      <Spinner />
   );

   return (
      <section className={classes.meals}>
         <Card>{state.error ? state.errorMsg : <ul>{mealsList}</ul>}</Card>
      </section>
   );
};

export default AvailableMeals;

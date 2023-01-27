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
   const reducer = (state, action) => {
      switch (action.type) {
         case 'SET_MEALS':
            return {
               ...state,
               meals: action.meals,
            };
         case 'SET_ERROR':
            return {
               ...state,
               error: action.error,
            };
         case 'SET_ERROR_MSG':
            return {
               ...state,
               errorMsg: action.errorMsg,
            };
         default:
            return state;
      }
   };
   const [state, dispatch] = useReducer(reducer, defaultMealState);

   useEffect(() => {
      let mealData;
      fetch('https://reactmeals-1eb47-default-rtdb.firebaseio.com/meals.json')
         .then((response) => response.json())
         .then((data) => {
            for (const key in data) {
               if (Object.hasOwnProperty.call(data, key)) {
                  mealData = data[key];
               }
               dispatch({ type: 'SET_MEALS', meals: mealData});
            }
         })
         .catch((error) => {
            console.log(error);
            dispatch({ type: 'SET_ERROR', error: true });
            dispatch({ type: 'SET_ERROR_MSG', errorMsg: error.message });
         });
   }, []);

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

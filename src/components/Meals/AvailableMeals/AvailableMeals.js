import React from 'react';
import Card from '../../UI/Card/Card';
import MealItem from '../MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
   {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
   },
   {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
   },
   {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
   },
   {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
   },
];

   const mealsList = state.meals ? (
      state.meals.map((meal, idx) => (
         <MealItem
            name={meal.name}
            title={meal.description}
            price={meal.price}
            key={meal.id}
            id={meal.id}
         />
   ));

   return (
      <section className={classes.meals}>
         <Card>{state.error ? state.errorMsg : <ul>{mealsList}</ul>}</Card>
      </section>
   );
};

export default AvailableMeals;

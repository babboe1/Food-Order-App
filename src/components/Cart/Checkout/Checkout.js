import React, { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const isEmpty = (value) => value.trim() === '';
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
   const [formInputsValidity, setFormInputsValidity] = useState({
      name: true,
      street: true,
      postal: true,
      city: true,
   });

   const nameRef = useRef();
   const streetRef = useRef();
   const postalRef = useRef();
   const cityRef = useRef();

   const confirmHandler = (event) => {
      event.preventDefault();
      const enteredName = nameRef.current.value;
      const enteredStreet = streetRef.current.value;
      const enteredPostal = postalRef.current.value;
      const enteredCity = cityRef.current.value;

      const formData = {
         name: enteredName,
         street: enteredStreet,
         postal: enteredPostal,
         city: enteredCity,
      };

      const enteredNameIsValid = !isEmpty(enteredName);
      const enteredStreetIsValid = !isEmpty(enteredStreet);
      const enteredPostalIsValid = isFiveChars(enteredPostal);
      const enteredCityIsValid = !isEmpty(enteredCity);

      setFormInputsValidity({
         name: enteredNameIsValid,
         street: enteredStreetIsValid,
         postal: enteredPostalIsValid,
         city: enteredCityIsValid,
      });

      const formIsValid =
         enteredNameIsValid &&
         enteredStreetIsValid &&
         enteredPostalIsValid &&
         enteredCityIsValid;

      if (!formIsValid) {
         return;
      }

      props.onConfirm(formData);
   };

   return (
      <form className={classes.form} onSubmit={confirmHandler}>
         <div
            className={`${classes.control} ${
               formInputsValidity.name ? '' : classes.invalid
            }`}
         >
            <label htmlFor="name">Your Name</label>
            <input ref={nameRef} type="text" id="name" />
            {!formInputsValidity.name && <p>Please enter a valid name.</p>}
         </div>
         <div
            className={`${classes.control} ${
               formInputsValidity.street ? '' : classes.invalid
            }`}
         >
            <label htmlFor="street">Street</label>
            <input ref={streetRef} type="text" id="street" />
            {!formInputsValidity.street && <p>Please enter a valid street.</p>}
         </div>
         <div
            className={`${classes.control} ${
               formInputsValidity.postal ? '' : classes.invalid
            }`}
         >
            <label htmlFor="postal">Postal Code</label>
            <input ref={postalRef} type="text" id="postal" />
            {!formInputsValidity.postal && (
               <p>Please enter a valid postal code (5 characters long).</p>
            )}
         </div>
         <div
            className={`${classes.control} ${
               formInputsValidity.city ? '' : classes.invalid
            }`}
         >
            <label htmlFor="city">City</label>
            <input ref={cityRef} type="text" id="city" />
            {!formInputsValidity.city && <p>Please enter a valid city.</p>}
         </div>
         <div className={classes.actions}>
            <button type="button" onClick={props.onCancel}>
               Cancel
            </button>
            <button className={classes.submit}>Confirm</button>
         </div>
      </form>
   );
};

export default Checkout;

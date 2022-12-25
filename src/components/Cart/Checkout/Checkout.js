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


export default Checkout;

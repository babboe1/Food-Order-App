import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Context from './Store/ContextApi/Context';
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './Store/CartContext/CartProvider';

const App = () => {
   const body = document.getElementById('body-root');
   const [showModal, setShowModal] = useState(false);
   const [showOrder, setShowOrder] = useState(false);
   const defaultFormState = {
      name: '',
      street: '',
      postal: '',
      city: '',
   };
   const [formState, setFormState] = useState(defaultFormState);
   const showModalHandler = () => {
      setShowModal(true);
      body.classList.add('Stop-Scroll');
   };
   const hideModalHandler = () => {
      setShowOrder(false);
      setShowModal(false);
      body.classList.remove('Stop-Scroll');
   };

   const sendFormData = (data) => {
      setFormState(data);
      console.log(formState);
      return;
   };

   const value = {
      showModal,
      showModalHandler,
      hideModalHandler,
      showOrder,
      setShowOrder,
      sendFormData,
   };

   return (
      <Context.Provider value={value}>
         <CartProvider>
            <Header onShowCart={showModalHandler} />
            {showModal ? <Cart /> : null}
            <main>
               <Meals />
            </main>
         </CartProvider>
      </Context.Provider>
   );
};

export default App;

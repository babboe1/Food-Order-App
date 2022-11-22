import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Context from './Store/ContextApi/Context';
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './Store/CartContext/CartProvider';

const App = () => {
   const body = document.getElementById('body-root');
   const [showModal, setShowModal] = useState(false);
   const showModalHandler = () => {
      setShowModal( true );
      body.classList.add('Stop-Scroll');
   };
   const hideModalHandler = () => {
      setShowModal( false );
      body.classList.remove('Stop-Scroll');
   };

   const value = {
      showModal,
      showModalHandler,
      hideModalHandler,
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

import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals';

const App = () => {
   const [ showModal, setShowModal ] = useState( false );
   const showModalHandler=  (prev) => setShowModal( !prev );


   return (
      <>
         <Header />
         {showModal ? <Cart /> : null}
         <main>
            <Meals />
         </main>
      </>
   );
};

export default App;

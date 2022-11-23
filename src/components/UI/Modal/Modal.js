import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import Context from '../../../Store/ContextApi/Context';
import classes from './Modal.module.css';

const ModalOverlay = ( props ) => {
   return (
      <div className={classes.modal}>
         <div className={classes.content}>{props.children}</div>
      </div>
   );
};

export const Backdrop = (props) => {
   const context = useContext(Context);

   return context.showModal ? (
      <button
         className={classes.backdrop}
         onClick={context.hideModalHandler}
      ></button>
   ) : null;
};

const Modal = (props) => {
   return (
      <>
         {ReactDOM.createPortal(
            <Backdrop />,
            document.getElementById('body-root'),
         )}
         {ReactDOM.createPortal(
            <ModalOverlay>{props.children}</ModalOverlay>,
            document.getElementById('body-root'),
         )}
      </>
   );
};

export default Modal;

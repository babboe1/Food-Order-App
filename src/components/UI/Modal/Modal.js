import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Cart.module.css';

const ModalOverlay = (props) => {
   return (
      <div className={classes.backdrop}>
         <div className={classes.content}>{props.children}</div>
      </div>
   );
};

export const Backdrop = (props) => {
   return <div className={classes.backdrop}></div>;
};

const Modal = (props) => {
   return (
      <>
         <Backdrop />
         <ModalOverlay>{props.children}</ModalOverlay>
      </>
   );
};


ReactDOM.createPortal()

export default Modal;

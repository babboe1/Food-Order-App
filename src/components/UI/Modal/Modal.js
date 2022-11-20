import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const ModalOverlay = (props) => {
   return (
      <div className={classes.modal}>
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

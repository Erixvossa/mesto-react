import React from 'react';

function PopupWithForm(props) {

  return (
    <>
      <div className={`popup popup__${props.name} popup_type_closed ${props.isOpen && 'popup_type_opened'}`} onClick={props.overlayClick}>
        <form className={`popup__container popup-container__${props.name}`} name="form" method="POST" action="#" noValidate>
        <button className="popup__button-close" type="reset" aria-label="Close" onClick={props.onClose}></button>
          <p className="popup__title">{props.title}</p>
            {props.children}
            <button className="popup__submit-button popup__submit-button_enabled" type="submit">{props.buttonText}</button>
        </form>
      </div>
    </>
  )
}

export default PopupWithForm;



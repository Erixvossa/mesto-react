import React from 'react';

function ImagePopup(props) {

  function overlayClick(e) {
    props.overlay(e.target);
  }


  return (
    <>
    <div className={`popup popup_type_closed popup-img ${props.isOpen && 'popup_type_opened'}`} id="popup-img" onClick={overlayClick}>
        <div className="popup-img__container">
            <button className="popup-img__button-close popup__button-close" type="reset" aria-label="Close" onClick={props.onClose}></button>
            <img className="popup-img__image" src={props.card.link} alt="укрупненное изображение"/>
            <p className="popup-img__title">{props.card.name}</p>
        </div>
    </div>
    </>
  )
}

export default ImagePopup;


import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {

  const inputName = React.useRef();
  const inputLink = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onChangeText();
    props.onAddPlace(e.target, {
      name: inputName.current.value,
      link: inputLink.current.value
    })
  }

  const handleButtonText = (
    `${props.isText ? 'Сохранение...' : 'Создать'}`
  );

  function overlayClick(e) {
    props.overlay(e.target);
  }

  return (
    <PopupWithForm
      overlayClick={overlayClick}
      onSubmit={handleSubmit}
      title="Новое место"
      name="add"
      buttonText={handleButtonText}
      isOpen={props.isOpen}
      onClose={props.onClose}
      children={
        <>
          <input
            className="popup__input popup__input_type_name"
            id="popup-title"
            defaultValue=""
            name="name"
            type="text"
            placeholder="Название"
            minLength="1" maxLength="30"
            ref={inputName}
            required
          />
          <span className="popup__error popup__error_invisible" id="popup-title-error">текст ошибки</span>
          <input
            className="popup__input popup__input_type_url"
            id="popup-url"
            defaultValue=""
            name="link"
            type="url"
            placeholder="Ссылка на картинку"
            ref={inputLink}
            required
          />
          <span className="popup__error popup__error_invisible" id="popup-url-error">текст ошибки</span>
        </>
      }
    />
  )
}

export default AddPlacePopup;
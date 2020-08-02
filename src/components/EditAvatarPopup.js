import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {

  const inputRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onChangeText();
    props.onUpdateAvatar(e.target, {
      avatar: inputRef.current.value,
    });
  }

  const handleButtonText = (
    `${props.isText ? 'Сохранение...' : 'Сохранить'}`
  );

  function overlayClick(e) {
    props.overlay(e.target);
  }

  return (
    <PopupWithForm
      overlayClick={overlayClick}
      onSubmit={handleSubmit}
      title="Обновить аватар"
      defaultValue=""
      name="avatar"
      buttonText={handleButtonText}
      isOpen={props.isOpen}
      onClose={props.onClose}
      children={
        <>
          <input className="popup__input popup__input_type_url"
            id="popup-url"
            ref={inputRef}
            name="avatar"
            type="url"
            placeholder="Ссылка на аватар"
            required />
          <span className="popup__error popup__error_invisible" id="popup-url-error">текст ошибки</span>
        </>
      }
    />
  )
}

export default EditAvatarPopup;
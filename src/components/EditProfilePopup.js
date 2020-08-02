import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {

  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onChangeText();
    props.onUpdateUser({
      name: name,
      about: description
    });
  }

  function handleChangeAuthor(e) {
    setName(e.target.value);
  }

  function handleChangeAbout(e) {
    setDescription(e.target.value);
  }

  function resetInput() {
    props.onClose();
    setName(currentUser.name);
    setDescription(currentUser.about);
  }

  const handleButtonText = (
    `${props.isText ? 'Сохранение...' : 'Сохранить'}`
  )

  function overlayClick(e) {
    props.overlay(e.target);
  }

  return (
    <PopupWithForm
      overlayClick={overlayClick}
      onSubmit={handleSubmit}
      title="Редактировать профиль"
      name="edit"
      buttonText={handleButtonText}
      isOpen={props.isOpen}
      onClose={resetInput}
      children={
        <>
          <input className="popup__input popup__input_type_name"
            id="popup-name"
            name="username"
            type="text"
            placeholder="Имя"
            defaultValue={name}
            minLength="2" maxLength="40"
            pattern="[A-Za-zА-ЯЁа-яё -]{1,}" required
            onChange={handleChangeAuthor} />
          <span className="popup__error popup__error_invisible" id="popup-name-error">Вы пропустили это поле.</span>
          <input className="popup__input popup__input_type_subname"
            id="popup-profession"
            name="description"
            type="text"
            defaultValue={description}
            placeholder="Профессия"
            minLength="2" maxLength="200" required
            onChange={handleChangeAbout} />
          <span className="popup__error popup__error_invisible" id="popup-profession-error">Вы пропустили это поле.</span>
        </>
      }
    />
  )
}

export default EditProfilePopup;
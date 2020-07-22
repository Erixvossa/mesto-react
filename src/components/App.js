import React from 'react';
import '../index.css';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';


function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(false);
    const [openImage, setOpenImage] = React.useState({});

    function handleCardClick(data) {
      setSelectedCard(true);
      setOpenImage(data);
    }

    function handleEditAvatarClick() {
      setIsEditAvatarPopupOpen(true);
    };

    function handleEditProfileClick() {
      setIsEditProfilePopupOpen(true);
    };

    function handleAddPlaceClick() {
      setIsAddPlacePopupOpen(true);
    };

    function closeAllPopups() {
      setIsEditAvatarPopupOpen(false);
      setIsEditProfilePopupOpen(false);
      setIsAddPlacePopupOpen(false);
      setSelectedCard(false);
    }
  


  return (
    <div className="page">
    <div className="main">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <PopupWithForm title="Редактировать профиль" name="edit" buttonText="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} children={
            <>
            <input className="popup__input popup__input_type_name" id="popup-name" type="text" placeholder="Имя" name="username" required pattern="[а-яА-ЯA-Za-z\s\-]*" minLength="2" maxLength="40"/>
                <span className='popup__error popup__error_invisible' id='popup-name-error'>текст ошибки</span>
            <input className="popup__input popup__input_type_subname" id="popup-profession" type="text" placeholder="Профессия" name="description" required minLength="2" maxLength="200"/>
                <span className='popup__error popup__error_invisible' id='popup-profession-error'>текст ошибки</span>
            </>
          } />
        <PopupWithForm title="Новое место" name="add" buttonText="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} children={
            <>
            <input className="popup__input popup__input_type_name" id="popup-title" type="text" placeholder="Название" name="name" required minLength="2" maxLength="30"/>
                <span className='popup__error popup__error_invisible' id='popup-title-error'>текст ошибки</span>
            <input className="popup__input popup__input_type_url" id="popup-url" type="url" placeholder="Ссылка на картинку" name="link" required/>
                <span className='popup__error popup__error_invisible' id='popup-url-error'>текст ошибки</span>
            </>
          } />
        <PopupWithForm title="Обновить аватар" name="avatar" buttonText="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} children={
            <>
            <input className="popup__input popup__input_type_url" id="popup-url" type="url" placeholder="Ссылка на аватар" name="link" required/>
                <span className='popup__error popup__error_invisible' id='popup-url-error'>текст ошибки</span>
            </>
          } />
        <PopupWithForm title="Вы уверены?" name="delete" buttonText="Да" />
        
          <ImagePopup card={openImage} isOpen={selectedCard} onClose={closeAllPopups}/>
        <Footer />
    </div>
</div>
  );
}

export default App;

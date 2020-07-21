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
    const [showImage, setShowImage] = React.useState({});
    //функция меняет хначения при клике на картинку и передает showImage данные об этой картинке (получает из компонента ImagePopup)
    function handleCardClick(data) {
      setSelectedCard(true);
      setShowImage(data);
    }
    //попап сменить аватарку
    function handleEditAvatarClick() {
      setIsEditAvatarPopupOpen(true);
    };
    //попап редактировать профиль
    function handleEditProfileClick() {
      setIsEditProfilePopupOpen(true);
    };
    //попап загрузить новое место
    function handleAddPlaceClick() {
      setIsAddPlacePopupOpen(true);
    };
    //закрывает все попапы на крестик
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
          onEditProfile={handleEditProfileClick} //передает ф-цию по клике на редактирование профиля
          onAddPlace={handleAddPlaceClick} // передает ф-цию по клике на кнопку добавления нового места
          onEditAvatar={handleEditAvatarClick} //ф-ция по клику на смену аватара
          onCardClick={handleCardClick} //ф-ция по клике на картинку
        />
        {/*в каждом компоненте PopupWithForm передаем пропс isOpen, который есть условие того что конкретное поле объекта true и если оно верно, передаем новый класс по открытию формы*/}
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
          {/*в ImagePopup передаем объект о нажатой карточке (card), условие как в PopupWithForm и ф-цию по смене стейта по нажатию на крестик*/}
          <ImagePopup card={showImage} isOpen={selectedCard} onClose={closeAllPopups}/>
        <Footer />
    </div>

{/* 
   <div className='popup popup_type_closed popup-img' id="popup-img">
        <div className="popup-img__container">
            <button className="popup-img__button-close popup__button-close" type="reset"></button>
            <img className="popup-img__image" src='../images/kirill-pershin-1088404-unsplash.png' alt="укрупненное изображение"/>
            <p className="popup-img__title">Заголовок</p>
        </div>
    </div>


    <div className="popup popup__edit popup_type_closed" id="popup-edit">
        <form className="popup__container" id="popup__container" name="popup-form" method="GET" action="#" noValidate>
            <button className="popup__button-close" type="reset"></button>
            <p className="popup__title">Редактировать профиль</p>
            <input className="popup__input popup__input_type_name" id="popup-name" type="text" placeholder="Имя" name="username" required pattern="[а-яА-ЯA-Za-z\s\-]*" minLength="2" maxLength="40"/>
                <span className='popup__error popup__error_invisible' id='popup-name-error'>текст ошибки</span>
            <input className="popup__input popup__input_type_subname" id="popup-profession" type="text" placeholder="Профессия" name="description" required minLength="2" maxLength="200"/>
                <span className='popup__error popup__error_invisible' id='popup-profession-error'>текст ошибки</span>
            <button className="popup__submit-button popup__submit-button_enabled" type="submit">Сохранить</button>
        </form>
    </div>

    <div className="popup popup__add popup_type_closed" id="popup-add">
        <form className="popup__container" id="popup-add__container" name="popup-form" method="GET" action="#" noValidate>
            <button className="popup__button-close" id="popup-add__button-close" type="reset"></button>
            <p className="popup__title">Новое место</p>
            <input className="popup__input popup__input_type_name" id="popup-title" type="text" placeholder="Название" name="name" required minLength="2" maxLength="30"/>
                <span className='popup__error popup__error_invisible' id='popup-title-error'>текст ошибки</span>
            <input className="popup__input popup__input_type_url" id="popup-url" type="url" placeholder="Ссылка на картинку" name="link" required/>
                <span className='popup__error popup__error_invisible' id='popup-url-error'>текст ошибки</span>
            <button className="popup__submit-button popup__submit-button_enabled" id="popup-add-button" type="submit">Создать</button>
        </form>
    </div>

    <div className="popup popup__avatar popup_type_closed" id="popup-avatar">
        <form className="popup__container" id="popup-avatar__container" method="GET" action="#" noValidate>
            <button className="popup__button-close" type="reset"></button>
            <p className="popup__title">Обновить аватар</p>
            <input className="popup__input popup__input_type_url" id="popup-url" type="url" placeholder="Ссылка на аватар" name="link" required/>
            <span className='popup__error popup__error_invisible' id='popup-url-error'>текст ошибки</span>
            <button className="popup__submit-button popup__submit-button_enabled" type="submit">Сохранить</button>
        </form>
    </div>
    
    <div className="popup popup__delete popup_type_closed" id="popup-img-delete-confirm">
        <form className="popup__container" id="popup-avatar__container" method="GET" action="#" noValidate>
            <button className="popup__button-close" type="reset"></button>
            <p className="popup__title">Вы уверены?</p>
            <button className="popup__submit-button popup__submit-button_enabled" type="submit">Да</button>
        </form>
    </div>



    <template id='element'>
        <div className="element">
            <img className="element__photo" src="../images/kirill-pershin-1088404-unsplash.png" alt=" "/>
            <button className="element__recycle" type="button"></button>
            <div className="element__title-like-string">
                <h2 className="element__title">Карачаевск</h2>
                <div className="element__like-container">
                    <button className="element__like" type="button"></button>
                    <p className="element__like-counter">1</p>
                </div>
            </div>
        </div>
    </template>
    */}  
</div>
  );
}

export default App;

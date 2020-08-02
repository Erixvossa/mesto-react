import React from 'react';

import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {

  const currentUser = React.useContext(CurrentUserContext); //получаем объект о пользвателе из контекста

  return (
    <>
      <nav className="profile">
        <button className="profile__avatar-button" type="button" onClick={props.onEditAvatar}>
          <img className="profile__avatar" alt="Жак Кусто" src={currentUser.avatar}/>
        </button>
        <div className="profilee-info">
          <div className="profilee-info__centering">
            <h1 className="profilee-info__title">{currentUser.name}</h1>
            <button className="profilee-info__edit-button" type="button" onClick={props.onEditProfile}></button>
          </div>
            <p className="profilee-info__subtitle">{currentUser.about}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
    </nav>
    <section className="elements">
    {props.cards.map((item) => {
            return (
              <Card card={item}
                key={item._id}
                onCardClick={props.onCardClick}
                currentUser={currentUser}
                onCardLike={props.onCardLike}
                onTrashClick={props.onTrashClick} />
            );
          })}
    </section>
    </>
  )
}


export default Main;
import React from 'react';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

class Main extends React.Component {
  static contextType = CurrentUserContext;

  render() {
    return (
      <>
        <section className="profile">
          <button className="profile__avatar-button" type="button" onClick={this.props.onEditAvatar} aria-label="Изменить аватар.">
            <img className="profile__avatar" alt="Аватар пользователя." src={this.context.avatar} />
          </button>
          <div className="profilee-info">
            <div className="profilee-info__centering">
              <h1 className="profilee-info__title">{this.context.name}</h1>
              <button className="profilee-info__edit-button" type="button" onClick={this.props.onEditProfile} aria-label="Редактировать информацию о пользователе."></button>
            </div>
            <p className="profilee-info__subtitle">{this.context.about}</p>
          </div>
          <button className="profile__add-button" type="button" onClick={this.props.onAddPlace} aria-label="Добавить фото."></button>
        </section>

        <section className="elements">
          {this.props.cards.map(card => (
            <Card card={card} key={card._id} onCardClick={this.props.onCardClick} onCardLike={this.props.onCardLike} onCardDelete={this.props.onCardDelete} />
          ))}
        </section>
      </>
    )
  }
}

export default Main;
import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

class Card extends React.Component {
  handleClick = () => {
    this.props.onCardClick(this.props.card);
  }

  handleLikeClick = () => {
    this.props.onCardLike(this.props.card);
  }

  handleCardDelete = () => {
    this.props.onCardDelete(this.props.card);
  }

  static contextType = CurrentUserContext;

  render() {
    const isOwn = this.props.card.owner._id === this.context._id;
    const isLiked = this.props.card.likes.some(item => item._id === this.context._id);
    return (
      <div className="element">
        <img className="element__photo" onClick={this.handleClick} alt={this.props.card.name} src={this.props.card.link}/>
        <div className="element__title-like-string">
          <h2 className="element__title">{this.props.card.name}</h2>
          <div className="element__like-container">
            <button className={isLiked ? "element__like element__like_set" : "element__like"}
              type="button" aria-label="Поставить лайк." onClick={this.handleLikeClick} />
            <p className="element__like-counter">{this.props.card.likes.length}</p>
          </div>
        </div>
        {isOwn && <button className="element__recycle" type="button" aria-label="Удалить фото." onClick={this.handleCardDelete}/>}
      </div>
    )
  }
}

export default Card;

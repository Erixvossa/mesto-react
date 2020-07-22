import React from 'react';

function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <>
      <div className="element">
        <img className="element__photo" src={props.card.link} onClick={handleClick} alt=" "/>
        <button className="element__recycle" type="button"></button>
        <div className="element__title-like-string">
          <h2 className="element__title">{props.card.name}</h2>
          <div className="element__like-container">
            <button className="element__like" type="button"></button>
            <p className="element__like-counter">{props.card.likes.length > 0 ? `${props.card.likes.length}` : 0}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card;



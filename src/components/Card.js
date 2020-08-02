import React from 'react';

function Card(props) {

  const [error, setError] = React.useState(false); //стейт для проверки правильности ссылки

  function errorLoadImage(e) {
    e.target.setAttribute('src', 'https://image.freepik.com/free-vector/404_115790-50.jpg'); //усди ссылка неверна, загрузит стандартную картинку
    setError(true); //поменяет стейт
  }

  function handleDeleteClick(e) {
    props.onTrashClick(props.card, e.target.parentElement);
  }

  function handleClick(e) {
    !error && props.onCardClick(props.card); //если нет ошибки в картинке, то можно по ней кликать
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  const isOwn = props.card.owner._id === props.currentUser._id; // Определяем, являемся ли мы владельцем текущей карточки
  const cardDeleteButtonClassName = ( // Создаём переменную, которую после зададим в `className` для кнопки удаления
    `element__recycle ${isOwn ? '' : 'element__recycle_hidden'}`
  );


  const isLiked = props.card.likes.some(item => item._id === props.currentUser._id); // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const cardLikeButtonClassName = (// Создаём переменную, которую после зададим в `className` для кнопки лайка
    `element__like ${isLiked ? 'element__like_set' : ''}`
  );

  const cardLikeButtonHidden = ( //если есть ошибка то скрываем кнопку сердечко
    `${error && 'element__button_hidden'}`
  );

  const errorImageName = ( //если нет ошибки, то показываем текст, иначе пишем свой
    `${!error ? `${props.card.name}` : 'Упс, ошибка...'}`
  );

  const errorCountLike = ( //если есть ошибка, то скрываем кол-во лайков
    `element__like-counter ${error && 'element__like-counter_hidden'}`
  );

  return (
    <>
      <div className="element">
        <img className="element__photo" src={props.card.link} onClick={handleClick} alt=" " onError={errorLoadImage}/>
        <button className={cardDeleteButtonClassName} type="button" onClick={handleDeleteClick}></button>
        <div className="element__title-like-string">
          <h2 className="element__title">{errorImageName}</h2>
          <div className="element__like-container">
            <button className={`${cardLikeButtonClassName} ${cardLikeButtonHidden}`} type="button" onClick={handleLikeClick}></button>
            <p className={errorCountLike}>{props.card.likes.length > 0 ? `${props.card.likes.length}` : 0}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card;



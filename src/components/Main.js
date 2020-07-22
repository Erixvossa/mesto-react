import React from 'react';
import { api } from '../utils/Api.js';
import Card from './Card';


function Main(props) {

  const [userInfo, setUserInfo] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setUserInfo(data);
      });
    api.getInitialCards()
      .then((array) => {
        setCards(array);
      });
  }, []);

  return (
    <>
      <nav className="profile">
        <button className="profile__avatar-button" type="button" onClick={props.onEditAvatar}>
          <img className="profile__avatar" alt="Жак Кусто" src={userInfo.avatar}/>
        </button>
        <div className="profilee-info">
          <div className="profilee-info__centering">
            <h1 className="profilee-info__title">{userInfo.name}</h1>
            <button className="profilee-info__edit-button" type="button" onClick={props.onEditProfile}></button>
          </div>
            <p className="profilee-info__subtitle">{userInfo.about}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
    </nav>
    <section className="elements">
      {cards.map((item, index) => {
        return(
          <Card card={item} key={index} onCardClick={props.onCardClick}/>
        );
      })}
    </section>
    </>
  )
}


export default Main;
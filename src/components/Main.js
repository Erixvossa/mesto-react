import React from 'react';
import { api } from '../utils/Api.js';
import Card from './Card';


function Main(props) {

    const [userInterface, setUserInterface] = React.useState({}); //создаем стейт из информации об авторе (начальные значения - пустой объект)
    const [cards, setCards] = React.useState([]);//создает стейт из пустого массива (в нем будет хранится массив карточек)
  
    React.useEffect(() => {
      api.getUserInterface('/users/me') //отправляем запрос на сервер и получаем инфу об авторе
        .then((data) => {
          setUserInterface(data); //меняем стейт userInterface
        })
        .catch((err) => {
          console.log(`Упс, произошла ошибка: ${err}`);
        });
      api.getInitialCards('/cards') //отправляем запрос на сервер и получаем массив карточек
        .then((array) => {
          setCards(array); //меняем стейт cards
        })
        .catch((err) => {
          console.log(`Упс, произошла ошибка: ${err}`);
        });
    }, []);
  
    return (
      <>

        <nav className="profile">
            <button className="profile__avatar-button" type="button" onClick={props.onEditAvatar}>
                <img className="profile__avatar" alt="Жак Кусто" src={userInterface.avatar}/>
            </button>
            <div className="profilee-info">
                <div className="profilee-info__centering">
                    <h1 className="profilee-info__title">{userInterface.name}</h1>
                    <button className="profilee-info__edit-button" type="button" onClick={props.onEditProfile}></button>
                </div>
                <p className="profilee-info__subtitle">{userInterface.about}</p>
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
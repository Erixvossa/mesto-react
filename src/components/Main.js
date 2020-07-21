import React from 'react';


function Main() {
    return (
        <>
        <nav className="profile">
            <button className="profile__avatar-button" type="button">
                <img className="profile__avatar" alt="Жак Кусто" src="../images/Profile_avatar.jpg"/>
            </button>
            <div className="profilee-info">
                <div className="profilee-info__centering">
                    <h1 className="profilee-info__title">Жак-Ив Кусто</h1>
                    <button className="profilee-info__edit-button" type="button"></button>
                </div>
                <p className="profilee-info__subtitle">Исследователь океана</p>
            </div>
            <button className="profile__add-button" type="button"></button>
        </nav>
        <section className="elements">
        </section>
        </>
    );
}


export default Main;
import React from 'react';
import contentEdit from '../images/Vectorplusknopka.svg'
import contentVector from '../images/Vectorredactirovanie.svg' 
import contentPen from '../images/eeedit.png'
import { useState } from 'react';
import api from '../utils/API';
import Card from './Card';

function Main(props){
    const [userName, setUserName] = useState('')
    const [userDescription, setUserDescription] = useState('')
    const [userAvatar, setUserAvatar] = useState('')
    const [cards, setCards] = useState([])
    const currentUser = React.useContext(CurrentUserContext)

    React.useEffect(() => {
        api.getApiUsers()
            .then((res) => {
                setUserAvatar(res.avatar)
                setUserDescription(res.about)
                setUserName(res.name)
            }).catch((err)=>{
                console.log(err)
            });
        api.getApiCards()
            .then((res) => {
                setCards(res)
            }).catch((err)=>{
                console.log(err)
            });
    }, []);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__box">
                        <img src={userAvatar}  className="profile__avatar" alt="Аватар"/>
                        <button onClick={props.onEditAvatar} className='profile__overlay' >
                            <img src={contentPen} className='profile__icon-edit'alt="Кнопка редактирования аватара"/>
                        </button>
                    <div className="profile__info">
                        <div className="profile__titleicon">
                            <h1 className="profile__title">{userName}</h1>
                            <button onClick={props.onEditProfile} className="button profile__button" type="button" aria-label="Кнопка редактирования">
                                <img className="profile__icon " src={contentVector} alt="кнопка редактирования"/>
                            </button>
                        </div>
                        <p className="profile__subtitle">{userDescription}</p>
                    </div>
                    <button onClick={props.onAddPlace} type="button" className="button" aria-label="кнопка добавления">
                        <img className="add-button" src={contentEdit} alt="Кнопка добавления"/>
                    </button>
                </div>
            </section>
            <section className="elements">
            {cards && cards.map(card => <Card key={card._id} card={card} handleCardClick={props.handleCardClick} />)}
            </section>
        </main>
    );
};

export default Main;
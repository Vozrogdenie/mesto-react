import PopupYouSure from './PopupYouSure';
import ImagePopup from './ImagePopup';
import PopupEditAvatar from './PopupEditAvatar';
import PopupAddPlace from './PopupAddPlace';
import PopupWithForm from './PopupWithForm';
import PopupEditProfile from './PopupEditProfile';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useState } from 'react';
import '../index.css'
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { CurrentCardContext } from '../contexts/CurrentCardContext';
import React from 'react';
import api from '../utils/API';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen]  = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isYouSurePopupOpen, setIsYouSurePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({name:'', about:'', avatar:''})
  const [currentCard, setCurrentCard] = useState({name: '', link: ''});
  const [cards, setCards] = useState([])
 
  function handleCardClick(card) {
    setSelectedCard(card)
  };

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  };

  function closeAllPopups() {
    setSelectedCard(null);
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
  };
  
  React.useEffect(() => {
    api.getApiCards()
        .then((res) => {
            setCards(res)
        }).catch((err)=>{
            console.log(err)
        });
}, []);

function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
} ;

function handleCardDelete(card) {
    api.deleteCard(card._id)
        .then((cards) => {
            setCards((state) => state.filter((c) => c._id === card._id ? c = 0 : cards));
        }).catch((err)=>{
            console.log(err)
        });
};
  function handleUpdateAvatar(avatar) {
    api.changeAvatar(avatar)
      .then((res) => {
        setCurrentUser(res)
        closeAllPopups();
      }).catch((err)=>{
        console.log(err)
    });
  };
  
  function handleUpdateUser(name, about) {
    api.setApiUsers(name, about)
    .then(res => {
      setCurrentUser(res);
      closeAllPopups();
    }).catch((err)=>{
      console.log(err)
  });
};

  function handleAddPlaceSubmit(card) {
    api.createCards(card)
    .then(newCard => {
      setCards([newCard, ...cards]);
      closeAllPopups(); 
    }).catch((err) => {
      console.log(err)
    });
  };

  React.useEffect(() => {
    api.getApiUsers()
        .then((name, about) => {
          setCurrentUser(name, about)
        }).catch((err)=>{
            console.log(err)
        })  
}, []);

  return (
    <div >
      <CurrentUserContext.Provider value={currentUser}>
        <CurrentCardContext.Provider value={cards}>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          isEditProfilePopupOpen={isEditProfilePopupOpen}
          onAddPlace={handleAddPlaceClick}
          isAddPlacePopupOpen={isAddPlacePopupOpen}
          onEditAvatar={handleEditAvatarClick}
          isEditAvatarPopupOpen={isEditAvatarPopupOpen}
          closeAllPopups={closeAllPopups}
          selectedCard={selectedCard}
          handleCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
        <PopupEditProfile opened={isEditProfilePopupOpen} onUpdateUser={handleUpdateUser}  button={closeAllPopups}></PopupEditProfile> 
        <PopupAddPlace opened={isAddPlacePopupOpen} onPlace={handleAddPlaceSubmit} button={closeAllPopups}></PopupAddPlace>
        <PopupEditAvatar opened={isEditAvatarPopupOpen} onUpdateAvatar={handleUpdateAvatar} button={closeAllPopups}></PopupEditAvatar>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <PopupWithForm name="you-sure" opened={isYouSurePopupOpen} title='Вы уверены?'buttonText='Да' button={closeAllPopups}><PopupYouSure/></PopupWithForm>
      </CurrentCardContext.Provider>
    </CurrentUserContext.Provider>
    </div>
  );
};
  
export default App;

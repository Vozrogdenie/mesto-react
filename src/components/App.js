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
    />
    <Footer />
    <PopupEditProfile  opened={isEditProfilePopupOpen} onUpdateUser={handleUpdateUser}  button={closeAllPopups}></PopupEditProfile> 
    <PopupWithForm name="new-place" opened={isAddPlacePopupOpen} title='Новое место' buttonText='Добавить' button={closeAllPopups}><PopupAddPlace/> </PopupWithForm>
    <PopupEditAvatar onUpdateAvatar={handleUpdateAvatar} opened={isEditAvatarPopupOpen} button={closeAllPopups}></PopupEditAvatar>
    <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    <PopupWithForm name="you-sure" opened={isYouSurePopupOpen} title='Вы уверены?'buttonText='Да' button={closeAllPopups}><PopupYouSure/></PopupWithForm>
    </CurrentUserContext.Provider>
    </div>
  );
};
  
export default App;

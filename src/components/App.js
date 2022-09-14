import PopupYouSure from './PopupYouSure';
import PopupImage from './PopupImage';
import PopupEditAvatar from './PopupEditAvatar';
import PopupAddPlace from './PopupAddPlace';
import PopupWithForm from './PopupWithForm';
import PopupEditProfile from './PopupEditProfile';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useState } from 'react';
import '../index.css'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen]  = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isYouSurePopupOpen, setIsYouSurePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
   
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


  return (
    <div >
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
      <PopupWithForm name="edit" opened={isEditProfilePopupOpen} title='Редактировать профиль' button={closeAllPopups}><PopupEditProfile/> </PopupWithForm>
      <PopupWithForm name="new-place" opened={isAddPlacePopupOpen} title='Новое место' button={closeAllPopups}><PopupAddPlace/> </PopupWithForm>
      <PopupWithForm name="new-avatar" opened={isEditAvatarPopupOpen} title='Обновить аватар?' button={closeAllPopups}><PopupEditAvatar/> </PopupWithForm>
      <PopupImage card={selectedCard} onClose={closeAllPopups} />
      <PopupWithForm name="you-sure" opened={isYouSurePopupOpen} title='Вы уверены?' button={closeAllPopups}><PopupYouSure/></PopupWithForm>

    </div>
  );
};
  
export default App;

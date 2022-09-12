
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useState } from 'react';
import '../index.css'

function App() {
  // const [isEditProfilePopupOpen, setIsEditProfilePopupOpen]  = useState(false);
  // const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  // const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  // function handleEditAvatarClick() {
  //   setIsEditProfilePopupOpen(true)
  // }

  // function handleEditProfileClick() {
  //   setIsAddPlacePopupOpen(true)
  // }

  // function handleAddPlaceClick() {
  //   setIsEditAvatarPopupOpen(true)
  // }
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen]  = useState(false);
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
  }
  return (
    <div >

             <Header />
             <Main
             onEditProfile={handleEditProfileClick}/>
             <Footer />
    </div>
  );
}
  

export default App;

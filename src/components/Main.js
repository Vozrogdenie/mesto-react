import React from 'react';
import contentEdit from '../images/Vectorplusknopka.svg'
import contentVector from '../images/Vectorredactirovanie.svg' 
import { useState } from 'react';
import App from './App';


function Main(props){
//   const [isEditProfilePopupOpen, setIsEditProfilePopupOpen]  = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
  }

//   function handleEditProfileClick() {
//     setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
//   }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen)
  }
  
        return (
            <main class="content">
              <section class="profile">
                  <div class="profile__box">
                          <img src="<%=require('./images/image.jpg')%>" class="profile__avatar" alt="Аватар"/>
                          <button onClick={handleEditAvatarClick} class='profile__overlay' >
                              <img src="<%=require('./images/eeedit.png')%>" class='profile__icon-edit'alt="Кнопка редактирования аватара"/>
                          </button>
                      <div class="profile__info">
                          <div class="profile__titleicon">
                              <h1 class="profile__title">Жак-Ив Кусто</h1>
                              <button onClick={props.onEditProfile} class="button profile__button" type="button" aria-label="Кнопка редактирования">
                                  <img class="profile__icon " src={contentVector} alt="кнопка редактирования"/>
                              </button>
                          </div>
                          <p class="profile__subtitle">Исследователь океана</p>
                      </div>
                      <button onClick={handleAddPlaceClick} type="button" class="button" aria-label="кнопка добавления">
                          <img class="add-button" src={contentEdit} alt="Кнопка добавления"/>
                      </button>
                  </div>
              </section>
              <section class={`${ isEditProfilePopupOpen ? "popup_opened" : ""} popup popup-edit`}>
                  <div class="popup__container">
                      <button onClick={props.onEditProfile} class="button" type="button">
                          <img class="popup__close" src="<%=require('./images/Close.png')%>" alt="Кнопка закрытия"/>
                      </button>
                      <h2 class="popup__title">Редактировать профиль</h2>
                          <form name="profile-form" class="popup__edit-form popup__form" novalidate>
                              <input class="popup__input popup__input_value_name" name="name" type="text" required minlength="2" maxlength='40' placeholder="имя"/>
                              <span class="popup__input-name-error"></span>
                              <input class="popup__input popup__input_value_profession" name="profession" type="text" required minlength="2" maxlength='200' placeholder="профессия"/>
                              <span class="popup__input-profession-error"></span>
                              <button type="submit" class="popup__submit-button">Сохранить</button>
                          </form>
                  </div>
              </section>
              <section class={`${ isAddPlacePopupOpen ? "popup_opened" : ""} popup popup_new-place`}>
                  <div class="popup__container">
                      <button onClick={handleAddPlaceClick} class="button" type="button">
                          <img class="popup__close" src="<%=require('./images/Close.png')%>" alt="Кнопка закрытия"/>
                      </button>
                      <h2 class="popup__title">Новое место</h2>
                          <form name="card-form" class="popup__new-place-form popup__form" novalidate>
                              <input class="popup__input popup__input_value_title" name="title" type="text" placeholder="Название" required minlength="2" maxlength='30'/>
                              <span class="popup__input-title-error"></span>
                              <input class="popup__input popup__input_value_url" name="url" type="url" placeholder="Ссылка на картинку" required/>
                              <span class="popup__input-url-error"></span>
                              <button type="submit" class="popup__submit-button">Добавить</button>
                          </form>
                  </div>
              </section>
              <section class="popup popup_you-sure">
                  <div class="popup__container">
                      <button class="button" type="button">
                          <img class="popup__close" src="<%=require('./images/Close.png')%>" alt="Кнопка закрытия"/>
                      </button> 
                      <h2 class="popup__title">Вы уверены?</h2>
                      <button type="submit" class="popup__submit-button">Да</button>
                  </div>
              </section>
              <section class={`${ isEditAvatarPopupOpen ? "popup_opened" : ""} popup popup_new-avatar`} >
                  <div class="popup__container">
                      <button onClick={handleEditAvatarClick} class="button" type="button">
                          <img class="popup__close" src="<%=require('./images/Close.png')%>" alt="Кнопка закрытия"/>
                      </button>
                      <h2 class="popup__title">Обновить аватар?</h2>
                          <form name="card-form" class="popup__new-place-form popup__new-avatar-form popup__form" novalidate>
                              <input class="popup__input popup__input_value_url" name="url" type="url" placeholder="Ссылка на картинку" required/>
                              <span class="popup__input-url-error"></span>
                              <button type="submit" class="popup__submit-button">Сохранить</button>
                          </form>
                  </div>
              </section>
              <section class="elements"></section>
                  <div class="popup popup_type_picture">
                      <div class="popup__container popup__container_type_picture">
                          <button class="button" type="button">
                              <img class="popup__close" src="<%=require('./images/Close.png')%>" alt="Кнопка закрытия"/>
                          </button>
                          <img class="popup__foto" src="#" alt=" "/>
                          <p class="popup__title popup__title_type_picture"></p>
                      </div>
                  </div>
              <template id="element-template">
                  <div class="element">
                      <button class="button" type="button" aria-label="Мусорка" >
                          <img class="element__trach" src="<%=require('./images/Trashtrach.svg')%>" alt="Удалить"/>
                      </button>
                      <img class="element__item" src="#" alt=""/>    
                      <div class="element__info">
                          <h2 class="element__text"></h2>
                          <div>
                              <button type="button" class="button" aria-label="сердешко">
                                  <img class="element__heart" src="<%=require('./images/Vectorheartnew.svg')%>" alt="кнопка сердешки"/>
                              </button>
                              <div class="element__heart-count"></div>
                          </div>

                      </div>
                  </div>
              </template>
            </main>
        );
      }
    
    


export default Main;
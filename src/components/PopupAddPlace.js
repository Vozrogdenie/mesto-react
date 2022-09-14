function PopupAddPlace() {
    return(
        <>
            <input className="popup__input popup__input_value_title" name="title" type="text" placeholder="Название" required minLength="2" maxLength='30'/>
            <span className="popup__input-title-error"></span>
            <input className="popup__input popup__input_value_url" name="url" type="url" placeholder="Ссылка на картинку" required/>
            <span className="popup__input-url-error"></span>
            <button type="submit" className="popup__submit-button">Добавить</button>
        </>
    )
};
 
export default PopupAddPlace;
function PopupEditProfile() {
    return(
        <>
            <input className="popup__input popup__input_value_name" name="name" type="text" required minLength="2" maxLength='40' placeholder="имя"/>
            <span className="popup__input-name-error"></span>
            <input className="popup__input popup__input_value_profession" name="profession" type="text" required minLength="2" maxLength='200' placeholder="профессия"/>
            <span className="popup__input-profession-error"></span>
            <button type="submit" className="popup__submit-button">Сохранить</button>   
        </>
    )
}

export default PopupEditProfile;
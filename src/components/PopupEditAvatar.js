function PopupEditAvatar() {
    return(
        <>
            <input className="popup__input popup__input_value_url" name="url" type="url" placeholder="Ссылка на картинку" required/>
            <span className="popup__input-url-error"></span>
            <button type="submit" className="popup__submit-button">Сохранить</button>
        </>
    )
}

export default PopupEditAvatar;
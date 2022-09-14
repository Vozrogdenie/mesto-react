function PopupEditAvatar() {
    return(
        <>
            <input className="popup__input popup__input_value_url" name="url" type="url" placeholder="Ссылка на картинку" required/>
            <span className="popup__input-url-error"></span>
        </>
    )
}

export default PopupEditAvatar;
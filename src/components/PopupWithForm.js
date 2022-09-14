import closePopup from '../images/Close.png'

function PopupWithForm(props){
    return(
        <div className={`${ props.opened ? "popup_opened" : ""} popup popup-${props.name}`}>
            <div className="popup__container">
                <button onClick={props.button} className={`button ${props.name}`} type="button">
                    <img className="popup__close" src={closePopup} alt="Кнопка закрытия"/>
                </button>
                <h2 className={`popup__title ${props.name}`}>{props.title}</h2>
                <form name="name" className={`popup__${props.name}-form popup__form`}>
                    {props.children}
                </form>
                <button type="submit" className="popup__submit-button">{props.buttonText}</button>
            </div>
        </div>
    );
};

export default PopupWithForm;
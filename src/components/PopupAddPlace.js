import PopupWithForm from "./PopupWithForm";
import { CurrentCardContext } from "../contexts/CurrentCardContext";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import React from "react";

function PopupAddPlace(props) {
    const [name, setName] = React.useState('');
    const [link, setLink] = React.useState('');
    const cards = React.useContext(CurrentCardContext);
  
    React.useEffect(() => {
        setName(cards.name);
        setLink(cards.link);
      }, [cards]); 

    function handleSubmit(e){
        e.preventDefault();
        props.onPlace({
            name,
            link,
        });
    };

    function handleChangeName(e) {
        setName(e.target.value);
    };

    function handleChangeLink(e) {
        setLink(e.target.value);
    };

    return(
        <PopupWithForm name="new-place" onSubmit={handleSubmit} opened={props.opened} title='Новое место' buttonText='Добавить' button={props.button}> 
            <>
                <input className="popup__input popup__input_value_title"  onChange={handleChangeName} name="title" type="text" placeholder="Название" required minLength="2" maxLength='30'/>
                <span className="popup__input-title-error"></span>
                <input className="popup__input popup__input_value_url" onChange={handleChangeLink} name="url" type="url" placeholder="Ссылка на картинку" required/>
                <span className="popup__input-url-error"></span>
            </>
        </PopupWithForm>
    );
};
 
export default PopupAddPlace;
import heart from '../images/Vectorheartnew.svg'
import trach from '../images/Trashtrach.svg'

function Card(props) {
    const onCardClick = () => {
        props.handleCardClick(props.card)
    }
    
    return(
        <div className="element">
            <button className="button" type="button" aria-label="Мусорка" >
                <img className="element__trach" src={trach} alt="Удалить"/>
            </button>
            <img className="element__item" onClick={onCardClick} src={props.card.link} alt=""/>    
            <div className="element__info">
                <h2 className="element__text">{props.card.name}</h2>
                <div>
                    <button type="button" className="button" aria-label="сердешко">
                        <img className="element__heart" src={heart} alt="кнопка сердешки"/>
                    </button>
                    <div className="element__heart-count"></div>
                </div>

            </div>
        </div>
    )
}
export default Card
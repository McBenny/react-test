import { Character } from "../../types";
import './card.scss';

export const Card = (props: { hero: Character, onClose: () => void }) => {
    if (props.hero) {
        const { hero: { name, thumbnail }, onClose } = props;
        return (
            <div className="character">
                <button onClick={() => onClose()} className="character__button" title="Close">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="#000" strokeWidth="1.5"/>
                        <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                </button>
                <div className="character__card">
                    <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} className="character__visual" />
                    <div className="character__data">
                        <h2 className="character__name">{name}</h2>
                    </div>
                </div>
            </div>
        );
    }
    return '';
};

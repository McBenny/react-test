import { useState, useContext } from 'react';
import { Comic, Character } from '../../types';
import { CharactersContext } from '../../utils';
import { Card } from '../card/card';
import './comic.scss';

export const MyComic = ( props: { book: Comic }) => {
    const characters = useContext(CharactersContext);
    const { book } = props;
    const [selectedCharacters, setSelectedCharacters] = useState<number[]>([]);

    /**
     * This manages the show/hide feature of the hero cards and stores the list of visible cards.
     * @param heroId number, represents the hero Id.
     * @param show boolean, whether to show or hide
     */
    const displayCharacter = (heroId: Character['id'], show = true) => {
        if (show) {
            const tempCharactersSet = [...new Set([...selectedCharacters, heroId])];
            setSelectedCharacters(tempCharactersSet);
        } else {
            setSelectedCharacters(selectedCharacters.filter((characterId) => characterId !== heroId));
        }
    };

    if (characters) {
        return (
            <div className="comic">
                <img src={`${book.thumbnail.path}.${book.thumbnail.extension}`} alt={book.title} className='comic__visual' />
                <div className="comic__data">
                    <h2 className="comic__title">{book.title}</h2>
                    <p className="comic__description">{book.description}</p>
                    <h3 className="comic__subtitle">Characters</h3>
                    <ul className="comic__characters-list">
                            {characters.map((character) => (
                                <li key={character.name} className="comic__character-item">
                                    <button onClick={() => displayCharacter(character.id)} className="comic__show" disabled={selectedCharacters.includes(character.id)}>{character.name}</button>
                                </li>
                            ))}
                    </ul>
                    {selectedCharacters.length > 0 ? (
                        <div className="comic__characters">
                            {selectedCharacters.map(
                                (characterId) => (
                                    <Card
                                        key={characterId}
                                        hero={characters.filter((character) => character.id === characterId )[0]}
                                        onClose={() => displayCharacter(characterId, false)}
                                    />
                                )
                            )}
                        </div>
                    ) : ''}
                </div>
            </div>
        );
    }
    return '';
};

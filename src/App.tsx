import { useState, useEffect, ChangeEvent } from 'react';
import axios from 'axios';
import { Character, Comic } from './types';
import { marvel, getAuthParams, CharactersContext, loadingTypes } from './utils';
import { Loading } from './components/loading/loading';
import { MyComic } from './components/comic/comic';

function App() {
    const [loadingComics, setLoadingComics] = useState(true);
    const [characters, setCharacters] = useState<Character[]>([]);
    const [comics, setComics] = useState<Comic[]>([]);
    const [selectedComic, setSelectedComic] = useState<Comic>();

    /**
     * Function used for all data call to the Marvel API. Takes a callback function.
     * @param getUrl string, the complete URL where to get the data, all parameters included
     * @param options object, include query parameters for the API, can be empty
     * @param callBack the function to be executed on return of the promise
     */
    const getData = async (getUrl: string, options: object, callBack: (p: { results: [] }) => void) => {
        await axios
            .get(getUrl, { params: options })
            .then((response) => {
                callBack(response.data.data);
            });
    };
    
    /**
     * This is the specific callback function on retrieving the Comics list.
     * Allow display and population of the select
     * @param param object, includes an array of the results expected.
     */
    const getComicsCallback = (param: { results: [] }) => {
        const filteredResults = param.results.filter((comic: Comic) => comic.characters.available > 0);
        setComics(filteredResults);
        setLoadingComics(false);
    };
    
    /**
     * This reacts on selection of a comiuc in the list. Allows for the display of the comic book data.
     * @param e event, contains the value (id) of the selected comic book.
     */
    const selectComic = (e: ChangeEvent) => {
        const selectedComicId = (e.target as HTMLSelectElement).value;
        const newComic = comics.filter((comic: Comic) => comic.id.toString() === selectedComicId)[0];
        if (newComic) {
            setCharacters([]);
            const addCharacter = (param: { results: Character[] }) => {
                setCharacters((c: Character[]) => [...c, param.results[0]]);
            };
            newComic.characters.items.forEach((character) => {
                getData(`${character.resourceURI}?${getAuthParams}`, {}, addCharacter);
            });
        }
        if (selectedComicId !== '0') {
            setSelectedComic(newComic);
        } else {
            setSelectedComic(undefined);
            setCharacters([]);
        }
    };

    /**
     * This displays the select box containing the list of comics available.
     * @param props array, the list of comics to display in the Select
     * @returns React component (the select box)
     */
    const ComicsList = (props: { comics: Comic[] }) => {
        const { comics } = props;
        return (
            <p>
                <label htmlFor="comics">Select a comic book: </label>
                <select value={selectedComic?.id || 0} name="comics" id="comics" onChange={(e) => selectComic(e)}>
                    <option value={0}>Choose a comic...</option>
                    {comics.map((comic) => (
                        <option key={comic.id} value={comic.id}>{comic.title}</option>
                    ))}
                </select>
            </p>
        );
    };

    /**
     * Initial gathering of the data.
     */
    useEffect(() => {
        getData(marvel.comics, { orderBy: 'title', limit: 100 }, getComicsCallback);
    }, []);

    return (
        <>
            <h1>Comic book library</h1>
            {loadingComics ? <Loading type={loadingTypes.comics} /> : <ComicsList comics={comics} />}
            <hr />
            <CharactersContext.Provider value={characters}>
                {!selectedComic ? <Loading type={loadingTypes.comic} /> : <MyComic book={selectedComic} />}
            </CharactersContext.Provider>
        </>
    )
}

export default App;

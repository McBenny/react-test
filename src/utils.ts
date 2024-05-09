import { createContext } from "react";
import { Character } from "./types";

const marvelUrl = 'https://gateway.marvel.com/v1/public/';
const ts = '76de593ab3e2';
const marvelPublicKey = 'dacd124f34943f4f40c5692e6a750038';
const hash = 'ce08ab8a344be46c83c2248debb67bc0';

export const getAuthParams = `&ts=${ts}&apikey=${marvelPublicKey}&hash=${hash}`;

export const marvel = {
    comics: `${marvelUrl}comics?${getAuthParams}`,
};

export const loadingTypes = {
    comics: 'COMICS',
    comic: 'COMIC'
};

export const CharactersContext = createContext<Character[] | null>(null);

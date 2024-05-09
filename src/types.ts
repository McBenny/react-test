export type Comic = {
    characters: {
        available: number;
        items: {
            resourceURI: string;
            name: string;
        }[]
    };
    description: string;
    id: number;
    images: Image;
    issueNumber: number;
    stories: object;
    title: string;
    thumbnail: Image;
}

export type Character = {
    comics: object;
    description: string;
    events: object;
    id: number;
    modified: string;
    name: string;
    resourceURI: string;
    series: object;
    stories: object;
    thumbnail: Image;
    urls: object[];
}

type Image = {
    path: string;
    extension: string;
}
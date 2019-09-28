export interface Movie {
    id: number;
    title: string;
    genre: string;
    boxOffice: number;
    hasTeaser: boolean;
    dateOfLaunch: Date;
    active: boolean;
    imageUrl: string;
}
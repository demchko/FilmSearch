export interface IRatings{
    Source: string;
    Value: string;
}

export interface IFilm{
    Title: string;
    Poster: string;
    Type: string;
    Year: number;
    imdbID: string;
    Actors: string;
    Awards: string;
    Country: string;
    Director: string;
    Genre: string;
    Plot: string;
    Ratings: IRatings[];
    Released: string;
    Runtime: string;
}